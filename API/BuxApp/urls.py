from rest_framework import routers
from .api import AutobusViewSet, CamionViewSet, Linea10ViewSet, ViajesViewSet

router = routers.DefaultRouter()

router.register('BuxApp/BuxProyecto', AutobusViewSet, 'projects')

router.register('Autobuses', CamionViewSet, 'Autobuses')

router.register('Linea10', Linea10ViewSet, 'Linea10')

router.register('Viajes', ViajesViewSet, 'Viajes')

urlpatterns = router.urls