/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Register from "./Register"
import Welcome from "./Welcome"
import Tabs from "./Tab"
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
const App = () => {

  return (
  
    <Tabs/>
  
  );
};

const styles = StyleSheet.create({

});

export default App;
