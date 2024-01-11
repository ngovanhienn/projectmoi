import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Baomat = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {' '}
        Chính sách này được sử dụng để thông báo cho quý khách truy cập về các
        quy định của công ty chúng tôi với việc thu thập, sử dụng, tiết lộ thông
        tin cá nhân nếu bất kỳ ai quyết định sử dụng dịch vụ của chúng tôi.
      </Text>
      <Text style={styles.text}>
        Nếu bạn chọn sử dụng dịch vụ của chúng tôi, nghĩa là bạn đồng ý việc thu
        thập và sử dụng thông tin liên quan đến chính sách này. Thông tin cá
        nhân mà chúng tôi thu thập được sử dụng để cung cấp và cải thiện dịch
        vụ.
      </Text>
      <Text style={styles.text}>
        Chúng tôi cam kết sẽ không sử dụng hoặc chia sẻ thông tin của bạn với
        bất kỳ ai ngoại trừ người sử dụng được mô tả trong chính sách bảo mật
        này.
      </Text>
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
export default Baomat;
