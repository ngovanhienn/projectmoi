import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import firebase from '../firebase/Firebase';
import firestore from '@react-native-firebase/firestore'; // Import firestore

import ChitietSP from './ChitietSp/ChitietSP';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);

  useEffect(() => {
    const collectionRef = firestore().collection('outstanding');
    const unsubscribe = collectionRef.onSnapshot(snapshot => {
      const documents = snapshot.docs.map(doc => doc.data());
      setData(documents);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleProductPress = product => {
    navigation.navigate('ChitietSP', {product});
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {data ? (
          data.map((item, index) => (
            <View style={{justifyContent: 'space-evenly'}} key={index}>
              <TouchableOpacity onPress={() => handleProductPress(item)}>
                <View>
                  <Text style={styles.text}>{item.createdAt}</Text>

                  {item.image && (
                    <Image
                      source={{uri: item.image}}
                      style={{
                        height: 140,
                        width: '98%',
                        margin: 5,
                        borderRadius: 5,
                      }}
                    />
                  )}
                  <View style={styles.dess}>
                    <Text style={styles.text}>{item.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text>Loading....</Text>
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
  dess: {
    backgroundColor: '#BBBBBB',
    borderRadius: 6,
    padding: 8,
    alignItems: 'center',
    width: 180,
    height: 60,
    justifyContent: 'center',
    marginHorizontal: 7,
  },
});

export default Cart;
