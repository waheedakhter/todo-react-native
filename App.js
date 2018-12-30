import React, {Component} from 'react';
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import LoginScreen from './src/login/LoginScreen';
import MainScreen from './src/mainScreen';
import SplashScreen from './src/SplashScreen';
import reducers from "./src/reducers";
export const reduxStore = createStore(reducers,{},applyMiddleware(ReduxThunk));

export default class App extends Component{
  render() {
    console.disableYellowBox = true; 
    return (
      <Provider store = {reduxStore}>
      <AppStackNavigator/>
      </Provider> 
    );
  }
}
const AppStackNavigator = createStackNavigator({
  SplashScreen:{
  screen: SplashScreen
},
  MainScreen:{
    screen:MainScreen,
    navigationOptions: {
      header: null
  }
  },
    Login:{
      screen:LoginScreen
    }
}
);

