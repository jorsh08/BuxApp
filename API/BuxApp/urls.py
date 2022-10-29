from rest_framework import routers
from .api import AutobusViewSet, CamionViewSet

router = routers.DefaultRouter()

router.register('BuxApp/BuxProyecto', AutobusViewSet, 'projects')

router.register('Autobuses', CamionViewSet, 'Autobuses')

urlpatterns = router.urls