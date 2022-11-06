from rest_framework import routers
from .api import AutobusViewSet, CamionViewSet, Linea10ViewSet

router = routers.DefaultRouter()

router.register('BuxApp/BuxProyecto', AutobusViewSet, 'projects')

router.register('Autobuses', CamionViewSet, 'Autobuses')

router.register('Linea10', Linea10ViewSet, 'Linea10')

urlpatterns = router.urls