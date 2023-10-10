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

const DtHome = ({navigation}) => {
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <Drawer tile="DỤNG CỤ CHĂM SÓC" />
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => navigation.navigate('Chitietccvp')}>
            <View>
              <Image
                source={require('../../../Image/dungcu/keocatcanh.jpg')}
                style={styles.image1}
              />
            </View>
            <View style={styles.dess}>
              <Text style={styles.text1}>Kéo cắt tỉa cành cây</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../Image/dungcu/binhxitcay.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Bình tưới cây</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image1: {
    marginTop: 20,
    height: 350,
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
  },
  item: {
    width: '90%',
    //   height:'100%'
  },
  text1: {
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dess: {
    backgroundColor: 'white',
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default DtHome;
