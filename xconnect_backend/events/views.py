from django.views.generic import View, DetailView, FormView
from django.views.generic.detail import SingleObjectMixin
from django.forms.models import BaseModelForm
from django.http import HttpResponse
from django.urls import reverse_lazy
from django.shortcuts import redirect
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import mixins, viewsets
from rest_framework.response import Response
from uuid import uuid4
from django.shortcuts import render
from .forms import EventPartForm, CollegeRegisterForm
from .serializer import EventSerializer, SubEventSerializer
from .signals import college_saved
from .models import Event, SubEvent, College, Participant
from .permissions import IsTeacher


class EventViewSet(viewsets.ModelViewSet):
    permission_classes = (IsTeacher,)
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def list(self, request, *args, **kwargs):
        serializer = self.get_serializer(
            self.get_queryset(),
            many=True,
            context={"request": request, "include_sub_events": False},
        )
        return Response(serializer.data)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(
            instance, context={"request": request, "include_sub_events": True}
        )
        return Response(serializer.data)

    def perform_create(self, serializer):
        serializer.save(user_id=self.request.user)


class SubEventDetailsAPI(
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    viewsets.GenericViewSet,
):
    serializer_class = SubEventSerializer
    queryset = SubEvent.objects.all()
    permission_classes = (IsTeacher,)
    parser_classes = (MultiPartParser, FormParser)


class RegisterGet(DetailView):
    model = Event
    template_name = "register_participants.html"

    def get_context_data(self, **kwargs) -> dict:
        context = super().get_context_data(**kwargs)
        context["form"] = CollegeRegisterForm()
        return context


class RegisterPost(SingleObjectMixin, FormView):
    model = Event
    form_class = CollegeRegisterForm
    template_name = "register_participants.html"

    def post(self, request, *args, **kwargs) -> HttpResponse:
        self.object = self.get_object()
        return super().post(request, *args, **kwargs)

    def form_valid(self, form: BaseModelForm) -> HttpResponse:
        college_form = form.save(commit=False)
        college_form.token = str(uuid4())
        college_form.event_id = self.object
        college_form.save()
        college_saved.send(sender=self.__class__, instance=self, token=college_form)
        return super().form_valid(form)

    def get_success_url(self) -> str:
        return reverse_lazy("regis_success")


class Register(View):
    def get(self, request, *args, **kwargs):
        view = RegisterGet.as_view()
        return view(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        view = RegisterPost.as_view()
        return view(request, *args, **kwargs)


class RegisterSubEvent(View):
    def post(self, request, token, *args, **kwargs):
        try:
            college = College.objects.get(token=token)
            data = request.POST
            form = EventPartForm(college.event_id, request.POST)
            if form.is_valid():
                sub_events = SubEvent.objects.filter(event_id=1)
                for sub_event in sub_events:
                    for part_num in range(sub_event.no_of_participants):
                        name = data.get(f"part_{sub_event.name}_{part_num + 1}")
                        participant = Participant(
                            sub_event_id=sub_event, college=college, name=name
                        )
                        participant.save()
                college.token = None
                college.save()
            return redirect("regis_success")

        except Event.DoesNotExist:
            print("kk")
            return HttpResponse("hello")

    def get(self, request, token, *args, **kwargs):
        try:
            college = College.objects.get(token=token)
            form = EventPartForm(college.event_id)
            return render(
                request,
                "register_participants.html",
                {"form": form, "event_name": college.event_id.name},
            )
        except College.DoesNotExist:
            return HttpResponse("yooo")


class RegisterSuccessful(View):
    def get(self, request, *args, **kwargs):
        return render(request, "success.html")
