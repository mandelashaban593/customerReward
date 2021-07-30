from django import forms
from .models import Customer

from django.db import models

class CustomerForm(forms.ModelForm):
    class Meta:
        model = Customer
        fields = ('fname','lname', 'phone', )



