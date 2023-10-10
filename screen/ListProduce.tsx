import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import menu from '../data/Datahome';
import Haydung from '../navigation/Haydung';
import popular from '../data/Popular';
// import {TouchableOpacity} from 'react-native-gesture-handler';

const ListProduce = ({navigation}) => {
  return (
    <View style={{marginTop: 10}}>
      <Haydung tile="Sản phẩm nổi bật" />
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => navigation.navigate('Chitietccvp')}>
            <View>
              <Image
                source={require('../Image/ccdb-huongthao.jpg')}
                style={styles.image1}
              />
            </View>
            <View style={styles.dess}>
              <Text style={styles.text1}>Cây hương thảo</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../Image/senda5.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Cây sen đá hồng phấn</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View>
            <Image
              source={require('../Image/senda2.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Cây sen đá hồng cổ thụ</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../Image/senda3.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Cây xương rồng tai thỏ</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../Image/kimnganxoan.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Cây kim ngân xoắn</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../Image/tailoc.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Cây tài lộc</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../Image/tungbonglai.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Cây tùng bồng lai</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../Image/senda6.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Cây sen đá hoa cúc</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../Image/hoanhai.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>cây hoa nhài</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../Image/vannientung.jpg')}
              style={styles.image1}></Image>
          </View>
          <View style={styles.dess}>
            <Text style={styles.text1}>Cây vạn niên tùng</Text>
          </View>
        </View>
      </View>
      {/* <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {menu.map((e, i) => (
            <TouchableOpacity
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48%',
                height: 115,
                marginBottom: 20,
              }}
              key={i}>
              <ImageBackground
                style={{
                  width: '100%',
                  height: 120,
                  resizeMode: 'contain',
                  position: 'absolute',
                }}
                source={e.image}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{position: 'absolute', color: '#fff'}}>
                    {e.name}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  image1: {
    marginTop: 20,
    height: 140,
    width: '100%',
  },
  item: {
    width: '45%',
  },
  text1: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  dess: {
    backgroundColor: 'green',
    paddingVertical: 8,
    borderRadius: 6,
  },
});
export default ListProduce;
