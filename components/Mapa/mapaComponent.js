import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions, View, Modal, TouchableHighlight } from 'react-native';
import Parada from '../Parada'


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
        this.setState({
          initialRegion: region,
          markers: this.props.paradas,
          modalVisible: false

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
      latitude: 39.45957528600975,
      longitude: -0.3880664379726362,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    markers: [{
      coordenadas: {
        latlng: {
          latitude: 39.4697500,
          longitude: -0.3773900,
        }
      }
    }],
    fn: null,
    modalVisible: false,
    seletedParada: {
      name: "LUIS GARCIA BERLANGA ",
      number: "52",
      address: "Luis García Berlanga Martí - Menorca",
      open: "T",
      available: "15",
      free: "10",
      total: "25",
      ticket: "T",
      updated_at: "07\/03\/2020 15:44:31",
      updatedFecha: '07-03-2020',
      updatedTime: '15:44'
    }
  }
  findParada(coordenadas) {
    let parSe = this.state.markers.find(m => m.latlng === coordenadas);
    this.setState({ seletedParada: parSe });
  }

  render() {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={styles.modalView}>
            <TouchableHighlight
              onPress={() => {
                this.setState({ modalVisible: false });
              }}
            >
              <Parada paradaData={this.state.seletedParada} />
            </TouchableHighlight>

          </View>
        </Modal>
        <MapView
          style={styles.mapStyle}
          showsUserLocation={true}
          followsUserLocation={true}
          zoomEnabled={true}
          ref={ref => (this.mapView = ref)}
          initialRegion={this.state.initialRegion}
        >
          {this.state.markers.map(marker => (
            <Marker
              coordinate={marker.coordenadas.latlng}
              onPress={e => {
                console.log(e.nativeEvent.coordinate);
                let p = this.state.markers.find(m =>
                  (m.coordenadas.latlng.latitude === e.nativeEvent.coordinate.latitude && m.coordenadas.latlng.longitude === e.nativeEvent.coordinate.longitude));

                this.setState({ modalVisible: true, seletedParada: p });
              }}
              image={marker.image === '1' ? require('../../images/globo1.png') :
                marker.image === '2' ? require('../../images/globo2.png') :
                  marker.image === '3' ? require('../../images/globo3.png') :
                    marker.image === '4' ? require('../../images/globo4.png') :
                      require('../../images/globo5.png')
              }
            />
          ))}
        </MapView>
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
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  markerStyle: {
    width: 66,
    height: 58,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 22,

  },
  modalView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 1,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
});

export default MapaComponent;