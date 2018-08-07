from djongo import models
from django.contrib.auth.models import User
from decimal import Decimal
from django.utils.timezone import now


class Account(models.Model):
    owner = models.ForeignKey(User, unique=True, related_name='account', on_delete=models.CASCADE)

    def __str__(self):
        return "Cuenta de %s" % self.owner.username

    class Meta:
        ordering = ['-id']
        verbose_name = u'Cuenta'
        verbose_name_plural = u'Cuentas'

class Currency(models.Model):
    name = models.CharField(max_length=150, verbose_name="Moneda")

    def __str__(self):
        return "%s " % self.name

class Operation(models.Model):
    STARTED = 'Started'
    CANCELLED = 'Cancelled'
    FINALIZED = 'Finalized'
    STATES = (
        ('STARTED', 'Started'),
        ('CANCELLED', 'Cancelled'),
        ('FINALIZED', 'Finalized'),
        )
    origin_account = models.ForeignKey(Account, related_name='origin_account', on_delete=models.CASCADE)
    destination_account = models.ForeignKey(Account, related_name='destination_account', on_delete=models.CASCADE)
    created = models.DateTimeField(default=now)
    date_done = models.DateTimeField(default=None)
    state = models.CharField(verbose_name='State', max_length=8, choices=STATES, default='STARTED')
    currency = models.ForeignKey(Currency, on_delete=models.CASCADE, default=None)
    ammount = models.DecimalField(max_digits=20, decimal_places=2, default=Decimal('0.0'))

    def __str__(self):
        return "Operacion desde %s hacia %s" %(self.origin_account.owner.name, self.destination_account.owner.name)

    class Meta:
        ordering = ['-created']
        verbose_name = u'Operacion'
        verbose_name_plural = u'Operaciones'

class CurrencyContainer(models.Model):
    currency = models.ForeignKey(Currency, related_name='container', on_delete=models.CASCADE)
    balance = models.DecimalField(max_digits=20, decimal_places=2, default=Decimal('0.0'))
    account = models.ForeignKey(Account, related_name='currencies', on_delete=models.CASCADE)

    def __str__(self):
        return "Container de %s"  %(self.currency.name)
