# Generated by Django 3.0.5 on 2021-07-27 20:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Reward', '0004_auto_20210727_2039'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='avscore',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
    ]