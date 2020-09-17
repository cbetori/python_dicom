from django.conf.urls import url

from . import views

urlpatterns = [
    url('image/', views.image, name='image'),
    url('patient/', views.patient, name='patient'),
    url('study/', views.study, name='study'),
]
