# Generated by Django 3.2.6 on 2021-12-19 17:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('podcasts', '0002_podcast_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='podcast',
            name='image',
            field=models.ImageField(null=True, upload_to=''),
        ),
    ]
