from django.http import FileResponse
from django.shortcuts import get_object_or_404, HttpResponse, redirect
from django.conf import settings
import os


def download_file(request, file_path):
    file_path = os.path.join(settings.DOCS_ROOT, os.path.normpath(file_path))
    print(file_path, os.path.exists(file_path), os.path.isfile(file_path))
    if os.path.exists(file_path) and os.path.isfile(file_path):
        print("LL")
        response = FileResponse(open(file_path, "rb"))
        response["Content-Disposition"] = 'attachment; filename="' + file_path + '"'
        return response
    else:
        return redirect("https://xavier-connect-rho.vercel.app/")
