import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TabA extends Component {
  static navigationOptions = {
    title: 'Tab A',
  };

  render() {
    return (
      <View>
        <Text>Tab A</Text>
      </View>
    );
  }

}
