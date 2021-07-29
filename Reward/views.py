from django.http import HttpResponse, Http404

from django.shortcuts import render

from django.contrib.auth.decorators import login_required
from django.template import RequestContext
from django.contrib.auth.models import User 
import re
from django.db.models import Avg, Max, Min, Sum
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from django.shortcuts import render, redirect
from Reward.models import Rating
from Reward.models import Register 

from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login as auth_login
from django.shortcuts import render

import csv

from django.http import HttpResponse

from django.views.decorators.csrf import csrf_exempt
from django.template import RequestContext
from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponseRedirect
from django.conf import settings

from django.contrib import messages
import string 

import json
from datetime import datetime
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.core.mail import send_mail
import datetime 
from django.db.models import Q
from Reward.utils import success_message, error_message
from django.http import JsonResponse
from django.template.loader import render_to_string
import random
import string

# payment

import requests
import time
from xml.etree import ElementTree as etree
from requests.packages.urllib3.exceptions import InsecureRequestWarning
requests.packages.urllib3.disable_warnings(InsecureRequestWarning)   
import xmltodict
import json
import datetime
from datetime import timedelta
from lxml import objectify as xml_objectify



from django.shortcuts import render,get_object_or_404
from .models import  Customer
from .forms import  CustomerForm
from django.template.loader import render_to_string
from django.http import JsonResponse





# Video chat imports
import requests
import base64
import json
from django.shortcuts import render
from django.http import HttpResponse, Http404
from django.template import loader
from django.conf import settings
import random


def search(request):
    if request.is_ajax():
        q = request.GET.get('q')
        if q is not None:            
            results = Customer.objects.filter(  
                Q( fname__contains = q ) |
                Q( lname__contains = q ) )  
            context = {'results': results}        
            return render(request, 'Reward/results.html', context) 

         




@login_required
def render_view(request, template, data):
    '''
    wrapper for rendering views , loads RequestContext
    @request  request object
    @template  string
    @data  tumple
    '''
    context = RequestContext(request)

    # store login info

    # user permissions
    if request.user.is_authenticated():
        permissions = (request.user)
        print("User permissions %s " % (permissions))
        profile = {}
        try:
            profile = Register.objects.filter(user=request.user)
        except PageNotAnInteger:
            if request.user.is_superuser:
                create_superuser(request.user)         
                
        data.update({'profile': profile, 'perms': permissions})
    # for pagnation
    #debug(permissions, 'permissions')

    return render(request, template, data) 
  
   
   







def create_superuser(user):
    '''we are not doing this'''
    profile = Register.objects.create(user=user)



def get_user_permissions(user):
    '''return user permissions as a dict'''
    permissions = {}
    for x in Permission.objects.filter(user=user):
        permissions.update({x.codename: True})
    return permissions

    




def customer_dash(request):
    """Index page, force login here"""
    latest_questions = None
    context = RequestContext(request)

    context = {
    'latest_questions': latest_questions,
}

  
    return render(request, 'Reward/index.html', context) 







def logout(request):
    auth.logout(request)
    return render(request,'Reward/index.html')
 



def landing(request):
    """Index page, force login here"""
    latest_questions = None
    context = RequestContext(request) 

    context = {
    'latest_questions': latest_questions,
}

    

    if  request.user.is_authenticated:
        print("User loged in")
        return render(request, 'Reward/login_user.html', context) 

  

    return render(request, 'Reward/login_user.html', context) 




@csrf_exempt
def login_user(request):
    # Like before, obtain the context for the user's hrequest.
    context = RequestContext(request)
    msg = ''
    response = None
    log = False
    convmem = ''
    phonedoctor = ''
    data = {}
    password = None
    username = None
    pay_status = None
    staf=False
    auth_error = False
    dname = None
    check_user = None
    dp_room1 = None
    dp_room = None
    check_doct = None
    dtelno=None
    type = None
    doctor_users =None
    doctor_users = None
    doctor_sms_data = {}
    ilness= ''
    role = None
    ordered_drugs = None
    query = None
    labtests = None

  

    try:
        check_user = Register.objects.get(username=request.user.username)
        role = check_user.role2
    except Exception as e:
        pass

    print("ROLEE")
    print(role)


    
    print("USEEERRR LOGGGGGGGG")
    # If the request is a HTTP POST, try to pull out the relevant information.
    if request.method == 'POST':
        # Gather the username and password provided by the user.
        # This information is obtained from the login form.
        password = request.POST.get('password', None)
        username = request.POST.get('username', None)
        

        print("")
        try:
            check_user = Register.objects.get(password=password, username=username)
            role = check_user.role2
           
            print("Role %s" %(role))


        except Register.DoesNotExist:
            listing = None
           
            auth_error = True
            return render(request, 'Reward/login_user.html', {'log':log, 'auth_error':auth_error}) 
            
            
                

        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
               



                print("Username", username)
                print("Password", password)

                request.session['username'] = request.user.username
                request.session['role'] = role



                print("Username 1", username)
                print("Password 1", password)
               
                return render(request, 'Reward/index.html', {'role':role, 'username':username}) 
                
                 


    return render(request, "Reward/login_user.html", {
        
            })






def dashboard(request):
    
    response = False
    post_values = {}
    context = RequestContext(request)
    Check_area = None
    saved_results = ''
    dp_room = ''
    username  = ''
    context = RequestContext(request)

    staff_no = " "
    staff_name  = " "
    labtest = True
   #GETTING RECORDS OF SQLITE3 
    saved_results=Customer.objects.order_by('-id')

    print(("Length %s" % (len(saved_results))))
    a = len(saved_results)
    role="customer_care"

    paginator = Paginator(saved_results, 10) # 6 posts per page
    page = request.GET.get('page')



    try:
        saved_results = paginator.page(page)
    except PageNotAnInteger:
        saved_results = paginator.page(1)
    except EmptyPage:
        saved_results = paginator.page(paginator.num_pages)




    try:
        if a >= 1:
            return render(request, 'Reward/dashboard.html', {'role':role,'books':saved_results}) 
    except Exception as e:
        return render(request, 'Reward/dashboard.html', {'role':role,'books':saved_results,'role':role}) 

    return render(request, 'Reward/dashboard2.html', {'role':role, 'books':saved_results}) 






@csrf_exempt
def rating(request):
    context = RequestContext(request)
    post_values = {}
    push_notif = {}
    AfricasTalk = None
    AfricasTalk  = AfricasTalk
    doctor_sms_data = {}
    dp_room = None
    password = None
    dname = None
    pdiog = None
    dtelno = None
    ptelno = None
    ge_city = None
    telno = ''
    doctor_users = None
    check_phone= None

    us = None
    dtelno = ''
    gender = None
    username = None
    check_record = None
    check_score  = None
    addedscore = False
    lname = None
    cust_score=None
    doctor_none = False
    if 'username' in request.session:
        username = request.session['username']
        print("Seesssion Username of Reward %s" % (username))

    
        
    if request.POST:
       
        post_values = request.POST.copy()
        fname = request.POST.get('fname', False)
        fullname = request.POST.get('fullname', False)
        

        free_product = request.POST.get('free_product', 0)
        rating = request.POST.get('rating', False)
        rating=float(rating)

        try:
            check_record = Customer.objects.get(fname=fname)
        except Exception as e:
            pass

        check_phone =   check_record.phone
        lname =   check_record.lname   
        if fname and fullname:

            cust_score=Rating(fname=fname,lname=lname, fullname=fullname, score= int(rating), fscore=free_product ,
                 phone= check_phone)
            cust_score.save()

        if cust_score:
             addedscore= True

        try:
            check_scores = Rating.objects.filter(fname=fname)
        except Exception as e:
            check_scores = Rating.objects.get(fname=fname)
            pass

        check_scores = Rating.objects.filter(fname=fname)
        avscore = Rating.objects.filter(fname=fname).aggregate(Avg('score'))

        num_free = Rating.objects.filter(fname=fname).exclude(fscore__exact='').count()
        
        check_record.avscore =avscore['score__avg']
        check_record.num_free = num_free
        check_record.save()

        # av_score  = sum(check_scores.score)/2 
        # print(av_score)
        # sum_a = sum([item.column for item in queryset])
         # Product.objects.all().aggregate(Avg('price'))


       
        return render(request, 'Reward/customer_reward.html', {'addedscore':addedscore}) 


    else:
        return render(request, 'Reward/customer_reward.html', {'addedscore':addedscore}) 





#customer_report2


def customer_report(request):
    
    response = False
    post_values = {}
    context = RequestContext(request)
    Check_area = None
    saved_results = ''
    dp_room = ''
    username  = ''

    staff_no = " "
    staff_name  = " "
    labtest = True
   #GETTING RECORDS OF SQLITE3 
    saved_results=Customer.objects.order_by('-id')

    print(("Length %s" % (len(saved_results))))
    a = len(saved_results)
    role="customer_care"

    paginator = Paginator(saved_results, 10) # 6 posts per page
    page = request.GET.get('page')



    try:
        saved_results = paginator.page(page)
    except PageNotAnInteger:
        saved_results = paginator.page(1)
    except EmptyPage:
        saved_results = paginator.page(paginator.num_pages)




    try:
        if a >= 1:
            return render(request, 'Reward/customer_report.html', {'role':role,'books':saved_results}) 
    except Exception as e:
        return render(request, 'Reward/customer_report2.html', {'role':role,'books':saved_results}) 

    return render(request, 'Reward/customer_report2.html', {'role':role,'books':saved_results}) 




def export_customer_csv(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="4rewards_bkp.csv"'

    writer = csv.writer(response)
    writer.writerow(['FirstName', 'LastName', 'Phone', 'Stars', 'EntryDate', 'FreeItem'])
              


    rating = Rating.objects.all().values_list('fname', 'lname', 'phone', 'score', 'date', 'fscore')
    for rating in rating:
        writer.writerow(rating)

    return response


def customer_details(request, id):
    
    response = False
    post_values = {}
    context = RequestContext(request)
    Check_area = None
    saved_results = ''
    dp_room = ''
    username  = ''

    staff_no = " "
    staff_name  = " "
    labtest = True
   #GETTING RECORDS OF SQLITE3 
    cust_results=Customer.objects.get(id=id)
    fname  = cust_results.fname 
    try:
        saved_results = Rating.objects.filter(fname=fname)
    except Exception:
        saved_results = Rating.objects.filter(fname=fname)
   

    print(("Length %s" % (len(saved_results))))
    a = len(saved_results)
    role="customer_care"

    paginator = Paginator(saved_results, 10) # 6 posts per page
    page = request.GET.get('page')



    try:
        saved_results = paginator.page(page)
    except PageNotAnInteger:
        saved_results = paginator.page(1)
    except EmptyPage:
        saved_results = paginator.page(paginator.num_pages)




    try:
        if a >= 1:
            return render(request, 'Reward/customer_details.html', {'role':role,'books':saved_results}) 
    except Exception as e:
        return render(request, 'Reward/customer_details2.html', {'role':role,'books':saved_results}) 

    return render(request, 'Reward/customer_details2.html', {'role':role,'books':saved_results}) 





def customers_report_list(request):
    
    response = False
    post_values = {}
    context = RequestContext(request)
    Check_area = None
    saved_results = ''
    dp_room = ''
    username  = ''

    staff_no = " "
    staff_name  = " "
    labtest = True
   #GETTING RECORDS OF SQLITE3 
  
    try:
        saved_results = Rating.objects.filter()
    except Exception:
        saved_results = Rating.objects.filter()
   

    print(("Length %s" % (len(saved_results))))
    a = len(saved_results)
    role="customer_care"

    paginator = Paginator(saved_results, 10) # 6 posts per page
    page = request.GET.get('page')



    try:
        saved_results = paginator.page(page)
    except PageNotAnInteger:
        saved_results = paginator.page(1)
    except EmptyPage:
        saved_results = paginator.page(paginator.num_pages)




    try:
        if a >= 1:
            return render(request, 'Reward/customers_report_list.html', {'role':role,'books':saved_results}) 
    except Exception as e:
        return render(request, 'Reward/customers_report_list2.html', {'role':role,'books':saved_results}) 

    return render(request, 'Reward/customers_report_list2.html', {'role':role,'books':saved_results}) 

def customer_reward(request):
    
    response = False
    post_values = {}
    context = RequestContext(request)
    Check_area = None
    saved_results = ''
    dp_room = ''
    username  = ''

    staff_no = " "
    staff_name  = " "
    labtest = True
   #GETTING RECORDS OF SQLITE3 
    saved_results=Customer.objects.order_by('-id')

    print(("Length %s" % (len(saved_results))))
    a = len(saved_results)
    role="customer_care"

    paginator = Paginator(saved_results, 10) # 6 posts per page
    page = request.GET.get('page')



    try:
        saved_results = paginator.page(page)
    except PageNotAnInteger:
        saved_results = paginator.page(1)
    except EmptyPage:
        saved_results = paginator.page(paginator.num_pages)




    try:
        if a >= 1:
            return render(request, 'Reward/customer_reward.html', {'saved_results':saved_results}) 
    except Exception as e:
         return render(request, 'Reward/customer_reward2.html', {'saved_results':saved_results}) 

    return render(request, 'Reward/customer_reward2.html', {'saved_results':saved_results}) 






#Prescription  ajax handling functions


def customer_list(request):
    books = Customer.objects.all()
    return render(request, 'Reward/customer_list.html', {'books': books})


    
def save_customer_form(request, form, template_name):
    data = dict()
    if request.method == 'POST':
        if form.is_valid():
            form.save()
            data['form_is_valid'] = True
            books = Customer.objects.all()
            data['html_book_list'] = render_to_string('Reward/includes/partial_customer_list.html', {
                'books': books
            })
        else:
            data['form_is_valid'] = False
    context = {'form': form}
    data['html_form'] = render_to_string(template_name, context, request=request)
    return JsonResponse(data)


def customer_create(request):
    if request.method == 'POST':
        form = CustomerForm(request.POST)
    else:
        form = CustomerForm()
    return save_customer_form(request, form, 'Reward/includes/partial_customer_create.html')


def customer_update(request, pk):
    book = get_object_or_404(Customer, pk=pk)
    if request.method == 'POST':
        form = CustomerForm(request.POST, instance=book)
    else:
        form = CustomerForm(instance=book)
    return save_customer_form(request, form, 'Reward/includes/partial_customer_update.html')
    
def customer_delete(request, pk):
    book = get_object_or_404(Customer, pk=pk)
    data = dict()
    if request.method == 'POST':
        book.delete()
        data['form_is_valid'] = True  # This is just to play along with the existing code
        books = Customer.objects.all()
        data['html_book_list'] = render_to_string('Reward/includes/partial_customer_list.html', {
            'books': books
        })
    else:
        context = {'book': book}
        data['html_form'] = render_to_string('Reward/includes/partial_customer_delete.html',
            context,
            request=request,
        )
    return JsonResponse(data)


