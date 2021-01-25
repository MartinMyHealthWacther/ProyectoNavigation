import React from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import {CATEGORIES} from '../data/dummy-data';

const CategoryMealsScreen = props => {
    const carId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return(
        <View style={styles.screen}>
            <Text>The Category Meals Screen!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button 
                title="Go to Details!" 
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail'
                    });
                }} 
            />
            <Button 
                title = "Go Back" 
                onPress={() => {
                    props.navigation.goBack();
                }}
            />
        </View>
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    navigationData.navigaion.getParam('categoryId');
    
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    
    return {
        headerTitle: selectedCategory.title,
        
    };
};

const styles= StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',

    }
});

export default CategoryMealsScreen();