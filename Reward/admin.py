# -*- coding: utf-8 -*-


from django.contrib import admin

# Register your models here.
from Reward.models import  Rating,Customer, Register







@admin.register(Register)
class RegisterAdmin(admin.ModelAdmin):
  search_fields = ['username','telno','email','city','street','role2']
  list_display = ('password','user','fname','sname','page','gender','telno','username','email','street','city','role2','access_right','account_blocked')
  list_filter = ('username','telno','email','city','street','role2',)




@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
  date_hierarchy = 'date'
  search_fields = ['date','fname','lname', 'phone', 'avscore','num_free']

  list_display = ('date','fname','lname', 'phone', 'avscore','num_free')
  list_filter = ('date','fname','lname', 'phone', 'avscore', 'num_free' , )









@admin.register(Rating)
class RatingAdmin(admin.ModelAdmin):
  date_hierarchy = 'date'
  search_fields = ['date','fname','lname', 'phone', 'fullname', 'score', 'avscore', 'fscore']

  list_display = ('date','fname','lname', 'phone', 'fullname', 'score', 'avscore', 'fscore')
  list_filter = ('date','fname','lname', 'phone', 'fullname', 'score', 'avscore', 'fscore',)






