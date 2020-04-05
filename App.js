import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Home from './components/Main';
import Inicio from './components/Inicio';
import { AsyncStorage } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer';


const store = createStore(reducer);
export default function App() {
  const [ventana, setVentana] = useState('');
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('US3R_G0BICI#85');
      if (value !== null) {
        return 'welcome';
      }
    } catch (error) {
      return 'inicio';
    }
  };
  useEffect(() => {
    _retrieveData().then(setVentana).catch(setVentana);
  });

  if (ventana === 'welcome') {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )

  } else {
    return <Inicio funcion={setVentana} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
