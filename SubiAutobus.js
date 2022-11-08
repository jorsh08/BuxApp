import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, Polyline } from 'react-native-maps';
import React, { useEffect } from 'react';
import back from './assets/Arrowback.png';

const SubiAutobus = ({ route, navigation }) => {

    const { id, horaViaje, fechaViaje, linea, distancia, ayudaPersonas, tiempoUtilizacion} = route.params;

    const [autobus, setAutobus] = React.useState({
        latitude: 0,
        longitude: 0
    });

    async function obtenerAutobus(idAutobus){
        const res = await fetch('http://192.168.0.103:8000/Linea10/'+idAutobus+'/')
        const data = await res.json()
        setAutobus({
            id: data.id,
            latitude: parseFloat(data.latitude),
            longitude: parseFloat(data.longitude),
            linea: data.linea
        })
    }

    async function moverAutobus(idAutobus){
        let location = await Location.getCurrentPositionAsync({});

        const coordenadas = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            horaViaje: horaViaje,
            fechaViaje: fechaViaje,
            linea: linea,
            distancia: distancia,
            ayudaPersonas: ayudaPersonas,
            tiempoUtilizacion: tiempoUtilizacion
        }
        try {
            let res = await fetch('http://192.168.0.103:8000/Linea10/'+idAutobus+'/', {
              method: 'PUT',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(coordenadas)
            });
            res = await res.json();
            console.log(res)
          } catch (e) {
          }
    }

    async function actualizarAutobus(idAutobus){
        const interval = setInterval(()=>{
            obtenerAutobus(idAutobus);
            moverAutobus(idAutobus)
          }, 5000);
        
    }

    const [origin] = React.useState({
        latitude: 27.482715,
        longitude: -109.932815,
        latitudeDelta: 0.0010,
        longitudeDelta: 0.020
    })

    useEffect(()=>{
        actualizarAutobus(id);
      }, []);

  return (
    <View style={{ flex: 1 }}>
            <MapView
                style={styles.map}
                initialRegion={origin}
                mapType='terrain'
                showsMyLocationButton={false}
            >
                <Marker
                coordinate={{
                    latitude: autobus.latitude,
                    longitude: autobus.longitude
                }}
                />

            </MapView>

            <TouchableOpacity
                onPress={() => navigation.navigate('Linea 10')}>
                <Image
                    source={back}
                    style={styles.back}
                />
            </TouchableOpacity>
        </View>
  )

}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFill,
        width: '100%',
        height: '100%',
    },
    back: {
        marginTop: 100,
        marginLeft: 30,
        width: 50,
        height: 50,
    }
});

export default SubiAutobus