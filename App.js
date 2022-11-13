import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Mapa from './Mapa';
import 'react-native-gesture-handler';
import RutasDrawer from './Navegacion/RutasDrawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapaAutobus from './MapaAutobus';
import Linea10 from './Linea10';
import SubiAutobus from './SubiAutobus';
import ListaViajes from './ListaViajes';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <RutasDrawer/>
      <Stack.Screen name="Home" component={Mapa}/>
      <Stack.Screen name="Autobuses" component={MapaAutobus}/>
      <Stack.Screen name="Linea 10" component={Linea10}/>
      <Stack.Screen name="Lista viajes" component={ListaViajes}/>
      <Stack.Screen name="SubiAutobus" component={SubiAutobus}/>
    </NavigationContainer>  
  );
}