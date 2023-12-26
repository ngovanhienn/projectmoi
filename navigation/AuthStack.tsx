// import {View, Text} from 'react-native';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import OnboardingScreen from '../screen/OnboardingScreen';
// import Signin from '../screen/Login/Signin';
// import HomeScreen from '../screen/HomeScreen';
// import AppStack from './AppStack';
// import CcScreen from '../screen/Category/Chaucanh/CcScreen';
// import ListProduce from '../screen/ListProduce';
// import Chitietccvp from '../screen/Detail/Chitietccvp';
// import ProfileScreen from '../screen/ProfileScreen';
// import Danhmuc from '../screen/Danhmuc';
// import DtHome from '../screen/Category/Dattrong/DtHome';
// import PbHome from '../screen/Category/Phanbon/PbHome';
// import Dungculamvuon from '../screen/Category/Dungcu/Dungculamvuon';
// import LandingScreen from '../screen/Landing/LandingScreen';
// import Signup from '../screen/Login/SignupScreen';
// import Cart from '../screen/Cart';
// import ChitietSP from '../screen/ChitietSp/ChitietSP';
// import Chitietcbangsgp from '../screen/Detail/Chitietbangsgp';
// import Listccdb from '../screen/Category/Caycanhdeban/Listccdb';
// import CcdbScreen from '../screen/Category/Caycanhdeban/CcdbHome';
// import Listccvp from '../screen/Category/Caycanhvanphong/Listccvp';
// import CartProduct from '../screen/CartProduct';
// import Pay from '../screen/Pay';
// import Search from '../screen/Search';
// import Info from '../screen/profileafter/Info';
// import Category from '../screen/Category/Category';
// import Product from '../screen/Product/Product';

// const Stack = createNativeStackNavigator();

// const AuthStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         {/* <Stack.Screen name="LandingScreen" component={LandingScreen} />
//         <Stack.Screen name="Signup" component={Signup} />
//         <Stack.Screen name="Signin" component={Signin} /> */}
//         <Stack.Screen name="Home" component={AppStack} />
//         <Stack.Screen name="Chitietccvp" component={Chitietccvp} />
//         <Stack.Screen name="ListProduce" component={ListProduce} />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//         <Stack.Screen name="Onboarding" component={OnboardingScreen} />
//         <Stack.Screen name="Dattrong" component={DtHome} />
//         <Stack.Screen name="Phanbon" component={PbHome} />
//         <Stack.Screen name="Danhmuc" component={Danhmuc} />
//         <Stack.Screen name="Dungcu" component={Dungculamvuon} />
//         <Stack.Screen name="Cart" component={Cart} />
//         <Stack.Screen name="chitietbangsgp" component={Chitietcbangsgp} />
//         <Stack.Screen name="Listccdb" component={Listccdb} />
//         <Stack.Screen name="ChitietSP" component={ChitietSP} />
//         <Stack.Screen name="CcdbScreen" component={CcdbScreen} />
//         <Stack.Screen name="Listccvp" component={Listccvp} />
//         <Stack.Screen name="CartProduct" component={CartProduct} />
//         <Stack.Screen name="Pay" component={Pay} />
//         <Stack.Screen name="Info" component={Info} />
//         <Stack.Screen name="Category" component={Category} />
//         <Stack.Screen name="Product" component={Product} />
//         {/* <Stack.Screen name="Search" component={Search} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AuthStack;

import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
// import OnboardingScreen from '../screen/OnboardingScreen';
import AppProvider from '../components/AppContext/AppContext';
import AppStack from './AppStack';
import ChitietSP from '../screen/ChitietSp/ChitietSP';
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import CartProduct from '../screen/CartProduct';
import Signin from '../screen/Login/Signin';
import Product from '../screen/Product/Product';
import Pay from '../screen/Pay';
import Signup from '../screen/Login/SignupScreen';

const AuthStack = () => {
  // const Stack = createNativeStackNavigator();
  const RootStack = createStackNavigator<MainStackParamList>();
  // const RootStack = createBottomTabNavigator<MainStackParamList>();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (initializing) {
    return null;
  }
  return (
    <AppProvider>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          
          {/* <RootStack.Screen name="Signin" component={Signin} />
          <RootStack.Screen name="Signup" component={Signup} /> */}
          <RootStack.Screen name="AppStack" component={AppStack} />
          <RootStack.Screen name="HomeScreen" component={HomeScreen} />
          <RootStack.Screen name="ChitietSP" component={ChitietSP} />
          <RootStack.Screen name="ProfileScreen" component={ProfileScreen} />
          <RootStack.Screen name="CartProduct" component={CartProduct} />
          
          <RootStack.Screen name="Product" component={Product} />
          <RootStack.Screen name="Profile" component={ProfileScreen} />
          <RootStack.Screen name="Pay" component={Pay} />
        </RootStack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};
export default AuthStack;
