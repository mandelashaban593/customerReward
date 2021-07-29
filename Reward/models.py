# -*- coding: utf-8 -*-


from django.db import models
from datetime import datetime
# Create your models here.




from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.conf import settings

class UserDetail(models.Model):
    user = models.ForeignKey(on_delete=models.CASCADE, to=User)
    gender = models.CharField(max_length=10)



    


# How to access any field of Register model from views.py Using  built in User model  of django 
# 1.request.user.register.telno or  request.user.register.city  or request.user.register.state or  request.user.register.role2
class Register(models.Model):

    user = models.ForeignKey(User, blank=True, default=False,on_delete=models.CASCADE, related_name="register")
    fname = models.CharField(blank=True, max_length=20,  default=False)
    sname = models.CharField(blank=True, max_length=30,  default=False)
    page = models.IntegerField(blank=True,  default=False)
    gender = models.CharField(blank=True, max_length=30,  default=False)
    telno = models.CharField(blank=True, max_length=20,  default=False)
    username = models.CharField(blank=True, max_length=20,default=False)
    password= models.CharField(max_length=50,  default=False)
    email = models.CharField(blank=True,max_length=50,  default=False)
    street = models.CharField(blank=True,max_length=50,  default=False)
    city = models.CharField(blank=True,max_length=20, default=False)
    state = models.CharField(blank=True,max_length=20,  default=False)
    role2 = models.CharField(max_length=20, default=False)
    access_right= models.CharField(max_length=30,default=False)
    account_blocked = models.BooleanField(default=False)
    profphoto = models.ImageField(upload_to ='uploads/', default=False) 
    code = models.CharField(max_length=12, blank=True,default=False)
    reward_amount = models.DecimalField(max_digits=16,
        decimal_places=5, default=0.0)


    
    def get_names(self):
        '''
        Return a users phonenumber
        '''
        text = '%s %s' % (self.fname, self.lname)
        try:
            text = text.encode('utf-8')
        except UnicodeEncodeError:
            pass
        return text

    def __unicode__(self):
        return self.username




@receiver(post_save, sender=User)
def create_user_register(sender, instance, created, **kwargs):
    if created:
        Register.objects.create(user=instance)



class Customer(models.Model):
 
    '''store login data'''
    date = models.DateTimeField(auto_now_add=True)
    fname = models.CharField(blank=True,max_length=50,  default=False)
    lname= models.CharField(blank=True,max_length=50,  default=False)
    phone = models.CharField(blank=True,max_length=50,  default=False)
    avscore = models.CharField(blank=True,max_length=50,  default=0)
    num_free = models.CharField(blank=True,max_length=50,  default=0)

class Rating(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    fname = models.CharField(blank=True,max_length=50,  default=False)
    lname= models.CharField(blank=True,max_length=50,  default=False)
    fullname = models.CharField(blank=True,max_length=50,  default=False)
    phone = models.CharField(blank=True,max_length=50,  default=False)
    score = models.FloatField()
    avscore = models.CharField(blank=True,max_length=50,  default=0)
    fscore = models.CharField(blank=True,max_length=50,  default=0)

    def __str__(self):
        return str(self.pk)

    @property
    def getavstar(self):
        if self.avscore == '':
            return 'None'
        return self.avscore




    