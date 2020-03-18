import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

class MapaComponent extends Component {
    
    render() {
        return (
            <MapView
            style={ styles.mapStyle}
                showsUserLocation={true}
                followsUserLocation={true}
                zoomEnabled={true}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
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
        flex:1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });

export default MapaComponent;