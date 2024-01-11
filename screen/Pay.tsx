// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';

// const Pay = ({route}) => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [email, setEmail] = useState('');
//   const [isChecked1, setIsChecked1] = useState(false);
//   const [isChecked2, setIsChecked2] = useState(false);

//   const {formattedTotalAmount} = route.params;

//   const handleCheckbox1Press = () => {
//     setIsChecked1(true);
//     setIsChecked2(false);
//   };
//   const handleCheckbox2Press = () => {
//     setIsChecked1(false);
//     setIsChecked2(true);
//   };
//   const handlePayment = () => {
//     // Xử lý logic thanh toán ở đây
//     console.log('Tên:', name);
//     console.log('Số điện thoại:', phone);
//     console.log('Địa chỉ:', address);
//     console.log('Email:', email);
//   };

//   return (
//     <View style={{margin: 10}}>
//       <Text style={styles.text}>Thông tin nhận hàng</Text>
//       <Text style={styles.text1}>Tên:</Text>
//       <TextInput
//         style={styles.textinput}
//         placeholder="Nhập tên"
//         value={name}
//         onChangeText={text => setName(text)}
//       />

//       <Text style={styles.text1}>Số điện thoại:</Text>
//       <TextInput
//         style={styles.textinput}
//         placeholder="Nhập số điện thoại"
//         value={phone}
//         onChangeText={text => setPhone(text)}
//       />

//       <Text style={styles.text1}>Địa chỉ:</Text>
//       <TextInput
//         style={styles.textinput}
//         placeholder="Nhập địa chỉ"
//         value={address}
//         onChangeText={text => setAddress(text)}
//       />

//         <Text style={styles.text1}>Email:</Text>
//       <TextInput
//         style={styles.textinput}
//         placeholder="Nhập email"
//         value={email}
//         onChangeText={text => setEmail(text)}
//       />

//       <View style={{marginVertical: 20}}>
//         <Text style={styles.text}>Chọn phương thức thanh toán</Text>

//         <View style={{flexDirection: 'row', marginVertical: 10}}>
//           <TouchableOpacity
//             style={[styles.checkbox, isChecked1 && styles.checkedCheckbox]}
//             onPress={handleCheckbox1Press}>
//             {isChecked1 && <View style={styles.checkmark} />}
//           </TouchableOpacity>
//           <Text style={styles.label}>Thanh toán khi nhận hàng</Text>
//         </View>

//         <View style={{flexDirection: 'row'}}>
//           <TouchableOpacity
//             style={[styles.checkbox, isChecked2 && styles.checkedCheckbox]}
//             onPress={handleCheckbox2Press}>
//             {isChecked2 && <View style={styles.checkmark} />}
//           </TouchableOpacity>
//           <Text style={styles.label}>Thanh toán trực tuyến</Text>
//         </View>
//       </View>
//     <View style={styles.price}>
//       <Text style={styles.textprice}>Tổng thanh toán: {formattedTotalAmount}</Text>
//     </View>
//       <View style={{alignItems: 'center', marginTop: 10}}>
//         <TouchableOpacity style={styles.texttouch} onPress={handlePayment}>
//           <Text style={styles.text2}>Thanh toán</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 24,
//     color: '#686a70',
//     fontWeight: '700',
//   },
//   text1: {
//     color: 'black',
//     fontSize: 16,
//   },
//   textinput: {
//     borderWidth: 1,
//     borderColor: '#C8C8C8',
//     borderRadius: 5,
//   },
//   text2: {
//     marginTop: 15,
//     color: 'white',
//     fontSize: 26,
//     fontWeight: '500',
//   },
//   texttouch: {
//     borderWidth: 1,
//     borderColor: '#C8C8C8',
//     borderRadius: 5,
//     width: 180,
//     height: 62,
//     backgroundColor: '#1B5EE3',
//     alignItems: 'center',
//   },
//   checkbox: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     borderWidth: 2,
//     borderColor: 'gray',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   checkedCheckbox: {
//     // backgroundColor: 'gray',
//   },
//   checkmark: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: 'black',
//   },
//   label: {
//     fontSize: 16,
//   },
//   price:{

//     width:'75%',
//     // backgroundColor:'#ccc',
//     borderRadius: 6,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   textprice:{
//     color:'#ED7A15',
//     fontSize: 22,
//     fontWeight:'bold',
//   },
// });

// export default Pay;
import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

// import styles from './style';
import MyButton from '../components/Button/Mybutton';
// import {FlatList} from 'react-native-gesture-handler';
import {AppContext} from '../components/AppContext/AppContext';
import Header2 from '../components/Head/Header';

const Pay = ({route}: any) => {
  const {formattedTotalAmount} = route.params;
  const navigation = useNavigation();
  const {emailname} = useContext(AppContext);

  const [isPress, setIsPress] = useState(false);
  const [edit, setEdit] = useState(true);
  const [xacnhan, setXacnhan] = useState(false);
  const [hienthitien, setHienthitien] = useState(false);

  const [name, setName] = useState('');
  const [sdt, setSdt] = useState('');
  const [diachi, setDiachi] = useState('');
  const [sodon, setSodon] = useState(0);
  const [dataOrder, setDataOrder] = useState<DocumentData[]>([]);

  const [checkboxes, setCheckboxes] = useState([
    {
      id: 1,
      title: 'Thanh toán khi nhận hàng',
      checked: true,
    },
    {
      id: 2,
      title: 'Thanh toán trực tuyến',
      checked: false,
    },
  ]);

  const onButtonPress = () => {
    const selectedCheckBoxes = checkboxes.find(cb => cb.checked === true);
    if (name == '' || sdt == '' || diachi == '') {
      Alert.alert('Vui lòng điền đầy đủ thông tin');
    } else {
      setIsPress(true);
      setEdit(false);
      // setXacnhan(true);
      setXacnhan(!xacnhan);
    }
  };

  const toggleCheckbox = (id: number, index: number) => {
    const checkboxData = checkboxes.map((cb, i) => ({
      ...cb,
      checked: i === index, // Chỉ đánh dấu checkbox hiện tại là chọn, các checkbox khác sẽ bị bỏ chọn
    }));
    setCheckboxes(checkboxData);
  };
  const handleXacnhan = () => {
    // setXacnhan(!xacnhan);
    setIsPress(!isPress);
    setSodon(pre => pre + 1);
    setHienthitien(!hienthitien);
    setEdit(true);
    // na
  };

  const addOrder = async () => {
    try {
      await firestore()
        .collection('Order')
        .add({
          tennguoinhan: name,
          sodienthoai: sdt,
          diachi: diachi,
          username: emailname,
          ngaydat: firestore.Timestamp.fromDate(new Date()),
          state: 'Đang giao hàng',
          tongtien: formattedTotalAmount,
        });

      setIsPress(!isPress);
      setHienthitien(!hienthitien);
      setEdit(true);
      setName('');
      setSdt('');
      setDiachi('');
      FetchOrder();
      handleDeleteData();
      Alert.alert('thêm thành công');
    } catch (error) {
      console.log('Lỗi: ', error);
    }
  };
  const FetchOrder = async () => {
    const querySnapshot = await firestore()
      .collection('Order')
      .where('username', '==', emailname)
      .where('state', '==', 'Đang giao hàng')
      .get();

    const items = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    }));
    setDataOrder(items);
  };

  useEffect(() => {
    FetchOrder();
  }, []);

  const handleClick = () => {
    navigation.navigate('Donhang');
  };
  // const sendEmail = async (email: string, subject: string, body: string) => {
  //   try {
  //     // await auth().signInWithEmailAndPassword('YOUR_EMAIL', 'YOUR_PASSWORD');
  //     const user = auth().currentUser;

  //     if (user) {
  //       await user.sendEmailVerification();

  //       const message = {
  //         from: email,
  //         to: user.email,
  //         subject: subject,
  //         text: body
  //       };

  //       await firestore().collection('emails').add(message);

  //       console.log('Email sent successfully!');
  //     } else {
  //       console.error('User is null.');
  //     }
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //   }
  // };
  // console.log('emai: ', emailname);
  // Khi người dùng nhấn nút thanh toán

  return (
    <ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Header2
          navigation={navigation}
          source={require('../Image/book.jpg')}
          trangcon="Donhang"
          nd={
            dataOrder.length != 0 ? (
              // {sodon}
              <Text>{dataOrder.length}</Text>
            ) : (
              // <Text>0</Text>
              // 0
              '0'
            )
          }
          ht={false}
          onPress={undefined}
        />
        <Text
          style={{
            fontSize: 24,
            color: 'black',
            textAlign: 'center',
            marginBottom: 10,
            fontWeight: 'bold',
          }}>
          Thông tin nhận hàng
        </Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
            placeholder="Họ và tên"
            style={styles.input}
            value={name}
            onChangeText={text => setName(text)}
            editable={edit}
          />
          <TextInput
            keyboardType="phone-pad"
            placeholder="Số điện thoại"
            style={styles.input}
            value={sdt}
            onChangeText={text => setSdt(text)}
            editable={edit}
          />
          <TextInput
            placeholder="Địa chỉ"
            style={styles.input}
            value={diachi}
            onChangeText={text => setDiachi(text)}
            editable={edit}
          />
        </View>
        <View style={styles.tong}>
          <View style={styles.tongtien}>
            <Text style={styles.txttongtien}>Tổng tiền</Text>
            {!hienthitien ? (
              <Text style={{fontSize: 24, color: '#ED7A15'}}>
                {formattedTotalAmount} VND
              </Text>
            ) : (
              <Text>0 VND</Text>
            )}
          </View>

          <View style={{marginVertical: 16}}>
            <Text style={{fontSize: 24, color: 'black'}}>
              {' '}
              Chọn hình thức thanh toán
            </Text>
            {checkboxes.map((cb, index) => (
              <View style={{flexDirection: 'row'}} key={index}>
                <CheckBox
                  key={cb.id}
                  value={cb.checked}
                  onValueChange={() => toggleCheckbox(cb.id, index)}
                />
                <Text style={{color: 'black', fontSize: 16}}>{cb.title}</Text>
              </View>
            ))}
          </View>
        </View>
        {isPress && (
          <View style={styles.thongtin}>
            <Text
              style={{
                marginVertical: 10,
                color: '#222',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Xác nhận thông tin:
            </Text>
            <View style={styles.ten}>
              <Text
                style={[
                  styles.txtthongtin,
                  {borderRightWidth: 1, width: '38%'},
                ]}>
                Tên người nhận
              </Text>
              <Text style={styles.txtthongtin}>{name}</Text>
            </View>
            <View style={styles.ten}>
              <Text
                style={[
                  styles.txtthongtin,
                  {borderRightWidth: 1, width: '38%'},
                ]}>
                Địa chỉ{' '}
              </Text>
              <Text style={styles.txtthongtin}>{diachi}</Text>
            </View>
            <View style={styles.ten}>
              <Text
                style={[
                  styles.txtthongtin,
                  {borderRightWidth: 1, width: '38%'},
                ]}>
                Số điện thoại
              </Text>
              <Text style={styles.txtthongtin}>{sdt}</Text>
            </View>

            {/* <View style={styles.ten}>
            <Text style={[styles.txtthongtin, {borderRightWidth: 1,width:'38%'}]}>Email người nhận</Text>
            <Text style={styles.txtthongtin}>{emailname}</Text>
          </View> */}
            <View>
              <Text style={styles.txtthongtin}>
                Tổng tiền: {formattedTotalAmount} VND
              </Text>
            </View>

            <View>
              {checkboxes.map(cb => {
                if (cb.checked) {
                  return (
                    <Text
                      key={cb.id}
                      style={[
                        styles.txtthongtin,
                        {marginBottom: 5, height: 80},
                      ]}>
                      Hình thức thanh toán: {cb.title}
                    </Text>
                  );
                }
                return null;
              })}
            </View>
            <TouchableOpacity>
              <View style={styles.btnthanhtoan}>
                <Text onPress={addOrder} style={styles.textthanhtoan}>
                  Thanh toán
                </Text>
              </View>
            </TouchableOpacity>

            {/* <MyButton
              titlebtn="thanh toán"
              // onPress={()=>sendEmail(emailname, 'Thanh toán thành công', 'Cảm ơn bạn đã thanh toán!')}
              onPress={addOrder}
              // style={{width: 400, height: 180}}
            /> */}
          </View>
        )}
        {!xacnhan && <MyButton titlebtn="Xác nhận" onPress={onButtonPress} />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: 380,
    height: 50,
    borderRadius: 13,
    marginBottom: 5,
    backgroundColor: '#fff',
    paddingLeft: 10,
    borderColor: 'green',
  },

  back: {
    height: 45,
    backgroundColor: '#fff',
    width: '90%',
    justifyContent: 'center',
  },
  tong: {
    // borderWidth: 2,
    // flexDirection: 'row',
    height: 150,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginVertical: 10,
    // width: '99%',
  },
  txttongtien: {
    // textAlign: 'center',
    fontSize: 24,
    marginRight: 10,
    color: 'black',

    // borderRightWidth: 1,
    // height: '100%'
  },
  tongtien: {
    // textAlign: 'center',
    // fontSize: 18,,
    // borderRightWidth: 1,
    // height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  thongtin: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  txtthongtin: {
    fontSize: 20,
    color: 'black',
    height: 55,
    textAlign: 'center',
    // marginRight: 5,
  },
  ten: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 390,
    height: 55,
  },
  btnthanhtoan: {
    height: 68,
    backgroundColor: '#00FF00',
    width: 220,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textthanhtoan: {
    fontSize: 24,
    color: '#222',
  },
});

export default Pay;
