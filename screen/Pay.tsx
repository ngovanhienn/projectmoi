import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Pay = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] =useState('');
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckbox1Press = () => {
    setIsChecked1(true);
    setIsChecked2(false);
  };
  const handleCheckbox2Press = () => {
    setIsChecked1(false);
    setIsChecked2(true);
  };
  const handlePayment = () => {
    // Xử lý logic thanh toán ở đây
    console.log('Tên:', name);
    console.log('Số điện thoại:', phone);
    console.log('Địa chỉ:', address);
    console.log('Email:', email);
  };

  return (
    <View style={{margin: 10}}>
      <Text style={styles.text}>Thông tin nhận hàng</Text>
      <Text style={styles.text1}>Tên:</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Nhập tên"
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text style={styles.text1}>Số điện thoại:</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Nhập số điện thoại"
        value={phone}
        onChangeText={text => setPhone(text)}
      />

      <Text style={styles.text1}>Địa chỉ:</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Nhập địa chỉ"
        value={address}
        onChangeText={text => setAddress(text)}
      />

        <Text style={styles.text1}>Email:</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Nhập email"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <View style={{marginVertical: 20}}>
        <Text style={styles.text}>Chọn phương thức thanh toán</Text>

        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <TouchableOpacity
            style={[styles.checkbox, isChecked1 && styles.checkedCheckbox]}
            onPress={handleCheckbox1Press}>
            {isChecked1 && <View style={styles.checkmark} />}
          </TouchableOpacity>
          <Text style={styles.label}>Thanh toán khi nhận hàng</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={[styles.checkbox, isChecked2 && styles.checkedCheckbox]}
            onPress={handleCheckbox2Press}>
            {isChecked2 && <View style={styles.checkmark} />}
          </TouchableOpacity>
          <Text style={styles.label}>Thanh toán trực tuyến</Text>
        </View>
      </View>

      <View style={{alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity style={styles.texttouch} onPress={handlePayment}>
          <Text style={styles.text2}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: '#686a70',
    fontWeight: '700',
  },
  text1: {
    color: 'black',
    fontSize: 16,
  },
  textinput: {
    borderWidth: 1,
    borderColor: '#C8C8C8',
    borderRadius: 5,
  },
  text2: {
    marginTop: 15,
    color: 'white',
    fontSize: 26,
    fontWeight: '500',
  },
  texttouch: {
    borderWidth: 1,
    borderColor: '#C8C8C8',
    borderRadius: 5,
    width: 180,
    height: 62,
    backgroundColor: '#1B5EE3',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkedCheckbox: {
    // backgroundColor: 'gray',
  },
  checkmark: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'black',
  },
  label: {
    fontSize: 16,
  },
});

export default Pay;
