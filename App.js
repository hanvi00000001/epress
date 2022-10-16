import React from 'react';

import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Header from './src/components/Header';
import {colors} from './src/global/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Statusbar barStyle="light-content" backgroundColor={colors.statusbar} />
      <Header title="Mu ACIIUH" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
