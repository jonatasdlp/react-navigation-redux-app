import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class Pre extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { dispatch } = this.props.navigation;
    return (
      <View>
        <Button title="Tabs" onPress={() => dispatch({ type: 'Tabs' })}/>
      </View>
    );
  }
}
