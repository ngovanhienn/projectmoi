// import { View } from "react-native"

// const Header = ()=> {
//     return(
//         <View></View>
//     )
// }
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
// import { Ionicons } from "@expo/vector-icons";

export default function Header({navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        // marginBottom: ,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        // marginTop:30,
      }}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        {/* <Ionicons
                    name='chevron-back'
                    size={37}>
                </Ionicons> */}
        <Text style={{fontSize: 18, color: '#000',marginLeft:10}}>Trở lại</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('CartProduct')}>
       
        <Image
          source={require('../../Image/cart.png')}
          style={{width: 40, height: 40}}
        />
      </TouchableOpacity>

      {/* <Text style={{ alignItems: 'center' }}>{title}</Text> */}
      <Text style={{width: 50}}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    height: 45,
    backgroundColor: '#fff',
    width: '90%',
    justifyContent: 'center',
    // alignItems: 'center',
  },
});
