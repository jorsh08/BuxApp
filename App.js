import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';


import Mapa from './Mapa';

export default function App() {

  return (
    <View style={styles.container}>
      <Mapa/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
