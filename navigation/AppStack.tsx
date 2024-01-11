// import {View, Text, color} from 'react-native';
// import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import OnboardingScreen from '../screen/OnboardingScreen';
// import HomeScreen from '../screen/HomeScreen';
// import ProfileScreen from '../screen/ProfileScreen';
// import MessageScreen from '../screen/MessageScreen';
// import MomentsScreen from '../screen/MomentsScreen';
// import SettingScreen from '../screen/SettingScreen';
// import CustomDrawer from '../components/CustomDrawer';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
// import CcdbScreen from '../screen/Category/Caycanhdeban/CcdbHome';
// import CcvpScreen from '../screen/Category/Caycanhvanphong/CcvpScreen';
// import SdScreen from '../screen/Category/Senda/SdScreen';
// import CcScreen from '../screen/Category/Chaucanh/CcScreen';
// import Signin from '../screen/Login/Signin';
// import CartProduct from '../screen/CartProduct';

// const Drawer = createDrawerNavigator();

// const AppStack = ({navigation}) => {
//   return (
//     <Drawer.Navigator
//       drawerContent={props => <CustomDrawer {...props} />}
//       initialRouteName="Home"
//       screenOptions={{
//         headerShown: false,
//         drawerActiveBackgroundColor: '#aa18ea',
//         drawerActiveTintColor: '#fff',
//         drawerInactiveTintColor: '#333',
//         drawerLabelStyle: {marginLeft: -25, fontSize: 16},
//       }}>
//       <Drawer.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           drawerIcon: ({color}) => (
//             <Ionicons name="home-outline" size={22} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Cây cảnh để bàn"
//         component={CcdbScreen}
//         options={{
//           drawerIcon: ({color}) => (
//             <Ionicons name="tablet-portrait-outline" size={22} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Cây cảnh văn phòng"
//         component={CcvpScreen}
//         options={{
//           drawerIcon: ({color}) => (
//             <Ionicons name="business-outline" size={22} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Sen đá"
//         component={SdScreen}
//         options={{
//           drawerIcon: ({color}) => (
//             <Ionicons name="leaf-outline" size={22} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Chậu cảnh"
//         component={CcScreen}
//         options={{
//           drawerIcon: ({color}) => (
//             <Ionicons name="beaker-outline" size={22} color={color} />
//           ),
//         }}
//       />
//        <Drawer.Screen
//         name="giỏ hàng"
//         component={CartProduct}
//         options={{
//           drawerIcon: ({color}) => (
//             <Ionicons name="cart-outline" size={22} color={color} />
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// };

// export default AppStack;

// import {Image, TouchableOpacity} from 'react-native';
// import { useState } from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// // import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// // import Ionicons from '@expo/vector-icons/Ionicons';
// // import Ionicons from 'react-native-vector-icons/Ionicons';
// // import MaterialIcons from 'react-native-vector-icons/FontAwesome';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import HomeScreen from '../screen/HomeScreen';
// import Category from '../screen/Category/Category';
// import ProfileScreen from '../screen/ProfileScreen';
// import CartProduct from '../screen/CartProduct';
// const RootStack = createBottomTabNavigator();

// const AppStack = () => {
//   return (
//     <RootStack.Navigator
//       initialRouteName="HomeScreen"
//       screenOptions={{
//         headerShown: false,
//         tabBarLabelStyle: {
//           fontSize: 14,
//           marginTop: 3,
//         },
//         tabBarActiveTintColor: 'red',
//       }}>
//       <RootStack.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Nhà',
//           tabBarIcon: ({color}) => (
//             // <MaterialIcons name="home" size={23} color={color} />
//             <FontAwesome5
//             name="user"
//             size={24}
//             color="green"
//             ></FontAwesome5>
//           ),
//         }}
//       />
//       <RootStack.Screen
//         name="Category"
//         component={Category}
//         options={{
//           tabBarLabel: 'Loại',
//           tabBarIcon: () => (
           
//           ),
//         }}
//       />
//       <RootStack.Screen
//         name="CartProduct"
//         component={CartProduct}
//         options={{
//           tabBarLabel: 'Giỏ hàng',
//           tabBarIcon: () => (
//             // <Image
//             //   source={require('../Image/Category/cart.png')}
//             //   style={{width: 32, height: 32}}
//             // />
//           ),
//         }}
//       />
//       <RootStack.Screen
//         name="ProfileScreen"
//         component={ProfileScreen}
//         options={{
//           tabBarLabel: 'Hồ sơ',
//           tabBarIcon: () => (
//             // <Image
//             //   source={require('../Image/Category/profile.png')}
//             //   style={{width: 32, height: 32}}
//             // />
//           ),
//         }}
//       />
//     </RootStack.Navigator>
//   );
// };
// export default AppStack;


import { Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screen/HomeScreen';
import Category from '../screen/Category/Category';
import ProfileScreen from '../screen/ProfileScreen';
import CartProduct from '../screen/CartProduct';

const RootStack = createBottomTabNavigator();

const AppStack = () => {
  return (
    <RootStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 14,
          marginTop: 3,
        },
        tabBarActiveTintColor: 'green',
      }}>
      <RootStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color="#6A5ACD" />
          ),
        }}
      />
      <RootStack.Screen
        name="Category"
        component={Category}
        options={{
          tabBarLabel: 'Danh mục',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="book" size={24} color="#6A5ACD" />
          ),
        }}
      />
      <RootStack.Screen
        name="CartProduct"
        component={CartProduct}
        options={{
          tabBarLabel: 'Giỏ hàng',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="cart-plus" size={24} color="#6A5ACD" />
          ),
        }}
      />
      <RootStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Hồ sơ',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={24} color="#6A5ACD" />
          ),
        }}
      />
    </RootStack.Navigator>
  );
};

export default AppStack;