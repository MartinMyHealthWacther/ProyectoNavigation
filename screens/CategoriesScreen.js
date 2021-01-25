import React from 'react';
import {View , Text , Button , FlatList , StyleSheet, TouchableOpacity} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/colors';



const CategoriesScreen = props => {

    const renderGridItem = (itemdata) => {
        return (
        <TouchableOpacity 
            style={styles.gridItem} 
            onPress={() => {
            props.navigation.navigate({
                routeName:'CategoryMeals',
                params:{
                categoryId: itemdata.item.id
                } 
            });
            }}
        >
            <View>
                <Text>{itemdata.item.title}</Text>
            </View>
        </TouchableOpacity>
        );
    };
    
    return(
        <FlatList 
        keyExtractor={(item,index) => item.id}
        data={CATEGORIES} 
        renderItem={renderGridItem} 
        numColumns={2} />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    
};

const styles= StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
    },
    gridItem:{
        flex: 1,
        margin: 15,
        height: 150,
    }
});

export default CategoriesScreen();