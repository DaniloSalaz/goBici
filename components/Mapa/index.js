import React, { Component } from 'react';
import { View ,Text, StyleSheet} from 'react-native';
import MapaComponent from './mapaComponent';
class Mapa extends Component {
    render(){
        return(
            <View style={styles.container}>
            <MapaComponent/>
        </View>
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
        flex: 1
    },
  });

export default Mapa;