import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import React, { useEffect } from 'react';
import back from './assets/Arrowback.png';

const MapaAutobus = ({navigation}) => {

  const [origin, setOrigin] = React.useState({
    latitude: 27.482715,
    longitude: -109.932815,
    });

  const [autobusesx, setAutobuses] = React.useState([]);

  const [autobus, setAutobus] = React.useState({
    latitude: 0,
    longitude: 0,
  });

  async function verAutobuses(){
    let autobuses = [];
    const res = await fetch('http://192.168.0.103:8000/BuxApp/BuxProyecto/')
    const data = await res.json()
    data.forEach(element => {
      autobuses.push({latitude: parseFloat(element.latitude), longitud: parseFloat(element.longitud), title: element.name})
    });
    setAutobuses(autobuses);
  }

  async function actualizarMarcador(){
    let location = await Location.getCurrentPositionAsync({});

    const jsonAutobus = {
      latitude: location.coords.latitude,
      longitud: location.coords.longitude
    }

    peticion(jsonAutobus)
  }

  async function peticion(coordenadas){
    try {
      let res = await fetch('http://192.168.0.103:8000/Autobuses/25/', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(coordenadas)
      });
      res = await res.json();
    } catch (e) {
    }
  }

  async function pintarMarcador(){
    const res = await fetch('http://192.168.0.103:8000/Autobuses/25/')
    const data = await res.json()
    setAutobus({
      latitude: parseFloat(data.latitude),
      longitude: parseFloat(data.longitud)
    })    
  }

  const handleNewMarker = (coordinate) => {
    console.log(coordinate);
  }

  async function moverAutobus(){
    const interval = setInterval(()=>{
      actualizarMarcador()
      pintarMarcador()
    }, 2000);
  }

  useEffect(()=>{
    verAutobuses();
    moverAutobus();
  }, []);

  return (
    <View style={{flex: 1}}>
     <MapView
      onPress={(e) => handleNewMarker(e.nativeEvent.coordinate)}
      style={styles.map}
      initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: 0.0010,
        longitudeDelta: 0.020
      }}
      showsUserLocation
      loadingEnabled
      mapType='terrain'
      showsMyLocationButton={false}
     >

      <Marker coordinate={autobus}/>

      {autobusesx.map(marker => (
        <Marker
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitud}}
          title = {marker.title}
          key = {marker.title}
        />
      ))
      }
      
     </MapView>

     <TouchableOpacity
             onPress={() => navigation.navigate('Inicio')}>
                <Image 
                    source={back}
                    style={styles.back}
                    />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFill,
    width: '100%',
    height: '100%',
  },
  back:{
    marginTop: 100,
    marginLeft: 30,
    width: 50,
    height: 50,
  },
  marcadores: {
    flex: 1
  }
  
});

export default MapaAutobus;