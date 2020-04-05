import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TextInput, Dimensions, Button, AsyncStorage, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

function Settings() {
    const [userName, setUserName] = useState(null);
    let [selectedImage, setSelectedImage] = React.useState(null);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
        if (pickerResult.cancelled === true) {
            return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
    };
    let openShareDialogAsync = async () => {
        if (!(await Sharing.isAvailableAsync())) {
            alert(`Uh oh, sharing isn't available on your platform`);
            return;
        }

        Sharing.shareAsync(selectedImage.localUri);
    };
    const _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('US3R_G0BICI#85');
            if (value !== null) {
                setUserName(value)
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (userName === null) {
            _retrieveData()
        }

    })
    const _storeData = async () => {
        try {
            await AsyncStorage.setItem('US3R_G0BICI#85', userName);
            console.log(userName)
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.container_image}>
                <Image style={styles.image}
                    source={require('../../images/profile.png')} />

            </View>
            <View style={styles.container_form}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, marginLeft: 20, align: 'center' }}>Hola: {userName}</Text>
                </View>

                <Text style={{ fontSize: 20, marginLeft: 20 }}>Login</Text>
                <View>
                    <TextInput
                        placeholder='Nombre Usuario'
                        style={{ height: 40, borderColor: '#0070bc', borderBottomWidth: 1, margin: 20 }}
                        onChangeText={text => setUserName(text)}
                    />

                </View>

                <View>
                    <View style={styles.button}>
                        <Button
                            title="GUARDAR"
                            color='white'
                            accessibilityLabel="Learn more about this purple button"
                            onPress={() => { _storeData() }}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title={selectedImage !== null?'COMPARTIR':'SELECCIONAR FOTO'}
                            color='white'
                            accessibilityLabel="Learn more about this purple button"
                            onPress={selectedImage !== null?openShareDialogAsync:openImagePickerAsync}
                        />
                    </View>
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
    },
    container_form: {
        flex: 2,
        borderWidth: 0,
        alignItems: 'stretch'
    },
    button: {
        backgroundColor: "#0070bc",
        margin: 10,
        borderRadius: 10,

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.65,

        elevation: 7
    }
});
export default Settings;