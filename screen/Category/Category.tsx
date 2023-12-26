import React, {useEffect, useState, createContext} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {DocumentData} from 'firebase/firestore';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {useNavigation} from '@react-navigation/native';
// import {MainStackParamList} from '../types/RootList';
import styles from './style';
// const CategoryContext = createContext(null);
const CategoryContext = createContext<(categoryname: any) => void>(() => {});

const Category = () => {
  const navigation = useNavigation();
  const [data, setData] = useState<DocumentData[]>([]);
  // const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      // Lấy dữ liệu từ Firestore
      const snapshot = await firestore().collection('Category').get();
      const items = snapshot.docs.map(doc => doc.data());
      setData(items);
    };

    fetchData();
  }, []);

  const handleCategoryPress = (name: any) => {
    navigation.navigate('Product', {name: name});
  };
  const renderDataItem = ({item}: any) => (
    <TouchableOpacity
      style={styles.category}
      onPress={() => handleCategoryPress(item.name)}>
      <Text style={styles.catetitle}>Danh Mục</Text>
      <Image
        source={{uri: item.imageUrl}}
        style={{
          width: '100%',
          height: 200,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      />
      <View style={styles.catebottom}>
        <Text style={styles.catename}>{item.name}</Text>
        {/* <Text style={styles.cateinfo}>Có nhiều loại cho các bạn lựa chọn</Text> */}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <CategoryContext.Provider value={handleCategoryPress}>
        <FlatList
          data={data}
          renderItem={renderDataItem}
          keyExtractor={item => item.name}
        />
      </CategoryContext.Provider>
    </View>
  );
};

export default Category;
