import {View, Text, ScrollView, Image} from 'react-native';
import Drawer from '../navigation/Drawer';
import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements' 
import QuantitySelector from '../navigation/QuantitySelector';

const CartProduct = ({route}) => {
  const {product} = route.params;
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View>
      <View style={{height: 60, width: '100%', backgroundColor: '#00B2EE'}}>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            fontSize: 30,
            // fontWeight:,
            color: 'white',
          }}>
          {' '}
          GIỎ HÀNG
        </Text>
      </View>
      <ScrollView>
        <View style={{flexDirection:'row', marginTop:20,marginLeft:5}}>
        <CheckBox
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
          />
          <View>
            <Image
              source={{uri: product.imageUrl}}
              style={{width: 100, height: 100}}
            />
          </View>
          <View style={{alignItems:'center'}}>
            <Text style={{marginLeft:10, fontSize:23,color:'black'}}>{product.text}</Text>
            <Text style={{color:'red', marginTop:20,fontSize:20}}>{product.gia} VNĐ</Text>
            <View>
            <QuantitySelector />
            </View>
          </View>
         
        </View>
      </ScrollView>
    </View>
  );
};

export default CartProduct;
