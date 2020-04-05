import React, { Component, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Paradas from './Paradas';
import Header from '../Header';

function ListaParadas({dataParada}) {
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        setData(parseData(dataParada));
        
        
    },[dataParada])
    return (
        <View>
            <Paradas data={data}/>
        </View>
    );
}
function parseData(data){
    let a =data.map(p => p.properties);
    return a.map((p ,index) => { 
        p.name = p.name.replace('_', ' ');
        p.id = index + 1; 
        let date = p.updated_at.split(' ')
        p.updatedFecha = date[0].replace('/','-');
        p.updatedTime = date[1];
        return p
    });
}
export default ListaParadas;