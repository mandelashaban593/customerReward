# Generated by Django 3.0.5 on 2021-07-27 21:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Reward', '0006_auto_20210727_2047'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='avscore',
            field=models.CharField(blank=True, default=0, max_length=50),
        ),
        migrations.AlterField(
            model_name='rating',
            name='avscore',
            field=models.CharField(blank=True, default=0, max_length=50),
        ),
    ]