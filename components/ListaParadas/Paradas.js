import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
const parada = {
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
};
const DATA = [
  {
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
  },
  {
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
  },
  {
    name: "52_C\/ LUIS GARCIA BERLANGA ",
    number: "52",
    address: "Luis García Berlanga Martí - Menorca",
    open: "F",
    available: "15",
    free: "10",
    total: "25",
    ticket: "T",
    updated_at: "07\/03\/2020 15:44:31",
    updatedFecha: '07-03-2020',
    updatedTime: '15:44'
  },
  {
    name: "52_C\/ LUIS GARCIA BERLANGA ",
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
  }, {
    name: "52_C\/ LUIS GARCIA BERLANGA ",
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
  }, {
    name: "52_C\/ LUIS GARCIA BERLANGA ",
    number: "52",
    address: "Luis García Berlanga Martí - Menorca",
    open: "F",
    available: "15",
    free: "10",
    total: "25",
    ticket: "T",
    updated_at: "07\/03\/2020 15:44:31",
    updatedFecha: '07-03-2020',
    updatedTime: '15:44'
  },
];

function Paradas() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item parada={item} />}
      />
    </SafeAreaView>
  );
}
function Item({ parada }) {
  const tarjeta = parada.ticket
  console.log(Constants);
  return (
    <View style={styles.item}>
      <View style={parada.open === 'T' ? styles.barra_lateral : styles.barra_lateral_cerrado}>
      </View>
      <View style={styles.body}>
        <View style={styles.title}>
          <Text style={{ flex: 7 }}>{parada.name}</Text>
          <MaterialCommunityIcons name={parada.ticket === 'T' ? 'credit-card' : '"credit-card-off'} style={{ flex: 1, alignSelf: 'flex-end', borderWidth: 0 }} color={'#1565c0'} />
          <Text style={{ fontSize: 10, borderWidth: 0 }}>{parada.updatedTime}</Text>
        </View>
        <Text style={{ fontSize: 12 }}>{parada.address}</Text>
        <View style={styles.footer}>
          <Text style={{ fontSize: 11, color: '#1565c0' }}>18km</Text>
          <Text style={{ fontSize: 10, }} style={parada.open === 'T' ? styles.open_color : styles.close_color}>{parada.open === 'T' ? name = "Abierto" : name = "Cerrado"} </Text>
        </View>
      </View>

    </View>
  );

}
const _open_color = '#81c784';
const _close_color = '#e57373';
const styles = StyleSheet.create({
  container: {
    //marginTop: Constants.statusBarHeight
  },
  item: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  barra_lateral: {
    flex: 0.2,
    backgroundColor: _open_color,
  },
  barra_lateral_cerrado: {
    flex: 0.2,
    backgroundColor: _close_color,
  },
  body: {
    flex: 7,
    padding: 5,
  },
  title: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  title_cerrado: {
    flex: 1,
    backgroundColor: '#f44336',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //marginTop: '3',
    backgroundColor: '#ffffff'
  },
  footer_cerrado: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
   // marginTop: '3',
    backgroundColor: '#f44336'
  },
  open_color: {
    color: _open_color,
  },
  close_color: {
    color: _close_color,
  }

});
export default Paradas;