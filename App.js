import React, { useState } from 'react';
import { StyleSheet , ScrollView , View , Text , StatusBar ,} from 'react-native';
//import * as Font from 'expo-font';
//import { AppLoading } from 'expo-app-loading';

import MealsNavigator from './navigation/MealsNavigator';





export default function App(){
  return (
    <MealsNavigator />
      
  );
};

const styles = StyleSheet.create({
  screen:{
    padding:50,
    fontSize:90,
    alignContent:'center',
  }
});


