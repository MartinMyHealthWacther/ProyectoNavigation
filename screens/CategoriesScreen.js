import React from 'react';
import {View , Text , Button , FlatList , StyleSheet, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {CATEGORIES} from '../data/dummy-data';
//import Colors from '../constants/colors';



export default CategoriesScreen = (props) => {
    const {navigation} = props;

    const renderGridItem = (itemdata, navigation) => {
        return (
        <TouchableOpacity 
            style={styles.gridItem} 
            onPress={() => {
            navigation.navigate({ 
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
        renderItem={(itemdata)=>renderGridItem(itemdata, navigation)} 
        numColumns={2} 
        />
        
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
        margin: 40,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'

    }
});