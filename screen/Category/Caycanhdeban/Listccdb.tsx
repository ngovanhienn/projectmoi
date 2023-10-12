// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import firebase from '../../../firebase/Firebase';

// const Listccdb = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const ref = firebase.database().ref('ccdb');

//     ref.on('value', snapshot => {
//       const data = snapshot.val();
//       setData(data);
//     });

//     return () => {
//       ref.off();
//     };
//   }, []);

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         {data ? (
//           Object.keys(data).map(key => (
//             <View
//               style={{justifyContent: 'space-evenly'}}>
//               <TouchableOpacity>
//                 <View style={{marginTop:8}}>
//                   <View key={key}>
//                     {/* <Text style={styles.text}>{data[key].createdAt}</Text> */}

//                     {data[key].imageUrl && (
//                       <Image
//                         source={{uri: data[key].imageUrl}}
//                         style={{height: 180, width: '100%',borderRadius:8}}
//                       />
//                     )}
//                     <View style={styles.dess}>
//                       <Text style={styles.text}>{data[key].text}</Text>
//                       <View style={styles.bodertext}>
//                         <Text style={styles.text2}>{data[key].gia} VNĐ</Text>
//                       </View>
//                     </View>
//                   </View>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           ))
//         ) : (
//           <Text>Loading...</Text>
//         )}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginBottom:10
//   },
//   text: {
//     fontSize: 20,
//     color: '#009933',
//     textAlign: 'center',
//   },
//   text2:{
//     color:'red',
//     fontSize:20,
//     borderTopWidth:1,
//     borderColor:'black'
//   },
//   bodertext:{

//   },
//   dess: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 6,
//     padding: 8,
//     alignItems: 'center',
//     width: 180,
//     height: 80,
//     justifyContent: 'center',
//     marginHorizontal: 7,
//   },
// });

// export default Listccdb;
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../../firebase/Firebase';
import ChitietSP from '../../ChitietSP';

const Listccdb = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);

  useEffect(() => {
    const ref = firebase.database().ref('ccdb');

    ref.on('value', snapshot => {
      const data = snapshot.val();
      setData(data);
    });

    return () => {
      ref.off();
    };
  }, []);

  const handleProductPress = product => {
    navigation.navigate('ChitietSP', {product});
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {data ? (
          Object.keys(data).map(key => (
            <View style={{justifyContent: 'space-evenly'}} key={key}>
              <TouchableOpacity onPress={() => handleProductPress(data[key])}>
                <View style={{marginTop: 8}}>
                  {/* <Text style={styles.text}>{data[key].createdAt}</Text> */}

                  {data[key].imageUrl && (
                    <Image
                      source={{uri: data[key].imageUrl}}
                      style={{
                        height: 180,
                        width: '100%',
                        borderRadius: 8,
                        // borderRadius: 8,
                        borderWidth: 1,
                        borderColor: 'green',
                      }}
                    />
                  )}
                  <View style={styles.dess}>
                    <Text style={styles.text}>{data[key].text}</Text>
                    <View style={styles.bodertext}>
                      <Text style={styles.text2}>{data[key].gia} VNĐ</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    color: '#009933',
    textAlign: 'center',
  },
  text2: {
    color: 'red',
    fontSize: 20,
    borderTopWidth: 1,
    borderColor: 'black',
  },
  bodertext: {},
  dess: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    padding: 8,
    alignItems: 'center',
    width: 180,
    height: 80,
    justifyContent: 'center',
    marginHorizontal: 7,
  },
});

export default Listccdb;
