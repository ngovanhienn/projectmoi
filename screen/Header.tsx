import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Button,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Header = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#00FF00',
          height: 50,
        }}>
        <View style={{}}>
          <ImageBackground
            source={require('../Image/logo.jpg')}
            style={{width: 80, height: 50}}
            imageStyle={{borderRadius: 10}}
          />
        </View>

        <View style={{marginRight: 10}}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <ImageBackground
              source={require('../Image/profile.jpg')}
              style={{width: 46, height: 46}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00FF00',
    height: 68,
  },
  search: {
    height: 40,
    width: 130,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  searchButton: {
    marginRight: 10,
    fontSize: 16,
    color: 'black',
  },
  cart: {
    marginBottom: 20,
  },
});

export default Header;
