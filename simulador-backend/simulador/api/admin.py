from django.contrib import admin
from .models import Account, Currency, Operation, CurrencyContainer

# Register your models here.
class AccountAdmin(admin.ModelAdmin):
    base_model = Account

class CurrencyAdmin(admin.ModelAdmin):
    base_model = Currency

class OperationAdmin(admin.ModelAdmin):
    base_model = Operation

class CurrencyContainerAdmin(admin.ModelAdmin):
    base_model = CurrencyContainer

admin.site.register(CurrencyContainer,CurrencyContainerAdmin)
admin.site.register(Account,AccountAdmin)
admin.site.register(Currency,CurrencyAdmin)
admin.site.register(Operation, OperationAdmin)
