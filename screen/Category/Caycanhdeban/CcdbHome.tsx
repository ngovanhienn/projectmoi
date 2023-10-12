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
import Listccdb from './Listccdb';

const CcdbScreen = ({navigation}) => {
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <Drawer tile="CÂY CẢNH ĐỂ BÀN" />
      <View style={styles.container}>
        <View>
          <Listccdb navigation={navigation} />
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
});

export default CcdbScreen;
