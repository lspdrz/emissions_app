from rest_framework import generics

from .models import Entry
from .serializers import EntrySerializer

class EntryList(generics.ListCreateAPIView):
    """
    API endpoint for listing and creating Entry objects
    """
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer

""" Import csv file into django model, only needed for initial data transfer from CSV to database """
# def import_db(request):
#
#     data = open('/Users/luispedraza/Projects/websites/emissions_app/emissions_app/2015statesum.csv', 'r')
#
#     for line in data:
#         line = line.split(',')
#         if line[0] != '':
#             tmp = Entry.objects.create()
#             tmp.account = line[0]
#             tmp.rn = line[1]
#             tmp.company = line[2]
#             tmp.site = line[3]
#             tmp.reporting_year = line[4]
#             tmp.county = line[5]
#             tmp.region = line[6]
#             tmp.sic = line[7]
#             tmp.sic_description = line[8]
#             tmp.co_tpy = Decimal(line[9])
#             tmp.nox_tpy = Decimal(line[10])
#             tmp.pb_tpy = Decimal(line[11])
#             tmp.pm_ten_tpy = Decimal(line[12])
#             tmp.pm_two_five_tpy = Decimal(line[13])
#             tmp.so_two_tpy = Decimal(line[14])
#             tmp.voc_tpy = Decimal(line[15])
#
#             tmp.save()
#     data.close()
