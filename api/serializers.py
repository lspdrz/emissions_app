from rest_framework import serializers

from .models import Entry

class EntrySerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Entry
		fields = ('id', 'account', 'rn', 'company', 'site', 'reporting_year',
			'county', 'region', 'sic', 'sic_description', 'co_tpy', 'nox_tpy',
			'pb_tpy', 'pm_ten_tpy', 'pm_two_five_tpy', 'so_two_tpy', 'voc_tpy')
