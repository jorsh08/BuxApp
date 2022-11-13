import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native'
import React, { useEffect } from 'react'
import back from './assets/Arrowback.png';
import { ScrollView } from 'react-native-gesture-handler';
const ListaViajes = ({navigation}) => {

    const [viajes, setViajes] = React.useState([])

    async function obtenerListaViajes(){
        const res = await fetch('http://192.168.0.103:8000/Viajes/')
        const data = await res.json()
        setViajes(data)
    }

    useEffect(()=>{
        obtenerListaViajes();
    })

    

  return (
    <View style={{ flex: 1 }}>
        <TouchableOpacity
                onPress={() => navigation.navigate('Inicio')}>
                <Image
                    source={back}
                    style={styles.back}
                />
            </TouchableOpacity>
            <ScrollView>
            {viajes.map(viaje =>(
            <View key={viaje.id} style={styles.lista}>
                <Text>Id. {viaje.id}</Text>
                <Text>Hora. {viaje.horaViaje}</Text>
                <Text>Fecha. {viaje.fechaViaje}</Text>
                <Text>Linea. {viaje.linea}</Text>
            </View>
        ))}
            </ScrollView>
        
    </View>
  )
}

const styles = StyleSheet.create({
    lista:{
        alignItems: 'flex-start',
        backgroundColor: '#E8F1F0',
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    back: {
        marginTop: 50,
        marginBottom: 20,
        marginLeft: 30,
        width: 50,
        height: 50,
    }
})

export default ListaViajes