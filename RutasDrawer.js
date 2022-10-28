import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import Mapa from './Mapa';
import MapaAutobus from './MapaAutobus';

const Drawer = createDrawerNavigator();

const RutasDrawer = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Pantalla 1" component={Mapa} />
        <Drawer.Screen name="Pantalla 2" component={MapaAutobus} />
    </Drawer.Navigator>
  )
}

export default RutasDrawer