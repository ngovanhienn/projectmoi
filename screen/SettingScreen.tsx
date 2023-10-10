import React from 'react';
import { View, Button } from 'react-native';

const SettingScreen = ({ navigation }) => {
  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <Button title="Go to Home" onPress={goToHomeScreen} />
    </View>
  );
};

export default SettingScreen;