import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const MealDetailScreen = props => {
    console.log(props)
    return(
        <View style={styles.screen}>
            <Text>The Meal Detail Screen!</Text>
            <Button title="Go Back to Categories!" onPress={() => {
                props.navigation.popToTop();
            }} />
        </View>
    );


};

const styles= StyleSheet.create ({
    screen:{
        flex: 1,
        justifyContent: 'center',

    }
});

export default MealDetailScreen();