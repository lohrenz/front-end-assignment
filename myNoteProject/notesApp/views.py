from django.shortcuts import render

# API imports 
from rest_framework.response import Response
from rest_framework.decorators import api_view


# Model import
from .models import Note


# Serializer import 
from .serializer import noteSerializer


# API routes
@api_view(['GET'])
def getRoute(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returnt een array van alle notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returnt een enkele note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creeert een nieuwe note met een post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Update een note met put request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Delete een bestaande note'
        },
    ]
    return Response(routes)

@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all()
    serializer = noteSerializer(notes, many=True)
    return Response(serializer.data)    


@api_view(['GET'])
def getNote(request, pk):
    note = Note.objects.get(id=pk)
    serializer = noteSerializer(note, many=False)
    return Response(serializer.data)    

# Create your views here.
