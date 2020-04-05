import React, { useState, useEffect } from 'react';
import { View,  StyleSheet } from 'react-native';
import MapaComponent from './mapaComponent';
function Mapa({dataParada}){
    const [paradas, setParadas] = useState([]);
    
    useEffect(() =>{
        setParadas(parseData(dataParada));
    },[dataParada])
    return (
        <View style={styles.container}>
            <MapaComponent paradas={paradas}/>
        </View>

    );
}
function parseData(data) {
    let b= data.map((p, index) => {
        let obj = p.properties;
        obj.name = obj.name.replace('_', ' ');
        obj.id = index + 1;
        let date = obj.updated_at.split(' ')
        obj.updatedFecha = date[0].replace('/', '-');
        obj.updatedTime = date[1];
        obj.coordenadas = parseLatLog(p.geometry.coordinates);
        obj.image = getTypeImage(obj.available, obj.total, obj.open)
        return obj;
    });
   
    return b;
}

function parseLatLog(coordinates){
    var utmObj = require('utm-latlng');
    var utm= new utmObj();
    let geoLatLng = utm.convertUtmToLatLng(coordinates[0], coordinates[1], 30, 'S');
    let obj = {latlng:{'latitude':geoLatLng.lat,'longitude':geoLatLng.lng}}
    return obj;
}
function getTypeImage(available,total,open){
    let porcentaje = available/total;
    switch(true){
        case open === 'F':
            return '5';
        case porcentaje <= 0.25:
            return '1';
        case porcentaje <= 0.50:
            return '2';
        case porcentaje <= 0.75:
            return '3';
        default:
            return '4';
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