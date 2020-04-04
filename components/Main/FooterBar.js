import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { Text, View } from 'react-native';
//import Mapa from '../Mapa';
import Parada from '../Parada';
import ListaParadas from '../ListaParadas';
function settingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}
const SCREEN_NAME_MAPA = "mapa";
const SCREEN_NAME_PARADAS = "paradas";
const SCREEN_NAME_COMPARTIR = "compartir";
const Tab = createBottomTabNavigator();

 function FooterBar() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size }) =>{
                    return getIcon(route, focused, color, size);
                }
            })} 
        > 
            <Tab.Screen name={SCREEN_NAME_MAPA} component={ListaParadas} />
            <Tab.Screen name={SCREEN_NAME_PARADAS} component={ListaParadas} />
            <Tab.Screen name={SCREEN_NAME_COMPARTIR} component={settingsScreen} />
        </Tab.Navigator>
    );
}

function getIcon(route, focused, color, size){
    switch(route.name){
        case SCREEN_NAME_MAPA:
            return <Ionicons name={'ios-map'} size={size} color={color}/>;
        case SCREEN_NAME_PARADAS:
            return <MaterialIcons name={'local-parking'} size={size} color={color}/>;
        case SCREEN_NAME_COMPARTIR:
            return <Entypo name={'flow-line'} size={size} color={color}/>; 
    }
    
}
// const MyTheme = {
//     ...DefaultTheme,
//     colors: {
//       ...DefaultTheme.colors,
//       primary: '#1565c0',
//     },
//   };

export default FooterBar;