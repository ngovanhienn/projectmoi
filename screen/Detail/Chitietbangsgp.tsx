import {View, Text, Button, Image, ScrollView,StyleSheet} from 'react-native';
import React from 'react';
import Header from '../Header';
import Drawer from '../../navigation/Drawer';
import Haydung from '../../navigation/Haydung';
const Chitietbangsgp = ({navigation}) => {
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <View>
        <Drawer tile="CÂY BÀNG SINGAPORE" />
      </View>
      <View>
        <Image
          source={require('../../Image/ccvp/bangsingapore.jpg')}
          style={{height: 300, width: '100%', marginTop: 20}}></Image>
        <View style={{alignItems: 'center'}}>
          <Haydung tile=" Gía: 530.000đ " />
        </View>
        <View style={styles.search}>
            <Text style={styles.searchButton}>Đặt hàng</Text>
          </View>
        <View>
          <Text style={styles.text1}>Mô tả:</Text>
          <Text style={styles.text2}> Cây Bàng Singapore những năm gần đây rất được ưa chuộng và sử dụng rộng rãi như một loại nội thất trang trí bởi vẻ đẹp độc đáo, sang trọng, phù hợp với nhiều kiểu thiết kế nhà ở như phong cách Minimalists, Tropical, Scandinavian cho tới các văn phòng, cửa tiệm, shop thời trang và quán cà phê...{'\n'}
          Bàng Singapore nhưng không có nguồn gốc từ Singapore. Cây Bàng Singapore mình vẫn gọi là cây bản địa rừng mưa nhiệt đới Tây Phi (Tây Cameroon đến Sierra Leone). Cây được lai tạo đầu tiên tại Singapore, về sau du nhập rộng rãi đến các nước khác nên vì thế, cây được đặt tên là Bàng Singapore.

Bàng Singapore có tên khoa học là Ficus Lyrata hay Ficus Pandurata, thuộc chi Sung (Ficus), họ Dâu Tằm (Moraceae). Tại Việt Nam, loài cây này còn được biết đến với nhiều cái tên khác nhau như Bàng Sing, Sung tỳ bà, Bàng lá to..</Text>
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
export default Chitietbangsgp;
