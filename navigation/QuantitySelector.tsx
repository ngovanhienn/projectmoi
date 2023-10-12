import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.soluong}>
      <TouchableOpacity onPress={decreaseQuantity} style={styles.btnSL}>
        <Text style={[styles.textSL1, {fontSize: 28, color: 'black'}]}>-</Text>
      </TouchableOpacity>
      <Text style={[styles.textSL, {fontSize: 25, color: '#000'}]}>
        {quantity}
      </Text>
      <TouchableOpacity onPress={increaseQuantity} style={styles.btnSL}>
        <Text style={[styles.textSL1, {fontSize: 28, color: 'black'}]}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  soluong: {
    marginTop:20,
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
});

export default QuantitySelector;
