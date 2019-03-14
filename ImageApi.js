import React, { Component } from 'react';
import { FlatList, Text, View,StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.state ={ isLoading: true};
  }

  onPress = () => {
    fetch('https://pixabay.com/api/?key=11809334-b8b2b529a4dd728dc8663833a&q=yellow&image_type=photo&pretty=true')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){
      });
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        
       <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.likes}, {item.id}</Text>}
          keyExtractor={({id}, index) => id}
        />
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
    margin: 50,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
})