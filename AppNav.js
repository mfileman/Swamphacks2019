import React from 'react';

import Home from 'App.js'
import Listen from 'Listen.js';

import {createStackNavigator} from 'react-navigation';


export default const AppNav = createStackNavigator({
  Home: {screen: Home},
  Listen: {screen: Listen},
});
