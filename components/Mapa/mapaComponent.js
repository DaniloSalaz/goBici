import React, { Component } from 'react';
import MapView , { AnimatedRegion, Animated, Marker }from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';


class MapaComponent extends Component {
  async getCurrentLocation() {
    await navigator.geolocation.getCurrentPosition(
        position => {
            let region = {
                latitude: parseFloat(position.coords.latitude),
                longitude: parseFloat(position.coords.longitude),
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,

            };
            console.log(region);
            this.setState({
                initialRegion: region,
                marker:{
                  latlng:{
                    
                    latitude: region.latitude + 0.0010,
                    longitude: region.longitude,
                  }
                }
            });
            this.mapView.animateToRegion(region, 3000);
        },
        error => console.log(error),
        {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000
        }
    );
}

async componentDidMount() {
    await this.getCurrentLocation();
}

state = {
    initialRegion: {
        latitude: 39.4697500,
        longitude: -0.3773900,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    },
    marker:{
      latlng:{
        latitude: 39.4697500,
        longitude: -0.3773900,
      },
      title:'hola',
      description:'como'
    }
}
render() {
    return (
        <MapView
            style={styles.mapStyle}
            showsUserLocation={true}
            followsUserLocation={true}
            zoomEnabled={true}
            ref={ ref => (this.mapView = ref)}
            initialRegion={this.state.initialRegion}
        >
          <Marker
            coordinate={this.state.marker.latlng}
            image={require('../../images/globo4.png')}
    />
        </MapView>
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
    markerStyle: {
      width: 66,
      height: 58,
    }
  });

export default MapaComponent;