import * as React from 'react';

import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { Text, View } from 'react-native';
//import Mapa from '../Mapa';
import Parada from '../Parada';

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

 function Home() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size }) =>{
                        return getIcon(route, focused, color, size);
                    }
                })} 
            > 
                <Tab.Screen name={SCREEN_NAME_MAPA} component={Parada} />
                <Tab.Screen name={SCREEN_NAME_PARADAS} component={Parada} />
                <Tab.Screen name={SCREEN_NAME_COMPARTIR} component={settingsScreen} />
            </Tab.Navigator>

        </NavigationContainer>
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

export default Home;