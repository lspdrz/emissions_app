from django.conf.urls import url, include
from . import views

urlpatterns = [
	url(r'^$', views.EntryList.as_view(), name='entry-list'),
	url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
	# Url commented out, only used for initially uploading data from CSV into database:
	# url(r'^import_db', views.import_db),
]
