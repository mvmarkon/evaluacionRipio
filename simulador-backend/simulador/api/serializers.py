from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Account, Currency, CurrencyContainer, Operation


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'groups')
        extra_kwargs = {'password' : {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('id', 'owner')

class CurrencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Currency
        fields = ('name')

class CurrencyContainerSerializer(serializers.ModelSerializer):
    class Meta:
        model = CurrencyContainer
        fields = ('currency', 'balance', 'account')

class OperationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Operation
        fields = ('origin_account', 'destination_account', 'created', 'date_done', 'state', 'currency', 'ammount')
