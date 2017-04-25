import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Tabs } from './routes/index';

export default class App extends Component {
  
  render() {
    return (
      <Tabs />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },
  textCenter: {
    textAlign: 'center',
  }
});
