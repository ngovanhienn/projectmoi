import {View, Text, ImageBackground, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import {StyledText} from 'react-native-styled-text';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const CustomDrawer = props => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground
          source={require('../Image/profile2.jpg')}
          style={{padding: 10}}>
          <Image
            source={require('../Image/profile.jpg')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text style={{color: 'yellow', fontSize: 18, fontWeight: 400}}>
            Hiển Ngô
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'yellow', fontSize: 12, fontWeight: 300}}>
              0 VNĐ{' '}
            </Text>
            <FontAwesome5 name="coins" size={14} color="yellow"></FontAwesome5>
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 2, borderColor: '#777'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: -5,
            }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: 5}}>
              Out Custom Text
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')} style={{paddingVertical: 15}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: -5,
            }} 
            
            >
            <Ionicons name="exit-outline" size={22} />
            <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: 5}}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
