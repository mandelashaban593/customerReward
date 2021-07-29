from django.conf.urls import url
from django.contrib import admin
from Reward import views
from django.urls import include, path


app_name = 'Reward'
urlpatterns = [
    path('customer_dash', views.customer_dash, name='customer_dash'),
    path('login_user', views.login_user, name='login_user'),
    path('logout', views.logout, name='logout'),
    path('customer_reward', views.customer_reward, name='customer_reward'),
    path('rating', views.rating, name='rating'),
    path('dashboard', views.dashboard, name='dashboard'),
    path('customer_report', views.customer_report, name='customer_report'),
    path('customer_details/<int:id>/', views.customer_details, name='customer_details'),
    path('export_customer_csv', views.export_customer_csv, name='export_customer_csv'),
    
    path('customers_report_list', views.customers_report_list, name='customers_report_list'),
    path('<int:pk>/delete/', views.customer_delete, name='customer_delete'),
    path('<int:pk>/update/', views.customer_update, name='book_update'),
    path('create', views.customer_create, name='book_create'),
    path('create', views.customer_list, name='book_list'),
    path('search', views.search, name='search'),
    
   
]





