import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';

const Exclamation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Chúng tôi đã tiến hành xây dựng APP với mục đích đem đến những giá trị
        cốt lõi và rút ngắn được thười gian tạo tác cây cảnh bằng việc sử dụng
        phương thức "mô phỏng tác phẩm trên di động"
      </Text>
      <Text style={styles.text}>
        Hy vọng sẽ mang đến những trải nghiệm tốt dành cho người dùng.
      </Text>
      <Text style={styles.text}>
        Mọi thắc mắc và hỗ trợ xin vui lòng liên hệ:
      </Text>
      <Text style={styles.text}>Hotline/Zalo: 0365.9090.21</Text>
      <View style={{alignItems:'center'}}>
            <ImageBackground
              source={require('../Image/logo.jpg')}
              style={{width: 120, height: 120}}
              imageStyle={{borderRadius: 10}}
            />
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginVertical: 10,
  },
  text: {
    marginBottom: 18,
    fontSize: 18,
    color: '#444',
  },
});

export default Exclamation;
