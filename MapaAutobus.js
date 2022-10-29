import { View, StyleSheet, Text, FlatList, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import React, { useEffect } from 'react';
import { autobuses } from './Autobuses';

const MapaAutobus = () => {

  const [origin, setOrigin] = React.useState({
    latitude: 27.482715,
    longitude: -109.932815,
    });

  const [autobusesx, setAutobuses] = React.useState([]);

  async function verAutobuses(){
    const res = await fetch('http://177.229.128.9:8000/Autobuses/')
    const data = await res.json()
    const d = JSON.stringify(data)
    console.log(data)
  };

  const handleNewMarker = (coordinate) => {
    console.log(coordinate);
  }

  useEffect(()=>{
    verAutobuses();
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
     >
      
      {autobuses.map(marker => (
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
    
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFill,
    width: '100%',
    height: '100%',
  },
  marcadores: {
    flex: 1
  }
  
});

export default MapaAutobus;