import React from 'react';  
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

 import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer'; 

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
//import Colors from '../constants/Colors';

const Stack = createStackNavigator ();

const MealsNavigator = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            
        </Stack.Navigator>
    );
}
//<Stack.Screen name="Categorymeals" component={CategoryMealsScreen} />
//<Stack.Screen name="Mealdetails" component={MealDetailScreen} /> }
export default MealsNavigator;