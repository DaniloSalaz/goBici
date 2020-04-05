import React from 'react';
import { StyleSheet, TextInput, Text, View, Button, Dimensions } from 'react-native';
import Home from './components/Main';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  reducer  from './redux/reducer';


import Header from './components/Header';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const store = createStore(reducer);
export default function App() {
  return (
    <Provider store={store}>
        <Home/>
    </Provider>
    
  )
}
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems:'stretch', justifyContent:'flex-end', marginBottom:2}}>
//       <Home/>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
           
//             title: 'My home',
//             headerStyle: {
//               backgroundColor: '#1565c0'
//             },
//             headerTitleAlign:'center',
//             headerTintColor: '#fff',
//             headerTitle: () => (<TextInput
//         placeholder="this is placeholder"
//         placeholder="search"
//         placeholderTextColor= 'gray'
//         style={{
//           width: Dimensions.get('window').width - 20,
//           backgroundColor:'#ffffff',
//           borderWidth: 2,
//           borderColor: 'white',
//         }} />),
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
