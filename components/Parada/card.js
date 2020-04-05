import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
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
function ParadaCard({ parada,fn }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flex: 4, borderWidth: 0 }}>
                    <Text>{parada.name }</Text>
                    <Text style={{ fontSize: 10 }}>{parada.address}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row-reverse', justifyContent: 'space-between', borderWidth: 0 }}>
                    <Ionicons name={'ios-close'} size={20}/>
                    <Text style={{ fontSize: 9, alignItems: 'center' }}>{ parada.updatedTime}</Text>
                </View>
                
            </View>
            <View style={styles.body}>
               <BodyCard tipo={'bornes'} disponible={parada.free} total={parada.total} open={parada.open}/>
                <View style={{ flex: 0.1 }}></View>
                <BodyCard tipo={'bike'} disponible={parada.available} total={parada.total} open={parada.open}/>
            </View>
        </View>

    );
}

function BodyCard({ tipo, disponible, total, open}) {
    let iconBody =  tipo === 'bike' ? <Ionicons name={'ios-bicycle'} size={20} color={'white'} />:<Entypo name={'flow-line'} size={20} color={'white'} />;
    let escala = ((disponible * 6)/total) + 1;
    let labelDisponible = escala < 2 ? '' : tipo + ' Disponibles';
    labelDisponible = open === 'F'? 'Cerrado':labelDisponible;
    let styleBody = {
        flex: escala,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorGradient(escala,open)
    };
    return (
        <View style={styleBody}>
            <Text style={{ fontSize: 30, borderWidth: 0, color: 'white' }}>{disponible}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {iconBody}
                <Text style={{ borderWidth: 0, color: 'white', fontSize: 9 }}>{labelDisponible}</Text>
            </View>            
        </View>
    );
}
const colorGradient = (escala,open) =>{
    switch(true){
        case open === 'F':
            return '#bdbdbd' ;
        case escala == 1:
            return '#ef9a9a';
        case escala <= 2:
            return '#bbdefb';
        case escala <= 3:
            return '#90caf9';
        case escala <= 4:
            return '#42a5f5';
        default:
            return '#1e88e5';
    }
}
const styles = StyleSheet.create({
    container: {
        borderWidth:0,
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
        flex: 1,
        flexDirection: 'row'
    },
    body: {
        flex: 2,
        flexDirection: 'row',
        borderWidth: 0
    },
    containerBody: {
        flex: 1,
        flexDirection: 'column'
    },
});
export default ParadaCard;