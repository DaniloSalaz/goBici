import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Parada from '../Parada'
import Constants from 'expo-constants';

const DATA = [
  {
    id: 1,
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
    id: 2,
    name: "LUIS GARCIA BERLANGA ",
    number: "52",
    address: "Luis García Berlanga Martí - Menorca",
    open: "T",
    available: "50",
    free: "0",
    total: "50",
    ticket: "T",
    updated_at: "07\/03\/2020 15:44:31",
    updatedFecha: '07-03-2020',
    updatedTime: '15:44'
  },
  {
    id: 3,
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
    id: 4,
    name: "52_C\/ LUIS GARCIA BERLANGA ",
    number: "52",
    address: "Luis García Berlanga Martí - Menorca",
    open: "T",
    available: "5",
    free: "20",
    total: "25",
    ticket: "T",
    updated_at: "07\/03\/2020 15:44:31",
    updatedFecha: '07-03-2020',
    updatedTime: '15:44'
  }, {
    id: 5,
    name: "52_C\/ LUIS GARCIA BERLANGA ",
    number: "52",
    address: "Luis García Berlanga Martí - Menorca",
    open: "T",
    available: "0",
    free: "25",
    total: "25",
    ticket: "T",
    updated_at: "07\/03\/2020 15:44:31",
    updatedFecha: '07-03-2020',
    updatedTime: '15:44'
  }, {
    id: 6,
    name: "52_C\/ Danilo ",
    number: "52",
    address: "Luis García Berlanga Martí - Menorca",
    open: "F",
    available: "1",
    free: "24",
    total: "25",
    ticket: "T",
    updated_at: "07\/03\/2020 15:44:31",
    updatedFecha: '07-03-2020',
    updatedTime: '15:44'
  },
  
];

function Paradas() {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({ item }) =>  item.id === selectedItem?  <ItemSelected parada={item} onSelect={setSelectedItem} />: <Item parada={item} onSelect={setSelectedItem} />}
        extraData={selectedItem}
      />
    </SafeAreaView>
  );
}
function Item({ parada, onSelect, selectedItem }) {
  return (
    <TouchableOpacity
      onPress={() => selectedItem === parada.id? onSelect(0):  onSelect(parada.id)}
    >
      <View style={styles.item}>
        <View style={parada.open === 'T' ? styles.barra_lateral : styles.barra_lateral_cerrado}>
        </View>
        <View style={styles.body}>
          <View style={styles.title}>
            <Text style={{ flex: 7 }}>{parada.name}</Text>
            <MaterialCommunityIcons name={parada.ticket === 'T' ? 'credit-card' : '"credit-card-off'} style={{ flex: 1 }} color={'#1565c0'} />
            <Text style={{ fontSize: 10, borderWidth: 0 }}>{parada.updatedTime}</Text>
          </View>
          <Text style={{ fontSize: 12 }}>{parada.address}</Text>
          <View style={styles.footer}>
            <Text style={{ fontSize: 11, color: '#1565c0' }}>18km</Text>
            <Text style={{ fontSize: 10, }} style={parada.open === 'T' ? styles.open_color : styles.close_color}>{parada.open === 'T' ? name = "Abierto" : name = "Cerrado"} </Text>
          </View>
        </View>

      </View>
    </TouchableOpacity>
  );
}

function ItemSelected({ parada, onSelect, selectedItem }) {
  return(
    <TouchableOpacity
      onPress={() => onSelect(0)}
    >
      <Parada paradaData={parada}/>
    </TouchableOpacity>
  );
}
const _open_color = '#81c784';
const _close_color = '#bdbdbd';

const styles = StyleSheet.create({
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
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff'
  },
  open_color: {
    color: _open_color,
  },
  close_color: {
    color: _close_color,
  }

});
export default Paradas;