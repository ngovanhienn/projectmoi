// import React, { useEffect, useState } from 'react';
// import {ActivityIndicator} from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import HomeScreen from './screen/Mhc/HomeScreen';
// import SettingsScreen from './screen/SettingScreen';
// import Signin from './screen/Login/Signin';

// export function Auth() {
//   const [isAuth, setAuth] = useState<boolean | undefined>();

//   useEffect(() => {
//     AsyncStorage.getItem('useName', (err, item) => {
//       if (!err && item && item.length > 0) {
//         setAuth(true);
//       } else {
//         setAuth(false);
//       }
//     });
//   }, []);

//   if (isAuth === undefined) {
//     return <ActivityIndicator color={'red'} size={300} />;
//   }

//   if (isAuth === true) {
//     return <HomeScreen />;
//   }
//   return <Signin />;
// }

// const Navigation = () => {
//   const [isAppBuilt, setAppBuilt] = useState<boolean>(false);

//   useEffect(() => {
//     setAppBuilt(true);
//   }, []);

//   if (!isAppBuilt) {
//     return <Auth />;
//   }

//   const Drawer = createDrawerNavigator();

//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Signin">
//         <Drawer.Screen name="Signin" component={Signin} />
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Settings" component={SettingsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Navigation;
