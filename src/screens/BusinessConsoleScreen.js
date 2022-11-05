import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Pressable,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import {Icon} from '@rneui/themed';

export default function BusinessConsoleScreen() {
  return (
    <View>
      <Text>Wellcome to Business Console</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
