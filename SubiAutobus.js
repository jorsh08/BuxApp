import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps'
import React, { useEffect } from 'react';
import back from './assets/Arrowback.png';

const SubiAutobus = ({ navigation }) => {

    const [origin] = React.useState({
        latitude: 27.482715,
        longitude: -109.932815,
        latitudeDelta: 0.0010,
        longitudeDelta: 0.020
    })

  return (
    <View style={{ flex: 1 }}>
            <MapView
                style={styles.map}
                initialRegion={origin}
                mapType='terrain'
                showsMyLocationButton={false}
            >

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