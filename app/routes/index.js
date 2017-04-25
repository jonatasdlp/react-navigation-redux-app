import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'

import TabA from '../screens/tab-a';
import TabB from '../screens/tab-b';

export const Tabs = TabNavigator({
  TabA: {
    screen: TabA,
    icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
  },
  TabB: {
    screen: TabB,
    icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
  },
});
