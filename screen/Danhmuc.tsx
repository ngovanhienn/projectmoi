import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Header from './Header';
import Drawer from '../navigation/Drawer';

const Danhmuc = ({navigation}) => {
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <Drawer tile="DANH MỤC" />
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Cây cảnh để bàn')}>
            <View>
              <Image
                source={require('../Image/ccvp-edb.jpg')}
                style={styles.image1}
              />
            </View>
            <View style={styles.dess}>
              <Text style={styles.text1}>Cây cảnh để bàn</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Cây cảnh văn phòng')}>
            <View>
              <Image
                source={require('../Image/ccvp.2.jpg')}
                style={styles.image1}></Image>
            </View>
            <View style={styles.dess}>
              <Text style={styles.text1}>Cây cảnh văn phòng</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <TouchableOpacity onPress={() => navigation.navigate('Sen đá')}>
            <View>
              <Image
                source={require('../Image/senda.jpg')}
                style={styles.image1}></Image>
            </View>
            <View style={styles.dess}>
              <Text style={styles.text1}>Sen đá</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => navigation.navigate('Chậu cảnh')}>
            <View>
              <Image
                source={require('../Image/chaucanh.jpg')}
                style={styles.image1}></Image>
            </View>
            <View style={styles.dess}>
              <Text style={styles.text1}>Chậu cảnh</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => navigation.navigate('Phanbon')}>
            <View>
              <Image
                source={require('../Image/phanbon/anhnen.jpg')}
                style={styles.image1}></Image>
            </View>
            <View style={styles.dess}>
              <Text style={styles.text1}>Phân bón</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => navigation.navigate('Dattrong')}>
            <View>
              <Image
                source={require('../Image/dattrong/anhnen.jpg')}
                style={styles.image1}></Image>
            </View>
            <View style={styles.dess}>
              <Text style={styles.text1}>Đất trồng</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => navigation.navigate('Dungcu')}>
            <View>
              <Image
                source={require('../Image/dattrong/anhnen.jpg')}
                style={styles.image1}></Image>
            </View>
            <View style={styles.dess}>
              <Text style={styles.text1}>Dụng cụ làm vườn</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    backgroundColor: '#00FF33',
  },
  image1: {
    marginTop: 20,
    height: 140,
    width: '100%',
    borderWidth: 2,
    borderColor: '#FF9900',
  },
  item: {
    width: '45%',
  },
  text1: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
  dess: {
    backgroundColor: '#99FFCC',
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#FF9900',
  },
});

export default Danhmuc;
