import React, { useState } from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
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
      <View style={styles.title1}>
        <Text style={styles.title}>Tạo tài khoản mới</Text>
      </View>

      <View>
        {/* <TextInput
          style={styles.input1}
          placeholder="Full Name"
          // value={email}
          // onChangeText={setEmail}
        />
        <TextInput
          style={styles.input1}
          placeholder="Phone Number"
          // value={email}
          // onChangeText={setEmail}
        /> */}
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
          <Text style={styles.but2}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    color: '#20C065',
    fontSize: 24,
    marginBottom: 100,
    paddingRight: 180,
  },
  title1: {
    marginTop: 10,
  },
  input1: {
    height: 50,
    width: 370,
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
  },

  but1: {
    width: 210,
    borderRadius: 30,
    height: 50,
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20C065',
    marginBottom: 130,
    color: 'white',
  },
  but2: {
    color: 'white',
    fontSize: 20,
  },
});
