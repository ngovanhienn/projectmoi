import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';
export default function Signup({navigation}) {
  const signUpTestFn = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Đăng ký thành công');
        navigation.navigate('Signin');
      })
      .catch(err => {
        console.log(err);
        Alert.alert('yêu cầu phải có @ và mật khẩu phải trên 6 ký tự');
      });
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View>
          <ImageBackground
            source={require('../../Image/senda3.jpg')}
            style={styles.logo}
          />
        </View>

        <View>
          <Text style={styles.title}>Đăng ký</Text>
        </View>

        <View>
          <TextInput
            style={styles.input1}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input1}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.but1}
            // onPress={() => navigation.navigate('Signin')}>
            onPress={signUpTestFn}>
            <Text style={styles.but2}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signup}>
          <View style={styles.but3}>
            <Text style={styles.but5}>
              Bằng việc đăng ký, bạn đồng ý với
            </Text>
          </View>

          <View style={styles.rules}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Signup')}
              style={styles.but3}>
              <Text style={styles.new}>Điều khoản sử dụng </Text>
            </TouchableOpacity>
            <View style={styles.but3}>
              <Text style={styles.but6}>và </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Signup')}
              style={styles.but3}>
              <Text style={styles.new}>Chính sách bảo mật </Text>
            </TouchableOpacity>
          </View>
            <View style={styles.but3}>
              <Text style={styles.but5}>của chúng tôi</Text>
            </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 400,
    height: 200,
    resizeMode: 'stretch',
  },
  title: {
    color: '#303636',
    fontSize: 24,
  },
  input1: {
    height: 50,
    width: 350,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
  },

  but1: {
    width: 210,
    borderRadius: 30,
    height: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33CC00',
    // marginBottom: 130,
    color: 'white',
  },
  but2: {
    color: 'white',
    fontSize: 20,
  },
  but5: {
    color: '#444',
    fontSize: 12,
  },
 
  new: {color: '#666', fontSize: 14, color: '#009900', fontWeight: '600'},
  signup: {
    justifyContent: 'center',
    marginTop:180
  },
  rules:{
    flexDirection:'row'
  },
  but3: {
    // width: 300,
    // borderRadius: 30,
    // height: 50,

    justifyContent: 'center',
    alignItems: 'center',
    color: '#777',
  },
});
