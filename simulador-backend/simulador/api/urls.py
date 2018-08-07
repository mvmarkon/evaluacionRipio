from django.conf.urls import url, include
from rest_framework import routers
from simulador.api import views
from rest_framework.authtoken.views import ObtainAuthToken

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'accounts', views.AccountViewSet)
router.register(r'currencycontainer', views.CurrencyContainerViewSet)
router.register(r'currency', views.CurrencyViewSet)
router.register(r'operation', views.OperationViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^auth/', ObtainAuthToken.as_view()),
    url(r'^currencies/', include(router.urls)),
    url(r'^accounts/', include(router.urls)),
    url(r'^currencycontainers/', include(router.urls)),
    url(r'^operations/', include(router.urls)),
]
