import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker }  from 'react-native-maps'
import React, { useEffect } from 'react';
import back from './assets/Arrowback.png';

const Linea10 = ({ navigation }) => {

    const [origin] = React.useState({
        latitude: 27.482715,
        longitude: -109.932815,
        latitudeDelta: 0.0010,
        longitudeDelta: 0.020
    })

    const [autobuses, setAutobuses] = React.useState([]);

    async function obtenerRutas(){
        const interval = setInterval(()=>{
            getLinea10();
          }, 1000);
        
    }

    

    async function getLinea10(){
        let autobuses = [];
        const res = await fetch('http://192.168.0.103:8000/Linea10/')
        const data = await res.json()
        data.forEach( element => {
            autobuses.push({latitude: parseFloat(element.latitude), longitude: parseFloat(element.longitude), id: element.id, linea: element.linea})
        });
        setAutobuses(autobuses);
    }

    async function postLinea10(json){
        try {
            let res = await fetch('http://192.168.0.103:8000/Linea10/', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(json)
            });
            res = await res.json();
            navigation.navigate('SubiAutobus', res)
          } catch (e) {
            console.log(e)
          }
    }

    async function subirAutobus(){
        const location = await Location.getCurrentPositionAsync({});

        const jsonLinea10 = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            fechaViaje: '2022-11-06',
            linea: 'Linea 10',
            distancia: 0,
            ayudaPersonas: 0,
            tiempoUtilizacion: 0
        }
        
        postLinea10(jsonLinea10);
    }

    useEffect(()=>{
        obtenerRutas();
      }, []);

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={styles.map}
                initialRegion={origin}
                mapType='terrain'
                showsMyLocationButton={false}
            >
                {autobuses.map(marker => (
                    <Marker
                        coordinate={{
                        latitude: marker.latitude,
                        longitude: marker.longitude}}
                        title = {marker.linea}
                        key = {marker.id}
                    />
                  ))
                }

            </MapView>

            <TouchableOpacity
                style={styles.subiAutobus}
                onPress={() => subirAutobus()}>
                <Text style={styles.subiAutobusText}>Subi a un autobus</Text>
            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => navigation.navigate('Inicio')}>
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
    },
    subiAutobus: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 750,
        marginLeft: 125,
        backgroundColor: 'greenyellow',
        width: 180,
        height: 40,
        borderRadius: 10
    },
    subiAutobusText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default Linea10