import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import Linea10 from '../Linea10';
import Mapa from '../Mapa';
import MapaAutobus from '../MapaAutobus';
import SubiAutobus from '../SubiAutobus';

import DrawerNavegacion from './DrawerNavegacion';

const Drawer = createDrawerNavigator();

const RutasDrawer = () => {
  return (
    <Drawer.Navigator 
      screenOptions={{
        headerTitle: "",
        headerTransparent:true
    }}
      drawerContent={props => <DrawerNavegacion {...props}/>}
    >
        <Drawer.Screen name="Inicio" component={Mapa} 
          options={{
            headerLeft: false,
            headerRight: false,
          }}
        />
        <Drawer.Screen name="Linea 10" component={Linea10} 
          options={{
            headerLeft: false,
            headerRight: false,
          }}
        />
        <Drawer.Screen name="SubiAutobus" component={SubiAutobus} 
          options={{
            title: '',
            headerLeft: false,
            headerRight: false,
          }}
        />
        <Drawer.Screen name="MapaAutobus" component={MapaAutobus} 
          options={{
            title: '',
            headerLeft: false,
            headerRight: false,
          }}
        />

    </Drawer.Navigator>
  )
}

export default RutasDrawer