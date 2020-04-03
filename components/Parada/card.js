import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

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

function ParadaCard() {
    console.log(Dimensions.get('window'))
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flex:4, borderWidth: 0}}>
                    <Text>{parada.number + ': '+ parada.name}</Text>
                    <Text style={{fontSize: 10}}>{parada.address}</Text>
                </View>
                <View style={{flex:1, flexDirection: 'row-reverse', justifyContent:'space-between', borderWidth: 0}}>
                    <Ionicons name={'ios-refresh'} size={20}/>
                    <Text style={{fontSize: 9, alignItems:'center'}}>{ parada.updatedFecha + '  ' + parada.updatedTime}</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.bornesFree}>
                    
                    <Text style={{fontSize:30, borderWidth: 0, color:'white'}}>10</Text>
                    <View style={{ flexDirection:'row', alignItems:'center'}}>
                        <Entypo name={'flow-line'} size={20} color={'white'}/>
                        <Text style={{borderWidth: 0, color:'white' ,fontSize:9}}>Bornes Disponibles</Text>
                    </View>
                    
                </View>
                <View style={{flex:0.1}}></View>
                <View style={styles.bickesAvailable}>
                    <Text style={{fontSize:30, borderWidth: 0, color:'white'}}>10</Text>
                    <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Ionicons name={'ios-bicycle'} size={20} color={'white'}/>
                        <Text style={{borderWidth: 0, color:'white' ,fontSize:9}}> Bikes Disponibles</Text>
                    </View>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth:0,
        marginTop: Constants.statusBarHeight,
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height/5,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.65,

        elevation: 7

    },
    header: {
        flex:1,
        flexDirection: 'row'
    },
    body:{
        flex:2,
        flexDirection: 'row',
        borderWidth: 0
    },
    bornesFree:{
        flex:3,
        alignItems: 'center', 
        justifyContent:'center',
        backgroundColor: '#1565c0'
    },
    bickesAvailable:{
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor:'#1565c0'
    },
    containerBody:{
        flex: 1,
        flexDirection: 'column' 
    }

});
export default ParadaCard;