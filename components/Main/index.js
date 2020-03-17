import * as React from 'react';

import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

function homeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Hola</Text>
        </View>
    );
}

function settingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings</Text>
        </View>
    );
}
const SCREEN_NAME_MAPA = "mapa";
const SCREEN_NAME_PARADAS = "paradas";
const SCREEN_NAME_COMPARTIR = "compartir";
const Tab = createBottomTabNavigator();

export default function Home() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size }) =>{
                        return getIcon(route, focused, color, size);
                    }
                })} 
            > 
                <Tab.Screen name={SCREEN_NAME_MAPA} component={homeScreen} />
                <Tab.Screen name={SCREEN_NAME_PARADAS} component={settingsScreen} />
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
            return <Ionicons name={'ios-bicycle'} size={size} color={color}/>;
        case SCREEN_NAME_COMPARTIR:
            return <Ionicons name={'ios-camera'} size={size} color={color}/>; 
    }
    
}