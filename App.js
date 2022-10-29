import React from 'react';

import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {colors} from './src/global/styles';
//import {AuthStack} from './src/navigation/authStack';
import RootNavigator, {RootNavigators} from './src/navigation/RootNavigators';
import SingInScreen from './src/screens/authScreens/SignInScreen';

import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
      <RootNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
