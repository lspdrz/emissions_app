# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Entry',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('account', models.CharField(max_length=200)),
                ('rn', models.CharField(max_length=200)),
                ('company', models.CharField(max_length=200)),
                ('site', models.CharField(max_length=200)),
                ('reporting_year', models.IntegerField(null=True)),
                ('county', models.CharField(max_length=200)),
                ('region', models.IntegerField(null=True)),
                ('sic', models.IntegerField(null=True)),
                ('sic_description', models.CharField(max_length=200)),
                ('co_tpy', models.DecimalField(null=True, max_digits=19, decimal_places=10)),
                ('nox_tpy', models.DecimalField(null=True, max_digits=19, decimal_places=10)),
                ('pb_tpy', models.DecimalField(null=True, max_digits=19, decimal_places=10)),
                ('pm_ten_tpy', models.DecimalField(null=True, max_digits=19, decimal_places=10)),
                ('pm_two_five_tpy', models.DecimalField(null=True, max_digits=19, decimal_places=10)),
                ('so_two_tpy', models.DecimalField(null=True, max_digits=19, decimal_places=10)),
                ('voc_tpy', models.DecimalField(null=True, max_digits=19, decimal_places=10)),
            ],
        ),
    ]
