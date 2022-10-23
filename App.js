import * as React from 'react';
import * as Location from 'expo-location';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {

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

  return (
    <View 
      style={styles.container}>
        <MapView 
          style={styles.map}
          initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.0010,
            longitudeDelta: 0.020
          }}
        >
          <Marker coordinate={origin}/>
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%'
  }
});
