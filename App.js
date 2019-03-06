import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight
} from 'react-native';


class App extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <View style={styles.root}>
                <View style={styles.topContainer}>
                    <TextInput style={styles.textInput}
                        placeholder='Whats in your mind?'
                        onChangeText={(searchText) => this.setState({searchText})}
                    />
                    <TouchableHighlight style={styles.searchButton}
                        underlayColor='#007AFF'>
                        <Text style={styles.buttonText}>Search</Text>
                    </TouchableHighlight>

                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center' ,
    },
    topContainer: {
        margin: 10,
        borderRadius: 10,
        flex: 2,
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginBottom: 20
    },
    textInput: {
        fontSize: 30,
        fontFamily: 'helvetica',
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        color: '#007AFF',
        marginTop: 30,
        height: 64, width: 300
    },
    searchButton: {
        marginTop: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#007AFF',
        borderRadius: 20,
        height: 60, width: 150
    },
    buttonText: {
        fontSize: 24,
        fontFamily: 'helvetica',
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
    }
})

module.exports = App;
