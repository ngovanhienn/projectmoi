import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Dieukhoan = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Bạn chỉ có thể sử dụng dịch vụ theo các phương thức được hỗ trợ trên ứng
        dụng. Bạn có trách nhiệm kiểm tra và đảm bảo rằng bạn đã tải đúng ứng
        dụng và phiên bản tương thích dành cho thiết bị của bạn.
      </Text>
      <Text style={styles.text}>
        Chúng tôi không chịu trách nhiệm đối với việc bạn không có một thiết bị
        tương thích hoặc nếu bạn đã tải một phiên bản ứng dụng không đúng hoặc
        không tương thích dành cho thiết bị của bạn
      </Text>
      <Text style={styles.text}>
        Bạn chịu trách nhiệm cho tất cả hành vi phát sinh từ tài khoản của mình,
        và đồng ý duy trì bảo mật trên tài khoản và mật khẩu hoặc bất kỳ phương
        thức nhận dạng nào mà chúng tôi cung cấp để bạn sử dụng và tiếp cận sử
        dụng dịch vụ trong mọi trường hợp
      </Text>
      <Text style={styles.text}>
        Bạn không được ủy quyền cho bên thứ 3 sử dụng tài khoản của mình và
        không được chuyển nhượng hoặc tiến hành các hình thức khác tương tự tài
        khoản của mình cho bất kỳ cá nhân hoặc tổ chức khác.
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

export default Dieukhoan;
