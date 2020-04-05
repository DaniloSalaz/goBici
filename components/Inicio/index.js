import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TextInput, Dimensions, Button, AsyncStorage } from 'react-native';

function Inicio({funcion}) {
    const [userName, setUserName] = useState(null);
   const  _storeData = async () => {
        try {
          await AsyncStorage.setItem('USeR_G0BICI#', userName);
          console.log(userName)
        } catch (error) {
            console.log(error);
        }
      };
    return (
        <View style={styles.container}>
            <View style={styles.container_image}>
                <Image style={styles.image}
                    source={require('../../images/logo.png')} />
            </View>
            <View style={styles.container_form}>
                <Text style={{fontSize:20, marginLeft:20}}>Login</Text>
                <View>
                <TextInput
                    placeholder='Nombre Usuario'
                    style={{ height: 40, borderColor: '#0070bc', borderBottomWidth: 1, margin:20 }}
                    onChangeText={text => setUserName(text)}
                    />
                    <TextInput
                    placeholder='Password'
                    secureTextEntry='true'
                    style={{ height: 40, borderColor: '#0070bc', borderBottomWidth: 1, margin:20 }}
                    
                    />
                </View>
                
                    <View style={styles.button}>
                    <Button
                        title="LOGIN"
                        color='white'
                        accessibilityLabel="Learn more about this purple button"
                        onPress={() => {_storeData().then(funcion('welcome')).catch(funcion('inicio'))}}
                    />
                    </View>
                    
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
    },
    container_image: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        width: Dimensions.get('window').width / 2,
        resizeMode: 'center',
        borderBottomWidth: 4,
        borderBottomColor: '#0070bc'
    },
    container_form: {
        flex: 2,
        borderWidth: 0,
        alignItems: 'stretch'
    },
    button:{
        backgroundColor: "#0070bc", margin:20,
        borderRadius:10,

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.65,

        elevation: 7
    }
});
export default Inicio;