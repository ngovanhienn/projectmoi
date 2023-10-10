import {View, Text, Button, Image, ScrollView,StyleSheet} from 'react-native';
import React from 'react';
import Header from '../Header';
import Drawer from '../../navigation/Drawer';
import Haydung from '../../navigation/Haydung';
const Chitietccvp = ({navigation}) => {
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <View>
        <Drawer tile="CÂY HƯƠNG THẢO" />
      </View>
      <View>
        <Image
          source={require('../../Image/ccdb-huongthao.jpg')}
          style={{height: 300, width: '100%', marginTop: 20}}></Image>
        <View style={{alignItems: 'center'}}>
          <Haydung tile=" Gía: 220.000đ " />
        </View>
        <View style={styles.search}>
            <Text style={styles.searchButton}>Đặt hàng</Text>
          </View>
        <View>
          <Text style={styles.text1}>Mô tả:</Text>
          <Text style={styles.text2}>Hương thảo là một cây khá quen thuộc đối với những vị đầu bếp hay người nội trợ bởi nó được xem là một gia vị không những làm tăng thêm mùi vị cho món ăn mà còn có lợi cho sức khỏe. Trong y học, cây hương thảo còn là một vị thuốc giúp giảm căng thẳng, chữa trị các bệnh như đau nhức cơ, thấp khớp,…</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 
  text1: {
    fontSize: 24,
    color: 'black',
    fontWeight: "bold",
    marginHorizontal:5
  },
  text2: {
    fontSize: 24,
    color: 'black',
    marginHorizontal:5,
  },
  search: {
    height: 60,
    width: 180,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    marginLeft:100
  },
  searchButton: {
    marginRight: 10,
    fontSize: 16,
    color: 'white',

  },
});
export default Chitietccvp;
