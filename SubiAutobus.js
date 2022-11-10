import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, Polyline } from 'react-native-maps';
import React, { useEffect } from 'react';
import back from './assets/Arrowback.png';
import positionimg from './assets/trakingbus.png'
const SubiAutobus = ({ navigation, route }) => {

    const { id, horaViaje, fechaViaje, linea, distancia, ayudaPersonas, tiempoUtilizacion} = route.params;

    const [autobus, setAutobus] = React.useState({
        latitude: 0,
        longitude: 0
    });

    async function obtenerAutobus(){
        const res = await fetch('http://192.168.0.103:8000/Linea10/'+route.params.id+'/')
        if (res.ok){
            const data = await res.json()
            setAutobus({
                id: data.id,
                latitude: parseFloat(data.latitude),
                longitude: parseFloat(data.longitude),
                linea: data.linea
            })
        }
        moverAutobus(route.params.id)
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
          } catch (e) {
          }
    }

    async function actualizarAutobus(){
        const interval = setInterval(()=>{
            obtenerAutobus();
          }, 5000);
        
    }

    const [origin] = React.useState({
        latitude: 27.482715,
        longitude: -109.932815,
        latitudeDelta: 0.0010,
        longitudeDelta: 0.020
    })

    async function bajarAutobus(idAutobus){
        const res = await fetch('http://192.168.0.103:8000/Linea10/'+idAutobus+'/', {method: 'DELETE'})
        navigation.navigate('Inicio')
    }

    useEffect(()=>{
        console.log(route.params.id)
        actualizarAutobus();
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
                image={positionimg}
                />

                <Polyline
                    coordinates={[
                        {
                            latitude: 27.483263223170002,
                            longitude: -109.93043303489685,
                        },
                        {
                            latitude: 27.50969967849905,
                            longitude: -109.93039749562739,
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                            latitude: 27.483263223170002,
                            longitude: -109.93043303489685,
                        },
                        {
                            latitude: 27.482751627303074,
                            longitude: -109.93024293333292,
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                            latitude: 27.482751627303074,
                            longitude: -109.93024293333292,
                        },
                        {
                            latitude: 27.481893509132586,
                            longitude: -109.92922503501177,
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                            latitude: 27.481893509132586,
                            longitude: -109.92922503501177,
                        },
                        {
                            latitude: 27.474868288977067,
                            longitude: -109.92915429174901,
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                          {
                            latitude: 27.474868288977067,
                            longitude: -109.92915429174901,
                        },
                        {
                            latitude: 27.474857877826388,
                            longitude: -109.92667458951473,
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                            latitude: 27.474857877826388,
                            longitude: -109.92667458951473,
                        },
                        {
                          latitude: 27.467089695402695,
                          longitude: -109.92667056620121,
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.467089695402695,
                          longitude: -109.92667056620121,
                        },
                        {
                          latitude: 27.467125393288665,
                          longitude: -109.92436688393356,
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.467125393288665,
                          longitude: -109.92436688393356,
                        },
                        {
                          latitude: 27.44960407640472,
                          longitude: -109.92436990141869,
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.44960407640472,
                          longitude: -109.92436990141869,
                        },
                        {
                          latitude: 27.44961151464475,
                          longitude: -109.92345258593559,
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.50969967849905,
                          longitude: -109.93039749562739,
                        },
                        {
                          latitude: 27.511249843541187,
                          longitude: -109.93020974099636,
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.511249843541187,
                          longitude: -109.93020974099636,
                        },
                        {
                          latitude: 27.513604934509782,
                          longitude: -109.92819875478745,
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.513604934509782,
                          longitude: -109.92819875478745,
                        },
                        {
                          latitude: 27.514867504184377,
                          longitude: -109.92775049060583
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.514867504184377,
                          longitude: -109.92775049060583
                        },
                        {
                          latitude: 27.516400052800318,
                          longitude: -109.92732301354408
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.516400052800318,
                          longitude: -109.92732301354408
                        },
                        {
                          latitude: 27.518129124989898,
                          longitude: -109.92712218314409
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.518129124989898,
                          longitude: -109.92712218314409
                        },
                        {
                          latitude: 27.561430315743095,
                          longitude: -109.9271583929658
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.561430315743095,
                          longitude: -109.9271583929658
                        },
                        {
                          latitude: 27.56150075861452,
                          longitude: -109.9282269179821
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.56150075861452,
                          longitude: -109.9282269179821
                        },
                        {
                          latitude: 27.561655316655003,
                          longitude: -109.92853436619042
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.561655316655003,
                          longitude: -109.92853436619042
                        },
                        {
                          latitude: 27.562056274864787,
                          longitude: -109.92914658039808
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.562056274864787,
                          longitude: -109.92914658039808
                        },
                        {
                          latitude: 27.5641136519219,
                          longitude: -109.93144758045673
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.5641136519219,
                          longitude: -109.93144758045673
                        },
                        {
                          latitude: 27.564519951094876,
                          longitude: -109.93233304470779
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.564519951094876,
                          longitude: -109.93233304470779
                        },
                        {
                          latitude: 27.56490633516044,
                          longitude: -109.9365374073386
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.56490633516044,
                          longitude: -109.9365374073386
                        },
                        {
                          latitude: 27.563030873628563,
                          longitude: -109.93662524968386
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.563030873628563,
                          longitude: -109.93662524968386
                        },
                        {
                          latitude: 27.56304424866578,
                          longitude: -109.93881125003101
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.56304424866578,
                          longitude: -109.93881125003101
                        },
                        {
                          latitude: 27.56330402128748,
                          longitude: -109.93982177227736
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.56330402128748,
                          longitude: -109.93982177227736
                        },
                        {
                          latitude: 27.563660687501127,
                          longitude: -109.94050338864326
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.563660687501127,
                          longitude: -109.94050338864326
                        },
                        {
                          latitude: 27.56425602027438,
                          longitude: -109.94134794920683
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.56425602027438,
                          longitude: -109.94134794920683
                        },
                        {
                          latitude: 27.564742865144854,
                          longitude: -109.94059324264526
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.564742865144854,
                          longitude: -109.94059324264526
                        },
                        {
                          latitude: 27.56485640252694,
                          longitude: -109.9400708824396
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.56485640252694,
                          longitude: -109.9400708824396
                        },
                        {
                          latitude: 27.56479903941403,
                          longitude: -109.93907209485769
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.56479903941403,
                          longitude: -109.93907209485769
                        },
                        {
                          latitude: 27.56576766951238,
                          longitude: -109.93902314454317
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.56576766951238,
                          longitude: -109.93902314454317
                        },
                        {
                          latitude: 27.566423622505916,
                          longitude: -109.93923772126436
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.566423622505916,
                          longitude: -109.93923772126436
                        },
                        {
                          latitude: 27.567342901187104,
                          longitude: -109.93943855166437
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.567342901187104,
                          longitude: -109.93943855166437
                        },
                        {
                          latitude: 27.569639726778973,
                          longitude: -109.93957702070476
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.569639726778973,
                          longitude: -109.93957702070476
                        },
                        {
                          latitude: 27.56968371313538,
                          longitude: -109.94329791516066
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.56968371313538,
                          longitude: -109.94329791516066
                        },
                        {
                          latitude: 27.574350030425453,
                          longitude: -109.94328651577236
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.574350030425453,
                          longitude: -109.94328651577236
                        },
                        {
                          latitude: 27.574348544463362,
                          longitude: -109.94537830352782
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.574348544463362,
                          longitude: -109.94537830352782
                        },
                        {
                          latitude: 27.520181377972484,
                          longitude: -109.94533035904168
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.520181377972484,
                          longitude: -109.94533035904168
                        },
                        {
                          latitude: 27.507539580908727,
                          longitude: -109.94532331824303
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.507539580908727,
                          longitude: -109.94532331824303
                        },
                        {
                          latitude: 27.505588200784352,
                          longitude: -109.94535382837056
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.505588200784352,
                          longitude: -109.94535382837056
                        },
                        {
                          latitude: 27.501322521538484,
                          longitude: -109.94534008204937
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.501322521538484,
                          longitude: -109.94534008204937
                        },
                        {
                          latitude: 27.497366271490606,
                          longitude: -109.94537595659496
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.497366271490606,
                          longitude: -109.94537595659496
                        },
                        {
                          latitude: 27.495932493510274,
                          longitude: -109.9452767148614
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.495932493510274,
                          longitude: -109.9452767148614
                        },
                        {
                          latitude: 27.493875029632616,
                          longitude: -109.9453880265355
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.493875029632616,
                          longitude: -109.9453880265355
                        },
                        {
                          latitude: 27.49178451415997,
                          longitude: -109.9453531578183
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />
                <Polyline
                    coordinates={[
                        {
                          latitude: 27.49178451415997,
                          longitude: -109.9453531578183
                        },
                        {
                          latitude: 27.49181604022516,
                          longitude: -109.93043068796398
                        }
                    ]}
                    strokeColor='#01B49F'
                    strokeWidth={3}
                />

            </MapView>

            <TouchableOpacity
                style={styles.subiAutobus}
                onPress={() => bajarAutobus(id)}>
                <Text style={styles.subiAutobusText}>Bajar del autobus</Text>
            </TouchableOpacity>

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
    },
    subiAutobus: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 650,
        marginLeft: 115,
        backgroundColor: '#01B49F',
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

export default SubiAutobus