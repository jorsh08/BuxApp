import { View, StyleSheet, Text, FlatList, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import React, { useEffect } from 'react';

const MapaAutobus = () => {

  const [origin, setOrigin] = React.useState({
    latitude: 27.482715,
    longitude: -109.932815,
    });

  const [autobuses, setAutobuses] = React.useState(null);

  async function verAutobuses(){
    const res = await fetch('http://192.168.0.8:8000/BuxApp/BuxProyecto/')
    const data = await res.json()
    setAutobuses(data)
  };

  useEffect(()=>{
    verAutobuses();
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={autobuses}
        renderItem={(item) =>{
          console.log(item.item);
          return <Text> longitud: {item.item.longitud} 
                        latitude: {item.item.latitude}
          </Text>
          
        }}
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    
    width: '100%',
    height: '100%',
  },
  
});

export default MapaAutobus;