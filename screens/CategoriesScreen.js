import React from 'react';
import {View , Text , Button , FlatList , StyleSheet, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {CATEGORIES} from '../data/dummy-data';

import CategoryGridTitle from '../components/CategoryGridTitle';


const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return( 
            <CategoryGridTitle
                item = {itemData.item}
                navigation={props.navigation}
            />
        );
    };
    
    return( 
        <FlatList
        keyExtractor={(item,index) => item.id}
        data={CATEGORIES} 
        renderItem={renderGridItem} //{(itemdata)=>renderGridItem(itemdata, navigation)} 
        numColumns={2} 
        />
        );
          
    
};

const styles= StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
    },
    gridItem:{
        flex: 1,
        margin: 15,
        height: 140,
        justifyContent: 'center',
        alignItems: 'center'

    }
});

export default CategoriesScreen;