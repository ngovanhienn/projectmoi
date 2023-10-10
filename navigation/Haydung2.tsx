import {View, Text, StyleSheet, style} from 'react-native';
import React from 'react';

type Haydung2Props = {
  tile: string;
};

const Haydung2 = ({tile}: Haydung2Props) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.text2}> {tile}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
//   item: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
  text1: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red',
  },
  text2: {
    fontSize: 16,
    color: 'blue',
  },
});
export default Haydung2;
