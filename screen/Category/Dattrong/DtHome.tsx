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
      <Drawer tile="Đất trồng" />
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => navigation.navigate('Chitietccvp')}>
            <View>
              <Image
                source={require('../../../Image/dattrong/giathe.jpg')}
                style={styles.image1}
              />
            </View>
            <View style={styles.dess}>
              <Text style={styles.text1}>
                Đất trồng giá thể trộn sẵn-SOIL MIX
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../Image/dattrong/tribat.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Đất sạch tribat</Text>
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
