import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ParadaCard from './card';
class Parada extends Component{
    render(){
        return(
          <View style={styles.container}>
             <ParadaCard/> 
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
    }
  });

export default Parada;