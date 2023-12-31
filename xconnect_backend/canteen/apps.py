from django.apps import AppConfig


class CanteenConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'canteen'

    def ready(self) -> None:
        from . import signals

        return super().ready()
