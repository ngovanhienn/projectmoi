

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
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import firebase from '../firebase/Firebase';
import Drawer from '../navigation/Drawer';
const CartProduct = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    
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
      <View style={{flexDirection:'row'}}> 
      <Drawer tile="GIỎ HÀNG" />
      <Ionicons name="cart" size={32} style={{margin:10}} />
      
      </View>
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
          onPress={ () => navigation.navigate('Pay')
          
            
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
