# timetable_app/genetic_algorithm.py

import random
import copy

class Lecture:
    def __init__(self, subject, teacher):
        self.subject = subject
        self.teacher = teacher

class Timetable:
    def __init__(self, days):
        self.days = days
        self.schedule = {day: [] for day in days}

    def add_lecture(self, day, lecture):
        self.schedule[day].append(lecture)

def generate_initial_population(classes, teachers_by_subject, days, timetable_count):
    population = []
    for _ in range(timetable_count):
        timetable = {class_: Timetable(days) for class_ in classes.keys()}
        class_keys_list = list(classes.keys())  # Convert dict_keys object to list
        for day in days:
            for class_ in classes:
                subjects = classes[class_]
                random.shuffle(subjects)
                for subject in subjects:
                    teachers = teachers_by_subject.get(subject, [])
                    if teachers:
                        teacher_index = class_keys_list.index(class_) % len(teachers)
                        teacher = teachers[teacher_index]
                        lecture = Lecture(subject, teacher)
                        timetable[class_].add_lecture(day, lecture)
        population.append(timetable)
    return population

def fitness(timetable):
    conflicts = 0
    for class_, schedule in timetable.items():
        teacher_lectures = {}
        for day, lectures in schedule.schedule.items():
            for lecture in lectures:
                teacher = lecture.teacher
                if teacher in teacher_lectures:
                    if day in teacher_lectures[teacher]:
                        conflicts += 1
                    else:
                        teacher_lectures[teacher].append(day)
                else:
                    teacher_lectures[teacher] = [day]
    return conflicts

def crossover(parent1, parent2):
    child = copy.deepcopy(parent1)
    for class_, schedule in child.items():
        for day, lectures in schedule.schedule.items():
            for lecture in lectures:
                if random.choice([True, False]):
                    teacher = random.choice(parent2[class_].schedule[day]).teacher
                    child[class_].add_lecture(day, Lecture(lecture.subject, teacher))
    return child

def mutate(timetable, classes, teachers_by_subject, days):
    mutated_timetable = copy.deepcopy(timetable)
    class_to_mutate = random.choice(list(mutated_timetable.keys()))
    day_to_mutate = random.choice(days)
    
    # Remove a random lecture
    if mutated_timetable[class_to_mutate].schedule[day_to_mutate]:
        mutated_timetable[class_to_mutate].schedule[day_to_mutate].pop(random.randint(0, len(mutated_timetable[class_to_mutate].schedule[day_to_mutate])-1))

    # Keep track of assigned teachers for each subject
    assigned_teachers = {}
    for subject in classes[class_to_mutate]:
        assigned_teachers[subject] = []

    # Add new lectures based on the order of subjects within the class
    for subject in classes[class_to_mutate]:
        teachers = teachers_by_subject.get(subject, [])
        if teachers:
            # Find the index of the current subject within the class
            subject_index = classes[class_to_mutate].index(subject)
            # Assign teacher based on the subject index and availability
            for teacher in teachers:
                if teacher not in assigned_teachers[subject]:
                    assigned_teachers[subject].append(teacher)
                    new_lecture = Lecture(subject, teacher)
                    mutated_timetable[class_to_mutate].add_lecture(day_to_mutate, new_lecture)
                    break  # Assign only one teacher per subject

    return mutated_timetable

def genetic_algorithm(classes, teachers_by_subject, days, timetable_count, generations):
    population = generate_initial_population(classes, teachers_by_subject, days, timetable_count)
    for generation in range(generations):
        population.sort(key=lambda x: fitness(x))
        if fitness(population[0]) == 0:
            return population[0]
        
        # Select the top 10% of the population as parents
        parents = population[:int(timetable_count * 0.1)]

        # Generate offspring through crossover
        offspring = []
        for _ in range(timetable_count - len(parents)):
            parent1, parent2 = random.sample(parents, 2)
            child = crossover(parent1, parent2)
            offspring.append(child)

        # Apply mutation to some offspring
        for _ in range(int(timetable_count * 0.1)):
            mutated_child = mutate(random.choice(offspring), classes, teachers_by_subject, days)
            offspring.append(mutated_child)

        # Combine parents and offspring to form the next generation
        population = parents + offspring

    return population[0]
