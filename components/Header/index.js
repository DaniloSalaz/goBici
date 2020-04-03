
import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform} from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import Constants from 'expo-constants';

class Header extends Component {
    state = {
        search: ''
      };
    
      updateSearch = search => {
        this.setState({ search });
      };
    render(){
        const { search } = this.state;
        return(
          <View style={styles.container}>
              <Text style={{color:'#ffffff'}}>Gobici</Text>
              <Ionicons name="ios-search" color="#ffffff"/>
              <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
      />
            </View>
             
            
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        padding:20,
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor: '#424242',
        marginTop: Constants.statusBarHeight,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.65,

        elevation: 7
    }
});
export default Header;