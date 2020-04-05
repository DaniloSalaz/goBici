import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Paradas from './Paradas';
import * as geolib from 'geolib';

function ListaParadas({dataParada}) {
    const [data, setData] = useState([]);
    const [currentPosition, setCurrentPosition] = useState({latitude:39.457779,longitude:-0.387696});
    
    useEffect(()=>{
        setData(parseData(dataParada, currentPosition));
        getCurrentLocation(setCurrentPosition);
        
    },[dataParada])
    return (
        <View>
            <Paradas data={data}/>
        </View>
    );
}
const  getCurrentLocation = async (setCurrentPosition) => {
    await navigator.geolocation.getCurrentPosition(
      position => {
        let region = {
          latitude: parseFloat(position.coords.latitude),
          longitude: parseFloat(position.coords.longitude)

        };
        setCurrentPosition(region);
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  }
  function parseData(data, currentPosition) {
    let b= data.map((p, index) => {
        let obj = p.properties;
        obj.name = obj.name.replace('_', ' ');
        obj.id = index + 1;
        let date = obj.updated_at.split(' ')
        obj.updatedFecha = date[0].replace('/', '-');
        obj.updatedTime = date[1];
        obj.coordenadas = parseLatLog(p.geometry.coordinates);
        obj.distance = calcularDistance(currentPosition, obj.coordenadas.latlng);
        return obj;
    });
   
    return b.sort(function (a, c) {
        if (a.distance > c.distance) {
          return 1;
        }
        if (a.distance < c.distance) {
          return -1;
        }
        return 0;
      });;
}

function parseLatLog(coordinates){
    var utmObj = require('utm-latlng');
    var utm= new utmObj();
    let geoLatLng = utm.convertUtmToLatLng(coordinates[0], coordinates[1], 30, 'S');
    let obj = {latlng:{'latitude':geoLatLng.lat,'longitude':geoLatLng.lng}}
    return obj;
}  
function calcularDistance(currentPosition, paradaPosition){
   let dis = geolib.getDistance(currentPosition,paradaPosition);
    return dis < 900 ? dis +' m': dis/1000+ ' km';
   
}
export default ListaParadas;