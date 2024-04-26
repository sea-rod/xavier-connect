# timetable_app/views.py

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .genetic_algorithm import genetic_algorithm
from .permissions import IsTeacherOnly

class TimetableGenerator(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated, IsTeacherOnly,)

    def post(self, request):
        received_data = request.data
        classes = received_data.get('classes')
        teachers_by_subject = received_data.get('teachers_by_subject')

        days = ["mon", "tue", "wed", "thu", "fri", "sat"]
        timetable_count = 100
        generations = 1000

        final_timetable = genetic_algorithm(classes, teachers_by_subject, days, timetable_count, generations)

        # Assign teachers based on the occurrence of subjects within the class list
        assigned_teachers = {}
        for class_, subjects in classes.items():
            class_assigned_teachers = {}
            for subject in subjects:
                teachers = teachers_by_subject.get(subject, [])
                if teachers:
                    if subject not in class_assigned_teachers:
                        class_assigned_teachers[subject] = teachers.pop(0)
                    else:
                        class_assigned_teachers[subject] = teachers.pop(1)
            assigned_teachers[class_] = class_assigned_teachers


        # Replace teacher placeholders in the final timetable
        for class_, schedule in final_timetable.items():
            for day, lectures in schedule.schedule.items():
                for lecture in lectures:
                    if lecture.subject in assigned_teachers[class_]:
                        lecture.teacher = assigned_teachers[class_][lecture.subject]
                    else:
                        print("(ttgenerator)Subject not found in assigned_teachers:", lecture.subject)  # Debug print statement

        # Format the final timetable for response
        result = {}
        for class_, schedule in final_timetable.items():
            class_timetable = {}
            for day, lectures in schedule.schedule.items():
                lectures_info = [{"subject": lecture.subject, "teacher": lecture.teacher} for lecture in lectures]
                class_timetable[day.lower()] = lectures_info
            result[class_] = class_timetable

        return Response(result)

