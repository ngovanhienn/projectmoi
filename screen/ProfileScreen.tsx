import React from 'react';
import {View, Text, ImageBackground, StyleSheet, Image,TouchableOpacity} from 'react-native';
import Header from './Header';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'space-between'}}>
        {/* <Text style={{fontSize: 25, textAlign: 'center', marginVertical: 20}}>
          {' '}
        </Text> */}
      </View>
      <View style={styles.header}>
        <Image
          source={require('../Image/profile.jpg')}
          // style={styles.profile}
          style={{height:100,width:100, borderRadius:50,marginTop:16}}
        />
        <Text style={{fontSize: 30, fontWeight:'500',color:'#333', margin: 10}}>
          Hiển Ngô
        </Text>
      </View>
      <View style={styles.item}>

      <TouchableOpacity onPress={() => navigation.navigate('CartProduct')}>
        <View
          style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 50}}>
          <Image
            style={{marginLeft: 20}}
            source={require('../Image/cart2.png')}
            style={styles.profile}
          />
          <Text style={{marginLeft: 30, fontSize: 18, fontWeight: 'bold'}}>
            Giỏ hàng
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <View
          style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 50}}>
          <Image
            style={{marginLeft: 20}}
            source={require('../Image/new.jpg')}
            style={styles.profile}
          />
          <Text style={{marginLeft: 30, fontSize: 18, fontWeight: 'bold'}}>
            Tạo tài khoản mới
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <View
          style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 40}}>
          <Image
            style={{marginLeft: 20, tintColor: 'blue'}}
            source={require('../Image/new2.png')}
            style={styles.profile}
          />
          <Text style={{marginLeft: 30, fontSize: 18, fontWeight: 'bold'}}>
            Đổi tài khoản
          </Text>
        </View>
        {/* <FontAwesome5 name="star-of-life" size={20} color="black"></FontAwesome5> */}
      </TouchableOpacity>


      <View style={{marginTop: 15}}>
        <TouchableOpacity
          style={styles.but1}
          onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.but2}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // borderTopWidth: 1,
    // borderTopColor: 'black',
    flex:1,
  },
  profile: {
    width: 30,
    height: 30,
  },
  header :{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#33CC00'
  },
  but1: {
    // width: 330,
    borderRadius: 10,
    height: 50,
    margin: 30,
    justifyContent: 'center',
    backgroundColor: '#20C065',
    color: 'white',
    textAlign: 'center',
    marginTop:60
  },
  but2: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    
  },
});

export default ProfileScreen;
