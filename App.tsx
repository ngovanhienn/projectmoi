import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screen/Mhc/HomeScreen';
import SettingScreen from './screen/SettingScreen';
// import SignupScreen from './screen/Login/SignupScreen';
import SigninScreen from './screen/Login/Signin';
// import LandingScreen from './screen/Landing/LandingScreen';
import Navigation from './Navigation';
import {ActivityIndicator} from 'react-native';
import Signin from './screen/Login/Signin';
import React, {useEffect, useState} from 'react';
import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';
import {StatusBar} from 'react-native';

const App = () => {
  return <AuthStack />;
};

export default App;
