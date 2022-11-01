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

  const [subiAutobus, setSubiAutobus] = React.useState({
    latitude: 0,
    longitude: 0,
  });

  async function verAutobuses(){
    let autobuses = [];
    const res = await fetch('http://177.229.128.9:8000/BuxApp/BuxProyecto/')
    const data = await res.json()
    data.forEach(element => {
      autobuses.push({latitude: parseFloat(element.latitude), longitud: parseFloat(element.longitud), title: element.name})
    });
    setAutobuses(autobuses);
  };

  async function subirAutobus(){
    let location = await Location.getCurrentPositionAsync({});
    setSubiAutobus({
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
    })
  }

  const handleNewMarker = (coordinate) => {
    console.log(coordinate);
  }

  useEffect(()=>{
    verAutobuses();
    subirAutobus();
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
      
      

      <Marker coordinate={subiAutobus}/>

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