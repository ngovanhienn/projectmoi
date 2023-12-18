import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const Signin = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signUpTestFn = () => {
    auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        Alert.alert('Đăng nhập thành công');
        navigation.navigate('Home');
      })
      .catch(err => {
        console.log(err);
        Alert.alert('vui lòng đăng nhập lại');
      });
  };
  const handleFacebookLogin = () => {};

  return (
    <View style={styles.container}>
      <View style={{justifyContent:'center'}}>

      <View>
        <ImageBackground source={require('../../Image/senda3.jpg')} style={styles.logo} />
      </View>

      <View style={styles.title1}>
        <View>
          <Text style={styles.title}>Đăng nhập</Text>
        </View>

        <TextInput
          style={styles.input1}
          placeholder="user name"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input1}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
        <View style={{marginLeft:238,marginTop:10,}}>
          <TouchableOpacity >
            <Text style={styles.new}>Quên mật khẩu</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.but1} onPress={signUpTestFn}>
            <Text style={styles.but4}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.orText}></Text>

        <View style={styles.signup}>
          <TouchableOpacity style={styles.but3}>
            <Text style={styles.but5}>Chưa có tài khoản?</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate('Signup')} style={styles.but3}>
            <Text style={styles.new}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: 'white',
      alignItems: 'flex-start',
  },
  logo: {
    width: 400,
    height: 200,
    resizeMode: 'stretch',
  },
  title1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#303636',
    fontSize: 28,
  },
  input1: {
    height: 50,
    width: 350,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
  },
  input: {
    height: 50,
    width: '80%',
    marginTop: 30,

    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
  },
  but1: {
    width: 300,
    borderRadius: 30,
    height: 50,
    // margin: 20,
    marginLeft:50,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33CC00',
    color: 'white',
    borderColor:'#777',
    borderWidth:1
  },
  but3: {
    // width: 300,
    // borderRadius: 30,
    // height: 50,
    // margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    color: '#777',
    // borderWidth: 0.3,
    // borderColor: 'red',
  },
  but2: {
    color: 'white',
    fontSize: 20,
  },
  but4: {
    color: 'white',
    fontSize: 20,
  },
  but5:{
    color:'#444',
    fontSize:18
  },

  signup:{
    flexDirection:'row',
    justifyContent:'center'
  },
  new:{color:'#666',fontSize:18,color:'#EEAD0E',fontWeight:'600'},
  orText: {
    marginVertical: 30,
    textAlign: 'center',
    fontSize: 21,
  },
});

export default Signin;
