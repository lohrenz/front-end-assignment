from django.db import models

# Create your models here.
class Note(models.Model):
    title = models.CharField(max_length=20,  blank=True)
    body = models.TextField(null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title