import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from './Header';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
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
          style={{height: 100, width: 100, borderRadius: 50, marginTop: 16}}
        />
        <Text
          style={{fontSize: 30, fontWeight: '500', color: '#333', margin: 10}}>
          Hiển Ngô
        </Text>
      </View>
      <View style={styles.item}>
        <TouchableOpacity onPress={() => navigation.navigate('Info')}>
          <View
            style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 50}}>
            <View style={styles.boxicon}>
              <FontAwesome5
                name="user"
                size={24}
                color="green"
                styles={styles.icon}></FontAwesome5>
            </View>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
              Thông tin tài khoản
            </Text>
            {/* <FontAwesome5 name="angle-right" size={24} style={styles.icon1}></FontAwesome5> */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <View
            style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 30}}>
            <View style={styles.boxicon}>
              <FontAwesome5
                name="wallet"
                size={24}
                color="green"
                styles={styles.icon}></FontAwesome5>
            </View>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
              Ví của tôi
            </Text>
            {/* <FontAwesome5 name="angle-right" size={24} style={styles.icon1}></FontAwesome5> */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <View
            style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 30}}>
            <View style={styles.boxicon}>
              <FontAwesome5
                name="globe"
                size={24}
                color="green"
                styles={styles.icon}></FontAwesome5>
            </View>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
              Ngôn ngữ
            </Text>
            {/* <FontAwesome5 name="angle-right" size={24} style={styles.icon1}></FontAwesome5> */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <View
            style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 30}}>
            <View style={styles.boxicon}>
              <FontAwesome5
                name="star"
                size={24}
                color="green"
                styles={styles.icon}></FontAwesome5>
            </View>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
              Đánh giá
            </Text>
            {/* <FontAwesome5 name="angle-right" size={24} style={styles.icon1}></FontAwesome5> */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <View
            style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 30}}>
            <View style={styles.boxicon}>
              <FontAwesome5
                name="lock"
                size={24}
                color="green"
                styles={styles.icon}></FontAwesome5>
            </View>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
              Chính sách bảo mật
            </Text>
            {/* <FontAwesome5 name="angle-right" size={24} style={styles.icon1}></FontAwesome5> */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <View
            style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 30}}>
            <View style={styles.boxicon}>
              <FontAwesome5
                name="book"
                size={24}
                color="green"
                styles={styles.icon}></FontAwesome5>
            </View>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
              Điều khoản sử dụng
            </Text>
            {/* <FontAwesome5 name="angle-right" size={24} style={styles.icon1}></FontAwesome5> */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <View
            style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 30}}>
            <View style={styles.boxicon}>
              <FontAwesome5
                name="info"
                size={24}
                color="green"
                styles={styles.icon}></FontAwesome5>
            </View>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
              Về chúng tôi
            </Text>
            {/* <FontAwesome5 name="angle-right" size={24} style={styles.icon1}></FontAwesome5> */}
          </View>
        </TouchableOpacity>

        <View style={{}}>
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
    flex: 1,
  },
  profile: {
    width: 30,
    height: 30,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#33CC00',
  },
  but1: {
    // width: 330,
    borderRadius: 10,
    height: 50,
    margin: 30,
    justifyContent: 'center',
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
  },
  but2: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  boxicon: {
    height: 30,
    width: 40,
  },
  icon: {},
  icon1: {
    // marginLeft: 160,
    // fontWeight:100,
  },
});

export default ProfileScreen;
