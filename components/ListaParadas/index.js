import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Paradas from './Paradas';
import Header from '../Header';

class ListaParadas extends Component{
    render(){
        return(
            <View>
                <Paradas/>
            </View>
        );
    }
}
export default ListaParadas;