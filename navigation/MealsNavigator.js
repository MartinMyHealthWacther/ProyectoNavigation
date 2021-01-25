import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

/* import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer'; */

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';

/*const MealsNavigator = createStackNavigator ({ 
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS 'android' ? Colors.primaryColor : ''
            },
            headerTintColor: 'white',
        }
    },
    CategoryMeals: {
        screen:CategoryMealsScreen,
        navigationOptions: {
            headerStyle:{
                backgroundColor: Platform.OS 'android' ? Colors.primaryColor : ''
            },
            headerTintColor: 'white',
        }
    },
    MealDetail: MealDetailScreen,
});
*/

export default MealsNavigator;