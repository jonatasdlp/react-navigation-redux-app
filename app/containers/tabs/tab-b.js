import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TabB extends Component {
  static navigationOptions = {
    title: 'Tab B',
  };

  render() {
    return (
      <View>
        <Text>Tab B</Text>
      </View>
    );
  }

}
