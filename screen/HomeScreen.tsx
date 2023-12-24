import React from 'react';
import {View, Text, Image, ImageBackground, StyleSheet,ScrollView, TouchableOpacity} from 'react-native';

import Header from './Header';
import Haydung from '../navigation/Haydung';
import Cart from './Cart';
import Category from './Category/Category';
import ListProduce from './ListProduce';
import CcdbScreen from './Category/Caycanhdeban/CcdbHome';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View>
          <Haydung tile="Danh mục" />
        </View>
        
        <TouchableOpacity 
        
        onPress={() => navigation.navigate('Category')}
        >
          <View>
            <Text style={{fontSize: 16, color: 'blue'}}>xem thêm</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 16,
        }}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Category')}>
            <Image
              style={styles.img1}
              source={require('../Image/ccvp-edb.jpg')}
            />
            <View style={{alignItems: 'center'}}>
              <Text style={styles.text1}>Cây cảnh</Text>
              <Text style={styles.text1}>để bàn</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Category')}>
            <Image
              style={styles.img1}
              source={require('../Image/ccvp.2.jpg')}
            />
            <View style={{alignItems: 'center'}}>
              <Text style={styles.text1}>Cây cảnh</Text>
              <Text style={styles.text1}>văn phòng</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Category')}>
            <Image style={styles.img1} source={require('../Image/senda.jpg')} />
            <View style={{alignItems: 'center'}}>
              <Text style={styles.text1}>Sen đá</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Category')}>
            <Image
              style={styles.img1}
              source={require('../Image/chaucanh.jpg')}
            />
            <Text style={styles.text1}>chậu cảnh</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Haydung tile="Sản phẩm nổi bật" />
      {/* <ListProduce navigation={navigation} /> */}
      <Cart navigation={navigation} />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 18,
    color: 'green',
  },
  img1: {
    width: 80,
    height: 80,
  },
});

export default HomeScreen;
