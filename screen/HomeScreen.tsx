import React from 'react';
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Header from './Header';
import Haydung from '../navigation/Haydung';
import ListProduce from './ListProduce';
import CcdbScreen from './Category/Caycanhdeban/CcdbHome';
import Haydung2 from '../navigation/Haydung2';

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
        <TouchableOpacity onPress={() => navigation.navigate('Danhmuc')}>
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
            onPress={() => navigation.navigate('Cây cảnh để bàn')}>
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
            onPress={() => navigation.navigate('Cây cảnh văn phòng')}>
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
          <TouchableOpacity onPress={() => navigation.navigate('Sen đá')}>
            <Image style={styles.img1} source={require('../Image/senda.jpg')} />
            <View style={{alignItems: 'center'}}>
              <Text style={styles.text1}>Sen đá</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Chậu cảnh')}>
            <Image
              style={styles.img1}
              source={require('../Image/chaucanh.jpg')}
            />
            <Text style={styles.text1}>chậu cảnh</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ListProduce navigation={navigation} />
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
