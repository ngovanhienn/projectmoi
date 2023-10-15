// import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
// import Drawer from '../navigation/Drawer';
// import React, { useState } from 'react';
// import { CheckBox } from 'react-native-elements'
// import QuantitySelector from '../navigation/QuantitySelector';
// import Navigation from '../Navigation';
// import { useNavigation } from '@react-navigation/native';
// const CartProduct = ({route}) => {
//   const navigation = useNavigation();
//   const {product} = route.params;
//   const [isChecked, setIsChecked] = useState(false);
//   return (
//     <View>
//       <View style={{height: 60, width: '100%', backgroundColor: '#00B2EE'}}>
//         <Text
//           style={{
//             textAlign: 'center',
//             marginTop: 10,
//             fontSize: 30,
//             // fontWeight:,
//             color: 'white',
//           }}>
//           {' '}
//           GIỎ HÀNG
//         </Text>
//       </View>
//       <ScrollView>
//         <View style={{flexDirection:'row', marginTop:20,marginLeft:5}}>
//         <CheckBox
//             checked={isChecked}
//             onPress={() => setIsChecked(!isChecked)}
//           />
//           <View>
//             <Image
//               source={{uri: product.imageUrl}}
//               style={{width: 100, height: 100}}
//             />
//           </View>
//           <View style={{alignItems:'center'}}>
//             <Text style={{marginLeft:10, fontSize:23,color:'black'}}>{product.text}</Text>
//             <Text style={{color:'red', marginTop:20,fontSize:20}}>{product.gia} VNĐ</Text>

//           </View>

//         </View>

//       </ScrollView>
//       <TouchableOpacity style={{alignItems:'center', marginTop:40}} onPress={() => navigation.navigate('Pay')}>

//        <View style={{height:68, width:140,backgroundColor:'red',borderRadius:8,justifyContent:'center',}}>

//          <Text style={{textAlign:'center', color:'white',fontSize:26}}>Mua hàng</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default CartProduct;

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
// import firebase from '../../../firebase/Firebase';
import {useNavigation} from '@react-navigation/native';
import firebase from '../firebase/Firebase';
import Drawer from '../navigation/Drawer';
const CartProduct = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    // Lắng nghe các thay đổi đối với thông tin sản phẩm trong giỏ hàng
    firebase
      .database()
      .ref('giohangcaycanh')
      .on('value', snapshot => {
        const cartData = snapshot.val();
        const products = [];

        if (cartData) {
          for (const key in cartData) {
            products.push(cartData[key]);
          }
        }

        setProducts(products);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Drawer tile="GIỎ HÀNG" />
      <ScrollView>
        {products.map((product, index) => (
          <View key={index} style={styles.product}>
            <Image source={{uri: product.imageUrl}} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{product.name}</Text>
              <Text style={styles.price}>{product.price} VNĐ</Text>
              <Text style={styles.quantity}>x{product.quantity}</Text>
              <Text>______________________________________</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.total}>
        <Text style={styles.totalText}>Tổng tiền:</Text>
        <Text style={styles.totalText}>
          {products.reduce(
            (total, product) => total + product.price * product.quantity,
            0,
          )}{' '}
          VNĐ
        </Text>
      </View>
      <View style={styles.thanhtoan}>
        <TouchableOpacity
          onPress={() =>
            Alert.alert('Thanh toán thành công', 'Cảm ơn bạn đã đặt hàng', [
              {text: 'Cancel'},
              {
                text: 'OK',
                onPress: () => navigation.navigate('Home'),
                style: 'default',
              },
            ])
          }>
          <Text style={styles.totalText2}>Thanh Toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  product: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  info: {
    marginLeft: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black'
  },
  price: {
    fontSize: 18,
    color:'red'
  },
  quantity: {
    fontSize: 18,
    color:'black'
  },
  total: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  thanhtoan: {
    backgroundColor: 'orange',
    width: '50%',
    height: 60,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  totalText2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CartProduct;
