import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import Mapa from '../Mapa';
import MapaAutobus from '../MapaAutobus';
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
        <Drawer.Screen name="Linea 10" component={MapaAutobus} 
          options={{
            headerLeft: false,
            headerRight: false,
          }}
        />

    </Drawer.Navigator>
  )
}

export default RutasDrawer