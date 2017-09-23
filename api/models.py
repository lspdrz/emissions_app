from django.db import models

class Entry(models.Model):
	primary_key = True
	account = models.CharField(max_length=200)
	rn = models.CharField(max_length=200)
	company = models.CharField(max_length=200)
	site = models.CharField(max_length=200)
	reporting_year = models.IntegerField(null=True)
	county = models.CharField(max_length=200)
	region = models.IntegerField(null=True)
	sic = models.IntegerField(null=True)
	sic_description = models.CharField(max_length = 200)
	co_tpy = models.DecimalField(max_digits=19, decimal_places=10, null=True)
	nox_tpy = models.DecimalField(max_digits=19, decimal_places=10, null=True)
	pb_tpy = models.DecimalField(max_digits=19, decimal_places=10, null=True)
	pm_ten_tpy = models.DecimalField(max_digits=19, decimal_places=10, null=True)
	pm_two_five_tpy = models.DecimalField(max_digits=19, decimal_places=10, null=True)
	so_two_tpy = models.DecimalField(max_digits=19, decimal_places=10, null=True)
	voc_tpy = models.DecimalField(max_digits=19, decimal_places=10, null=True)
