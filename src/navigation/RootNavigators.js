import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './authStack';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
