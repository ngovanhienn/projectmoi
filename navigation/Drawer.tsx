import {View, Text, StyleSheet, style} from 'react-native';
import React from 'react';

type DrawerProps = {
  tile: string;
};

const Drawer = ({tile}: DrawerProps) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.text1}>{tile}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'black',
  },
  text2: {
    fontSize: 16,
    color: 'blue',
  },
});
export default Drawer;
