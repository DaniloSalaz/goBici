import React, { useState, Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput, Text, Dimensions, StyleSheet, View } from 'react-native';
import { Ionicons, MaterialIcons, EvilIcons } from '@expo/vector-icons';
import FooterBar from './FooterBar';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators as actions } from '../../redux/actions';

const Stack = createStackNavigator();
class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
          isLoading: true
        };
      }
    getData(){
        return fetch('https://json-server-cine.herokuapp.com/features')
            .then((response) => response.json())
            .then((json) => {this.setState({ data: json });})
            .catch((error) => console.log(error))
            .finally(() => {
                this.setState({ isLoading: false });
              });
    } 
    componentDidMount() {
        this.getData();
    }
    render() {
        const { data, isLoading } = this.state;
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        options={options(this.props)}
                    >{props => <FooterBar {...props} dataParada={data} updateParadas={this.getData}/>}</Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>

        );
    }
}

function options(props) {
    const isHeaderRight = props.isHeaderRight;
    const isHeaderSearch = props.isHeaderSearch;
    return (
        {
            headerStyle: styles.headerStyle,
            headerTitleAlign: 'left',
            headerTintColor: '#fff',
            headerRight: isHeaderRight ? () => headerRight(props.setHeaderRight, props.setHeaderSearch) : null,
            headerTitle: isHeaderSearch ? () => headerSearch(props.setHeaderRight, props.setHeaderSearch) : headerTitle
        }
    );
}

function headerSearch(setHeaderRight, setHeaderSearch) {
    return (
        <View style={styles.textInputContainer}>
            <TextInput
                placeholder="Buscar parada..."
                placeholderTextColor='gray'
                style={styles.textInput}
            />
            <Ionicons name='ios-close' style={{ flex: 1, marginLeft:20}} size={30} onPress={() => { setHeaderSearch(); setHeaderRight(); }} />
        </View>


    );
}
function headerTitle() {
    return (
        <Text style={{ color: '#fff', fontSize: 20 }}>GoBiciii</Text>
    );
}
function headerRight(setHeaderRight, setHeaderSearch) {
    return (
        <Ionicons name='ios-search' size={30} style={{ marginRight: 20 }} color={'#ffffff'} onPress={() => { setHeaderSearch(); setHeaderRight(); }} />
    );

}

function mapStateToProps(state) {
    const { isHeaderRight, isHeaderSearch } = state;
    return {
        isHeaderRight,
        isHeaderSearch
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setHeaderRight: bindActionCreators(actions.setHeaderRight, dispatch),
        setHeaderSearch: bindActionCreators(actions.setHeaderSearch, dispatch),
    }
}
const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#1565c0'
    },
    textInputContainer: {
        width: Dimensions.get('window').width - 20,
        height: 40,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20,
        padding: 4,
        backgroundColor: '#ffffff',
    },
    textInput: {
        flex: 7,
        backgroundColor: '#ffffff',
        borderRadius: 20,
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);