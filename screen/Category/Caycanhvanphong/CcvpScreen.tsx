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

// const CcvpScreen = ({navigation}) => {
//   return (
//     <ScrollView>
//       <Header navigation={navigation} />
//       <Drawer tile="CÂY CẢNH VĂN PHÒNG" />
//       <View style={styles.container}>
//         <View style={styles.item}>
//           <TouchableOpacity onPress={() => navigation.navigate('chitietbangsgp')}>
//             <View>
//               <Image
//                 source={require('../../../Image/ccvp/bangsingapore.jpg')}
//                 style={styles.image1}
//               />
//             </View>
//             <View style={styles.dess}>
//               <Text style={styles.text1}>Cây bàng Singapore</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/ccvp/chuoithiendieu.jpg')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>Cây chuối thiên điểu</Text>
//           </View>
//         </View>

//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/ccvp/daiphugia.jpg')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>Cây đại phú gia</Text>
//           </View>
//         </View>
//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/ccvp/kimtien.jpg')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>Cây kim tiền</Text>
//           </View>
//         </View>
//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/ccvp/luoiho.jpg')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>Cây lưỡi hổ</Text>
//           </View>
//         </View>
//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/ccvp/thietmoclan.jpg')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>Cây thiết mộc lan</Text>
//           </View>
//         </View>
//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/ccvp/traubadotbien.jpg')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>Cây trầu bà đột biến</Text>
//           </View>
//         </View>
//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/ccvp/trucbachhop.webp')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>Cây trúc bách hợp</Text>
//           </View>
//         </View>
//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/ccvp/trucmay.jpg')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>trúc mây</Text>
//           </View>
//         </View>
//         <View style={styles.item}>
//           <View>
//             <Image
//               source={require('../../../Image/ccvp/phuquy.jpg')}
//               style={styles.image1}></Image>
//           </View>
//           <View style={styles.dess}>
//             <Text style={styles.text1}>Cây phú quý</Text>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     flexWrap: 'wrap',
//     backgroundColor: '#B9D3EE',
//   },
//   image1: {
//     marginTop: 10,
//     height: 186,
//     width: '100%',
//     borderWidth: 2,
//     borderColor: '#FF6600',
//   },
//   item: {
//     width: '48%',
//   },
//   text1: {
//     fontSize: 18,
//     color: 'black',
//     textAlign: 'center',
//   },
//   dess: {
//     backgroundColor: '#FFFF33',
//     paddingVertical: 8,
//     borderRadius: 6,
//     borderWidth: 1,
//     borderColor: '#FFCC00',
//   },
// });

// export default CcvpScreen;
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

import Listccvp from './Listccvp';

const CcvpScreen = ({navigation}) => {
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <Drawer tile="CÂY CẢNH VĂN PHÒNG" />
      <View style={styles.container}>
        <View>
          <Listccvp navigation={navigation} />
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
    backgroundColor: '#B9D3EE',
  },
  image1: {
    marginTop: 10,
    height: 186,
    width: '100%',
    borderWidth: 2,
    borderColor: '#FF6600',
  },
  item: {
    width: '48%',
  },
  text1: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  dess: {
    backgroundColor: '#FFFF33',
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FFCC00',
  },
});

export default CcvpScreen;
