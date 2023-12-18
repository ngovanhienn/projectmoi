import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';
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
import Cart from './screen/Cart';
import Listccdb from './screen/Category/Caycanhdeban/Listccdb';
import CcdbScreen from './screen/Category/Caycanhdeban/CcdbHome';
import SearchScreen from './screen/Search';
import CartProduct from './screen/CartProduct';
import Pay from './screen/Pay';
import ProfileScreen from './screen/ProfileScreen';
const App = () => {
  return  <ProfileScreen/>
  // <AuthStack />;
  
  // <Pay/>;
 
  // <CartProduct />
  // <AuthStack />;
};

export default App;



// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Listccdb from './screen/Category/Caycanhdeban/Listccdb';
// import ChitietSP from './screen/ChitietSP';
// import HomeScreen from './screen/HomeScreen';
// import CcvpScreen from './screen/Category/Caycanhvanphong/CcvpScreen';
// import Listccvp from './screen/Category/Caycanhvanphong/Listccvp';
// import SdScreen from './screen/Category/Senda/SdScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {/* <Stack.Screen name="HomesCreen" component={HomeScreen} /> */}
//         <Stack.Screen name="ChitietSP" component={ChitietSP} />
//         {/*<Stack.Screen name="CcvpScreen" component={CcvpScreen} /> */}
//         <Stack.Screen name="SdScreen" component={SdScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;