import React from 'react';
import { View, Text, ScrollView,Image, TouchableOpacity,StyleSheet} from 'react-native';
import HomeScreen from '../../HomeScreen';
import Header from '../../Header';
import Drawer from '../../../navigation/Drawer';

const PbHome = ({navigation}) => {
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <Drawer tile="Phân bón"/>
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => navigation.navigate('Chitietccvp')}>
            <View>
              <Image
                source={require('../../../Image/phanbon/phanhuuco.jpg')}
                style={styles.image1}
              />
            </View>
            <View style={styles.dess}>
              <Text style={styles.text1}>Phân bón hữu cơ</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../Image/phanbon/sinhhoa.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Phân bón sinh hóa</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../Image/phanbon/visinh.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Phân bón vi sinh</Text>
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
  },
  image1: {
    marginTop: 10,
    height: 220,
    width: '100%',
    borderWidth:2,
    borderColor:'black',
  },
  item: {
    width: '45%',
  },
  text1: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  dess: {
    backgroundColor: 'black',
    paddingVertical: 8,
    borderRadius: 6,
  },
});

export default PbHome;