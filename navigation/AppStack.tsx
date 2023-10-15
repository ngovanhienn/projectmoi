import {View, Text, color} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import OnboardingScreen from '../screen/OnboardingScreen';
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import MessageScreen from '../screen/MessageScreen';
import MomentsScreen from '../screen/MomentsScreen';
import SettingScreen from '../screen/SettingScreen';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CcdbScreen from '../screen/Category/Caycanhdeban/CcdbHome';
import CcvpScreen from '../screen/Category/Caycanhvanphong/CcvpScreen';
import SdScreen from '../screen/Category/Senda/SdScreen';
import CcScreen from '../screen/Category/Chaucanh/CcScreen';
import Signin from '../screen/Login/Signin';
import CartProduct from '../screen/CartProduct';

const Drawer = createDrawerNavigator();

const AppStack = ({navigation}) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {marginLeft: -25, fontSize: 16},
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cây cảnh để bàn"
        component={CcdbScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="tablet-portrait-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cây cảnh văn phòng"
        component={CcvpScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="business-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sen đá"
        component={SdScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="leaf-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Chậu cảnh"
        component={CcScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="beaker-outline" size={22} color={color} />
          ),
        }}
      />
       <Drawer.Screen
        name="giỏ hàng"
        component={CartProduct}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="cart-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
