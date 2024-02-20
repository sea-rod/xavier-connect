# timetable_app/views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .genetic_algorithm import genetic_algorithm

@csrf_exempt
def generate_timetable(request):
    if request.method == 'POST':
        data = request.POST.dict()
        classes = data.get('classes')
        teachers = data.get('teachers')
        days = data.get('days')
        timetable_count = int(data.get('timetable_count'))
        generations = int(data.get('generations'))

        # Convert string representations to actual objects
        classes = eval(classes)
        teachers = eval(teachers)
        days = eval(days)

        final_timetable = genetic_algorithm(classes, teachers, days, timetable_count, generations)

        result = []
        for class_, schedule in final_timetable.items():
            class_obj, created = Class.objects.get_or_create(name=class_)
            timetable_obj = Timetable(day="", classes=class_obj)
            timetable_obj.save()

            for day, lectures in schedule.schedule.items():
                day_obj, created = Timetable.objects.get_or_create(day=day, timetable=timetable_obj)

                for lecture in lectures:
                    teacher_obj, created = Teacher.objects.get_or_create(name=lecture.teacher)
                    subject_obj, created = Lecture.objects.get_or_create(subject=lecture.subject, teacher=teacher_obj)
                    day_obj.lectures.add(subject_obj)

            class_obj.timetable.add(timetable_obj)
            result.append({"class": class_, "timetable_id": timetable_obj.id})

        return JsonResponse({"result": result})

    return JsonResponse({"error": "Invalid request method"})
