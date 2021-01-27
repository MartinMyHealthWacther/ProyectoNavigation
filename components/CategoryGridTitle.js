import React from 'react';
import { TouchableOpacity , View , Text , StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const CategoryGridTitle = props => {
    var{item,navigation} = props;
        return (
            <View style={styles.gridItem}>
            <TouchableOpacity  onPress={()=>
                navigation.navigate('CategoryMeals',{
                    categoryId: item.id, // <------ creamos object categoryId y le pasamos los datos de las Categorias
                })
            }>
                <View style={{backgroundColor: item.color}}>
                    <Text style={styles.text}>{item.title}</Text> 
                </View>
            </TouchableOpacity>
            </View>
            );
};
const styles = StyleSheet.create({

    gridItem:{
        flex: 1,
        margin: 15,
        height: 140,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        justifyContent: 'center',
    },


});


export default CategoryGridTitle;