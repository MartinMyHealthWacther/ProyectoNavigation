import React, { useState } from 'react';
import { StyleSheet , ScrollView , View , Text , StatusBar ,} from 'react-native';
//import * as Font from 'expo-font';
//import { AppLoading } from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import MealsNavigator from './navigation/MealsNavigator';
import Colors from './constants/Colors';

export default function App(){
  return (
    <NavigationContainer>
      <MealsNavigator />
    </NavigationContainer>
      
  );
};

const styles = StyleSheet.create({
  screen:{
    padding:50,
    fontSize:90,
    alignContent:'center',
  }
});


