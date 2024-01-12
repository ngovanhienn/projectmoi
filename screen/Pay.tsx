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
