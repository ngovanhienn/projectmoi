import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import QuantitySelector from '../navigation/QuantitySelector';
import {useNavigation} from '@react-navigation/native';
// import firebase from '../../../firebase/Firebase';
import firebase from '../firebase/Firebase';

const ChitietSP = ({route}) => {
  const {product} = route.params;
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    const cartItem = {
      imageUrl: product.imageUrl,
      name: product.text,
      quantity: quantity,
      price: product.gia,
      totalPrice: product.gia * quantity,
    };

    // Add cartItem to Firebase Realtime Database
    firebase
      .database()
      .ref('giohangcaycanh')
      .push(cartItem)
      .then(() => {
        Alert.alert('Sản phẩm đã thêm vào giỏ hàng');
      });
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View>
          {product.imageUrl && (
            <Image
              source={{uri: product.imageUrl}}
              style={{width: 160, height: 200}}
            />
          )}
        </View>
        <View style={{marginLeft: 10}}>
          <View>
            <Text style={styles.nametree}>{product.text}</Text>
          </View>
          <View>
            <Text style={styles.text}>{product.gia} VNĐ</Text>
          </View>

          {/* <QuantitySelector /> */}
          <View style={styles.soluong}>
            <TouchableOpacity onPress={decreaseQuantity} style={styles.btnSL}>
              <Text style={[styles.textSL1, {fontSize: 28, color: 'black'}]}>
                -
              </Text>
            </TouchableOpacity>
            <Text style={[styles.textSL, {fontSize: 25, color: '#000'}]}>
              {quantity}
            </Text>
            <TouchableOpacity onPress={increaseQuantity} style={styles.btnSL}>
              <Text style={[styles.textSL1, {fontSize: 28, color: 'black'}]}>
                +
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={addToCart} style={styles.addToCartButton}>
            <Text style={{color: 'black'}}>Thêm vào giỏ hàng</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.text2}>{product.mota}</Text>
        <Text style={styles.text2}>
          __________________________________________
        </Text>
        <Text style={styles.text2}>
          ----------------------------------------------------------------------
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0E0E6',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#CCFF99',
    marginTop: 10,
  },
  text2: {
    fontSize: 18,
    color: '#808000',
    marginHorizontal: 10,
    textAlign: 'justify',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  nametree: {
    fontSize: 20,
    flexWrap: 'wrap',
    color: '#B22222',
    fontWeight: 'bold',
  },
  soluong: {
    marginTop: 20,
    width: '70%',
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textSL: {
    textAlign: 'center',
    color: '#000',
    fontWeight: '800',

    width: '30%',
    height: 50,
    paddingTop: 8,
  },
  textSL1: {
    textAlign: 'center',
    color: '#000',
    fontWeight: '800',
    width: 40,
    height: 50,
    paddingTop: 8,
  },
  btnSL: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    width: 50,
    backgroundColor: 'white',
  },
  addToCartButton: {
    height: 50,
    width: 200,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default ChitietSP;
