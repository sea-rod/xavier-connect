# Generated by Django 4.2.3 on 2023-11-25 17:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        ('accounts', '0002_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Class',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('class_name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='ClassStream',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('class_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.class')),
            ],
        ),
        migrations.AlterField(
            model_name='customuser',
            name='group',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='auth.group'),
        ),
        migrations.CreateModel(
            name='Stream',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stream_name', models.CharField(max_length=225)),
                ('class_name', models.ManyToManyField(through='accounts.ClassStream', to='accounts.class')),
            ],
        ),
        migrations.AddField(
            model_name='classstream',
            name='stream_name',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.stream'),
        ),
    ]
