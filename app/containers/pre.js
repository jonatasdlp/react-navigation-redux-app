import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class Pre extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View>
        <Button title="Tabs" onPress={() => this.props.navigation.navigate('Tabs')}/>
      </View>
    );
  }
}
