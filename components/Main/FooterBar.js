import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import Mapa from '../Mapa';
import ListaParadas from '../ListaParadas';
import Settings from '../SettingsScreen'
function settingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}
const SCREEN_NAME_MAPA = "mapa";
const SCREEN_NAME_PARADAS = "paradas";
const SCREEN_NAME_COMPARTIR = "perfil";
const Tab = createBottomTabNavigator();

 function FooterBar({dataParada, updateParadas}) {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size }) =>{
                    return getIcon(route, focused, color, size);
                }
            })} 
        > 
            <Tab.Screen name={SCREEN_NAME_MAPA}>{props => <Mapa {...props} dataParada={dataParada}/>}</Tab.Screen>
            <Tab.Screen name={SCREEN_NAME_PARADAS}>{props => <ListaParadas {...props} dataParada={dataParada}/>}</Tab.Screen>
            <Tab.Screen name={SCREEN_NAME_COMPARTIR} component={Settings} />
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
            return <Entypo name={'user'} size={size} color={color}/>; 
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