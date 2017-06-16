import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Pre from '../containers/pre';
import TabA from '../containers/tabs/tab-a';
import TabB from '../containers/tabs/tab-b';

export const Tabs = TabNavigator({
  TabA: {
    screen: TabA,
    icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
  },
  TabB: {
    screen: TabB,
    icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
  },
});

export const Base = StackNavigator({
  Pre: {
    screen: Pre,
  },
  Tabs: {
    screen: Tabs,
  },
});
