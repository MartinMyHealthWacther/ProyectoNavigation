import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const FavoritesScreen = props => {
    console.log(props)
    return(
        <View style={styles.screen}>
            <Text>The Favorites Screen!</Text>
            <Button title="Go to Meals!" onPress={() => {}} />
        </View>
    );


};

const styles= StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',

    }
});

export default FavoritesScreen();