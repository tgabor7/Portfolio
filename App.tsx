import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { createStackNavigator, HeaderStyleInterpolators, StackNavigationOptions, TransitionSpecs } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContactScreen from './components/ContactScreen';
import Header from './components/Header';
import MainScreen from './components/MainScreen';

export default function App() {

  return (<>
    <MainScreen />
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
