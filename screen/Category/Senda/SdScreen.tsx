// import React from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import Header from '../../Header';
// import Drawer from '../../../navigation/Drawer';

// const SdScreen = ({navigation}) => {
//   return (
//     <ScrollView>
//       <Header navigation={navigation} />
//       <Drawer tile="SEN ĐÁ" />
//       <View style={styles.container}>
//         <View style={styles.item}>
//           <TouchableOpacity onPress={() => navigation.navigate('Chitietccvp')}>
//             <View>
//               <Image
//                 source={require('../../../Image/sd/daquangtrang.jpg')}
//                 style={styles.image1}
//               />
//             </View>
//             <View style={styles.dess}>
//               <Text style={styles.text1}>Sen đá dạ quang trằng</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/senda5.jpg')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>Sen đá hồng phấn</Text>
//           </View>
//         </View>

//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/senda2.jpg')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>Sen đá hồng cổ thụ</Text>
//           </View>
//         </View>
//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/senda3.jpg')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>Xương rồng tai thỏ</Text>
//           </View>
//         </View>
//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/sd/cuctim.jpg')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>Cây sen đá cúc tím</Text>
//           </View>
//         </View>
//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/sd/dolahong.jpg')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>Sen đá đô la hồng</Text>
//           </View>
//         </View>
//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/sd/dolatrang.jpg')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>Sen đá đô la trắng </Text>
//           </View>
//         </View>
//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/sd/latim.jpg')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>Sen đá lá tim</Text>
//           </View>
//         </View>
//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/sd/ngocguoc.jpg')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>Sen đá ngọc guốc</Text>
//           </View>
//         </View>
//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/sd/nhungvienden.jpg')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>Sen đá nhung viền đen</Text>
//           </View>
//         </View>
//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/sd/nhungviendo.jpg')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>Sen đá nhung viền đỏ</Text>
//           </View>
//         </View>
//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/sd/phatba.jpg')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>Sen đá phật bà</Text>
//           </View>
//         </View>
//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/sd/thachngoc.jpg')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>Sen đá thạch ngọc</Text>
//           </View>
//         </View>
//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/sd/tuphuong.jpg')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>Sen đá tứ phương</Text>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   )
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     flexWrap: 'wrap',
//     backgroundColor:'#BEBEBE'
//   },
//   image1: {
//     marginTop: 10,
//     height: 166,
//     width: '100%',
//     borderWidth:1,
//     borderColor:"#4169E1"
//   },
//   item: {
//     width: '48%',
//   },
//   text1: {
//     fontSize: 16,
//     color: 'black',
//     textAlign: 'center',
//   },
//   dess: {
//     backgroundColor: '#EED8AE',
//     paddingVertical: 8,
//     borderRadius: 6,
//     borderWidth:1,
//     borderColor:'#FF0000',
//   },
// });
// export default SdScreen

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
import Listsd from './Listsd';

const SdScreen = ({navigation}) => {
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <Drawer tile="SEN ĐÁ" />
      <View style={styles.container}>
        <View>
          <Listsd navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    backgroundColor:'#BEBEBE'
  },
  image1: {
    marginTop: 10,
    height: 166,
    width: '100%',
    borderWidth:1,
    borderColor:"#4169E1"
  },
  item: {
    width: '48%',
  },
  text1: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  dess: {
    backgroundColor: '#EED8AE',
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth:1,
    borderColor:'#FF0000',
  },
});
export default SdScreen