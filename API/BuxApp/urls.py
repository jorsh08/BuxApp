from rest_framework import routers
from .api import AutobusViewSet

router = routers.DefaultRouter()

router.register('BuxApp/BuxProyecto', AutobusViewSet, 'projects')

urlpatterns = router.urls