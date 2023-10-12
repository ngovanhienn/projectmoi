import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { database } from '../firebase/firebaseConfig';

interface SearchResult {
  text: string;
  imageUrl: string;
}

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);

  const handleSearch = () => {
    // Truy vấn dữ liệu từ Firebase Realtime Database
    const ref = database.ref('ccdb'); // Thay đổi 'your_data_path' thành đường dẫn thích hợp của bạn

    ref
      .orderByChild('text')
      .equalTo(searchText)
      .once('value', (snapshot) => {
        const data = snapshot.val();

        if (data) {
          // Lấy kết quả tìm kiếm đầu tiên
          const key = Object.keys(data)[0];
          const result = data[key] as SearchResult;
          setSearchResult(result);
        } else {
          setSearchResult(null);
        }
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Nhập từ khóa tìm kiếm"
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button title="Tìm kiếm" onPress={handleSearch} />

      {searchResult && (
        <View>
          <Text>{searchResult.text}</Text>
          <Image source={{ uri: searchResult.imageUrl }} style={{ width: 200, height: 200 }} />
        </View>
      )}
    </View>
  );
};

export default Search;