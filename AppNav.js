import React from 'react';
import {createStackNavigator} from 'react-navigation';

import Home from './App';
import Listen from './Listen';


const AppNav = createStackNavigator({
  Home: {screen: Home},
  Listen: {screen: Listen}
});

export default AppNav;
