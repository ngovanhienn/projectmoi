import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import HomeScreen from '../../HomeScreen';
import Header from '../../Header';
import Drawer from '../../../navigation/Drawer';

const CcdbScreen = ({navigation}) => {
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <Drawer tile="CÂY CẢNH ĐỂ BÀN" />
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity >
            <View>
              <Image
                source={require('../../../Image/ccdb/binhan.jpg')}
                style={styles.image1}
              />
            </View>
            <View style={styles.dess}>
              <Text style={styles.text1}>Cây bình an</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../Image/ccdb/kimnganthuysinh.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Cây kim ngân thủy sinh</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../Image/ccdb/lany.png')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Cây lan Italya</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../Image/ccdb/ngugiabi.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Cây ngũ gia bì</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../Image/ccdb/truongsinh.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Cây trường sinh</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../Image/ccdb/tungthom.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Cây tùng thơm</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../Image/tungbonglai.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Cây tùng bồng lai</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../Image/ccdb/tungxuongca.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Cây tùng xương cá</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../Image/ccdb/vanloc.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Cây vạn lộc</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../Image/ccdb/xanhcamthach.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Cây xanh cẩm thạch</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../Image/ccdb/xuongrongthanhson.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Cây xương rồng cẩm thạch</Text>
          </View>
        </View>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => navigation.navigate('Chitietccvp') }>

          <View>
            <Image
              source={require('../../../Image/ccdb-huongthao.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Cây hương thảo</Text>
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
    backgroundColor: '#663300',
  },
  image1: {
    marginTop: 10,
    height: 186,
    width: '100%',
    borderWidth: 2,
    borderColor: '#99FFFF',
  },
  item: {
    width: '48%',
  },
  text1: {
    fontSize: 18,
    color: '#E0FFFF',
    textAlign: 'center',
  },
  dess: {
    backgroundColor: '#8B8878',
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FFFF33',
  },
});

export default CcdbScreen;
