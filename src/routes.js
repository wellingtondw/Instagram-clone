import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Logo from './assets/instagram.png';

import Feed from './pages/Feed';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Feed,
    },
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerTitle: () => <Image source={Logo} />,
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
      },
    },
  ),
);

export default Routes;
