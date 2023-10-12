// import React from 'react';
// import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

// const ChitietSP = ({route}) => {
//   const {product} = route.params;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>{product.text}</Text>
//       <Text style={styles.text}>{product.gia} VNĐ</Text>
//       {product.imageUrl && (
//         <Image
//           source={{uri: product.imageUrl}}
//           style={{width: 200, height: 200}}
//         />
//       )}
//       <View style={{backgroundColor: '#CCFF99', marginHorizontal: 10}}>
//         <ScrollView>

//             <Text style={styles.text2}>{product.mota} </Text>

//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#B0E0E6',
//   },
//   text2: {
//     fontSize: 18,
//     color: '#333333',
//   },
//   text: {
//     fontSize: 20,
//     color: 'black',
//   },
// });

// export default ChitietSP;
import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import QuantitySelector from '../navigation/QuantitySelector';


const ChitietSP = ({route}) => {
  const {product} = route.params;

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View>
          {product.imageUrl && (
            <Image
              source={{uri: product.imageUrl}}
              style={{width: 160, height: 200}}
            />
          )}
        </View>
        <View style={{marginLeft: 10, alignItems: 'center'}}>
          <View>
            <Text style={styles.nametree}>{product.text}</Text>
          </View>
          <View>
            <Text style={styles.text}>{product.gia} VNĐ</Text>
          </View>
          <View>
            <QuantitySelector />
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 16}}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 200,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius:10
          }}>
          <Text style={{fontWeight:'bold',color:'black',fontSize:20}}> Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text2}>{product.mota}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0E0E6',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#CCFF99',
    marginTop: 10,
  },
  text2: {
    fontSize: 18,
    color: '#333333',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  nametree: {
    fontSize: 20,
    flexWrap: 'wrap',
    color: '#B22222',
    fontWeight: 'bold',
  },
});

export default ChitietSP;
