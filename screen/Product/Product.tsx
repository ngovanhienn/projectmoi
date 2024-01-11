import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  TextInput,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {DocumentData} from 'firebase/firestore';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

// import { AppContext } from '../../component/AppContext/AppContext';
const Product= ({route}: any) => {
  // const {productId, setProductId} = useContext(AppContext);
  const {name} = route.params;
  const navigation = useNavigation();
  // const [products, setProducts] = useState([]);
  const [products, setProducts] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  // const [lastDocId, setLastDocId] = useState(null);
  const [lastDocId, setLastDocId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState('');

  const fetchData = async () => {
    try {
      setLoading(true);

      const snapshot = await firestore()
        .collection('Product')
        .where('category', '==', name)
        .orderBy(firestore.FieldPath.documentId())
        .limit(8)
        .get();

      const items = snapshot.docs.map(doc => ({
        ...doc.data(),
        key: doc.id,
      }));

      setProducts(items);
      setLastDocId(snapshot.docs[snapshot.docs.length - 1].id);
      setHasMore(items.length >= 8);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  // const testproduct = products.map((product, index)=>console.log('Product: ', product.key))
  useEffect(() => {
    fetchData();
    console.log('category:', name);
    console.log(products)
  }, [name]);

  const loadMoreData = async () => {
    if (loading || !hasMore) return;

    try {
      setLoading(true);

      const snapshot = await firestore()
        .collection('Product')
        .where('category', '==', name)
        .orderBy(firestore.FieldPath.documentId())
        .startAfter(lastDocId)
        .limit(8)
        .get();

      const newItems = snapshot.docs.map(doc => doc.data());

      if (newItems.length > 0) {
        setProducts(prevProducts => [...prevProducts, ...newItems]);
        setLastDocId(snapshot.docs[snapshot.docs.length - 1].id);
        setHasMore(newItems.length >= 8);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading more products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleProductPress = (product: any) => {
    navigation.navigate('ChitietSP', {product});
  };
  const filterProducts = (keyword: string) => {
    const filteredProducts = products.filter(item =>
      item.name.toLowerCase().includes(keyword.toLowerCase()),
    );
    return filteredProducts;
  };
  const filteredProducts = filterProducts(searchText);

  const renderProductItem = ({item}) => (

    <View>
      <TouchableOpacity
        style={styles.productContainer}
        onPress={() => handleProductPress(item)}>
        <Image source={{uri: item.image}} style={styles.productImage} />
        <View style={styles.productInfo}>

          <Text style={styles.productName}>{item.name}</Text>
          {/* {item.giamgia != 0 && (
            <View style={styles.giamgia}>
              <Text style={[styles.gia, {color: 'red', fontSize: 18}]}>
                Giảm{' '}
              </Text>

              <Text style={[styles.gia, {color: 'red', fontSize: 18}]}>
                {item.giamgia}%
              </Text>
            </View>
          )} */}
          {item.giamgia != 0 ? (
            <View>
              <View style={styles.hiengia}>
                <Text style={styles.productPrice}>Giá gốc: </Text>
                <Text style={styles.gia}>{parseFloat(item.giagoc).toLocaleString()} đ</Text>
              </View>
              <View style={styles.hiengia}>
                <Text style={styles.productPrice}>Giảm còn: </Text>
                <Text style={styles.productPrice2}>
                  {item.price.toLocaleString()} đ
                </Text>
              </View>
            </View>
          ) : (
            <View>
              <Text style={[styles.productPrice, {fontSize: 22}]}>
                Giá: {item.price.toLocaleString()} đ
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderLoadMoreButton = () => {
    if (!hasMore) return null;

    return (
      <TouchableOpacity onPress={loadMoreData} disabled={loading}>
        {loading ? (
          <ActivityIndicator />
        ) : (
        //   <Text>Load more</Text>
          <ActivityIndicator size="large" />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{marginBottom: 50}}>
      <View style={styles.timkiem}>
        <TextInput
          value={searchText}
          onChangeText={text => setSearchText(text)}
          placeholder="Tìm sản phẩm..."
          style={styles.inputtimkiem}
        />
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={item => item.name.toString()}
        ListFooterComponent={renderLoadMoreButton}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default Product;