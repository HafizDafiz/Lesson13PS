import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home.js";
import Years from "./Years.js";
import RoomTypes from "./RoomTypes.js";
import Details from "./Details.js"
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer >
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Years' component={Years} />
                <Stack.Screen name='RoomTypes' component={RoomTypes} />
                <Stack.Screen name='Details' component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
