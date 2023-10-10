import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import Header from '../Head';
// import styles from './styles';
import Header from '../screen/Header';
import popular from '../data/Popular';

const Chitietsp = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();

  const handleDathangPress = () => {
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.chitietsp}>
      <Header navigation={navigation} />
      <View>
        <Image source={item.image} style={styles.img} />
        
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>{item.content}</Text>
        <Text style={styles.text1}>COOKIES</Text>
        <Text style={styles.text2}>15 phút</Text>
      </View>
      <View style={styles.nguyenlieu}>
        <TouchableOpacity onPress={handleDathangPress}>
          <Text style={styles.txtnl}>Đặt hàng</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{marginBottom: 320}}>
        <View>
          <Text style={styles.noidung}>
            --Start with cleaned and peeled russet potatoes that you have cut
            into 3/8-inch match sticks. Place in bowl of very cold water: keep
            rinsing and changing the water until the water is clear; drain
            thoroughly and dry with paper towels or a clean lint-free kitchen
            towel.{'\n'} -- Meanwhile, you preheat your hot oil to 350 degrees
            F. Place prepared taters in oil and cook about 5 minutes. They will
            have that blond-tone color to them. {'\n'}-- Note: Once you add cold
            potatoes to the hot oil, the temperature of your oil is going to
            drop - you want it to be somewhere between 330 - 325 degrees F.{' '}
            {'\n'} -- Remove from oil; drain and cool. Now - either refrigerate
            until ready to finish cooking, or cool completely and freeze up to 3
            months. To freeze properly - place completely cooled fries in single
            layer on tray and place in freezer until frozen. Then bag them.
            {'\n'} -- To finish cooking - preheat your oil to 400* F. Add your
            cold fries (which will drop the oil temp - which is fine because you
            want it near the 375 degrees F. temp) and cook a few minutes until
            done. Lightly salt them and shake well so that the salt distributes
            well and they are not salty.
          </Text>
        </View>
        <View style={styles.nguyenlieu}>
          <TouchableOpacity>
            <Text style={styles.txtnl}>Xem nguyên liệu</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Chitietsp;


const styles = StyleSheet.create({
    chitietsp: {
    //   backgroundColor: '#fff',
      marginTop: 10,
    },
    img: {
      width: '100%',
      height: 150,
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
  
      //backgroundColor: '#000',
      height: 110,
    },
    title: {
      fontSize: 28,
      color: '#000',
    },
    text1: {
      fontSize: 18,
      color: '#50d79b',
      fontWeight: '700',
      marginHorizontal: 20,
    },
    text2: {
      fontSize: 18,
      color: '#000',
      fontWeight: '700',
    },
    nguyenlieu: {
      width: '95%',
      height: 40,
      borderColor: 'green',
      borderWidth: 1,
      borderRadius: 20,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
    },
    txtnl: {
      fontSize: 18,
      color: 'white',
      // textAlign: 'center',
    },
    noidungText: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    noidung: {
      color: '#000',
      fontSize: 17,
      marginLeft: 20,
    },
  });