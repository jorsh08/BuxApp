import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Mapa from './Mapa';
import 'react-native-gesture-handler';
import RutasDrawer from './Navegacion/RutasDrawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapaAutobus from './MapaAutobus';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <RutasDrawer/>
      <Stack.Screen name="Home" component={Mapa}/>
      <Stack.Screen name="Autobuses" component={MapaAutobus}/>      
    </NavigationContainer>  
  );
}