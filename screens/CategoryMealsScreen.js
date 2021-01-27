import React from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import {CATEGORIES} from '../data/dummy-data';

const CategoryMealsScreen = props => {

    const catId = props.route.params.categoryId; // <---- usamos props.route.params para rutear y obtener parametros de las Categorias del objeto categoryId y lo guardamos en catId
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId); //<---- .find metodo para mapear las CATEGORIES, guardamos resultado en selectedCategory

    return( // selectedCategory.title  -----> Se muestra el titulo de la Categoria.
        <View style={styles.screen}>
            
            <Text>{selectedCategory.title}</Text> 
            <View styles={styles.container}>
             <Button 
                title="Go Details" 
                onPress={() => {
                    props.navigation.navigate(  //<-------- .navigate Navegamos al screen MealDetailScreen
                        'MealDetails'
                    );
                }} 
            />
            <Button 
                title = "Go Back" 
                onPress={() => {
                    props.navigation.goBack(); //<------ .goback() funcion navigation para volver a anterior screen (stackNavigator)
                }}
            /> 
            </View>
        </View>
    );
};

/*CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.params('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    
    return {
        headerTitle: selectedCategory.title,
        
    };
};*/

const styles= StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
    },
    container:{
        alignItems:'center',
        margin: 5,
    }

});

export default CategoryMealsScreen;