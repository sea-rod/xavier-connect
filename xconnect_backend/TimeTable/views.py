# timetable_app/views.py
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .genetic_algorithm import genetic_algorithm
from .permissions import IsTeacherOnly
class TimetableGenerator(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,IsTeacherOnly,)
    def post(self, request):
        received_data = request.data
        classes = received_data.get('classes')
        teachers = received_data.get('teachers')
        
        days = ["mon", "tue", "wed", "thu", "fri", "sat"]
        timetable_count = 100
        generations = 1000

        final_timetable = genetic_algorithm(classes, teachers, days, timetable_count, generations)

        result = {}
        for class_, schedule in final_timetable.items():
            class_timetable = {}
            for day, lectures in schedule.schedule.items():
                lectures_info = [{"subject": lecture.subject, "teacher": lecture.teacher} for lecture in lectures]
                class_timetable[day.lower()] = lectures_info
            result[class_] = class_timetable

        return Response(result)
