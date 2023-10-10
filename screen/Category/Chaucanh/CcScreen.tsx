import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Header from '../../Header';
import Drawer from '../../../navigation/Drawer';

const CcScreen = ({navigation}) => {
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <Drawer tile="CHẬU CẢNH" />
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => navigation.navigate('Chitietccvp')}>
            <View>
              <Image
                source={require('../../../Image/cc/gomsu1.jpg')}
                style={styles.image1}
              />
            </View>
            <View style={styles.dess}>
              <Text style={styles.text1}>Chậu gốm xứ khảm trai</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../Image/cc/gomsubattrang1.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Chậu gốm sứ Bát Tràng</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../Image/cc/gomsubattrangto.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Chậu gốm sứ to</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../Image/cc/gomsumienglucgiac.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Chậu gốm sứ miệng lục giác</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../Image/cc/gomvandatru.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Chậu gốm vẩy dáng trụ</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../Image/cc/suhinhtru.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Chậu xứ hình trụ</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../Image/cc/ximangtron.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Chậu xi măng tròn</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../Image/cc/xudagiac.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Chậu xứ đa giác</Text>
          </View>
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
    backgroundColor: '#8B8878',
  },
  image1: {
    marginTop: 10,
    height: 186,
    width: '100%',
    borderWidth: 2,
    borderColor: '#79CDCD',
  },
  item: {
    width: '48%',
  },
  text1: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  dess: {
    backgroundColor: '#8B4513',
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FFFF33',
  },
});
export default CcScreen;
