import * as React from 'react'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import autobusButton from './assets/autobusButton.png';
import autobusButtonBuscar from './assets/autobusButtonBuscar.png'

const Mapa = ({ navigation }) => {

const [origin, setOrigin] = React.useState({
    latitude: 27.482715,
    longitude: -109.932815,
    })

    async function permisoLocalizacion(){
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted'){
        alert('Permiso denegado');
        return;
    }

    let localizacion = await Location.getCurrentPositionAsync({});
    const current = {
        latitude: localizacion.coords.latitude,
        longitude: localizacion.coords.longitude
    }
    setOrigin(current);
    }

    React.useEffect(() => {
    permisoLocalizacion();
    }, [])
    

    const [autobuses, setAutobuses] = React.useState(null)

    const verAutobuses = async () =>{
        navigation.navigate('Linea 10');
    }

  return (
    <View style={{flex: 1}}>
        <MapView 
          style={styles.map}
          initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.0010,
            longitudeDelta: 0.020
          }}
          showsUserLocation
          showsMyLocationButton={false}
          mapType='terrain'
        >


          
        </MapView>

        <TouchableOpacity
             onPress={() => navigation.openDrawer()}>
                <Image 
                    source={autobusButton}
                    style={styles.autobusButton}
                    />
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => verAutobuses()}>
                <Image 
                    source={autobusButtonBuscar}
                    style={styles.autobusButtonBuscar}
                />
        </TouchableOpacity>
        

        <Text
            style={styles.titulo}
        >BUX</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFill,
    width: '100%',
    height: '100%',
  },
  autobusButton:{
    marginTop: 80,
    marginLeft: 30,
    width: 80,
    height: 80,
  },
  autobusButtonBuscar:{
    position: 'absolute',
    top: 400,
    left: 130
  },
  titulo:{
    color:'#454545',
    fontSize: 56,
    fontFamily: 'Roboto',
    position: 'absolute',
    top: 80,
    left: 270
  }
});

export default Mapa;