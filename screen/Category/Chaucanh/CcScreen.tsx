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
import Listcc from './Listcc';

const CcScreen = ({navigation}) => {
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <Drawer tile="CHẬU CẢNH" />
      <View style={styles.container}>
        <View>  
         <Listcc navigation={navigation} />
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
