import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Paradas from './Paradas';
import Header from '../Header';

class ListaParadas extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                
                
                <Paradas/>
            </View>
        
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });
export default ListaParadas;