import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

export default function HomeStackRoutes () {
    return (
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Home} options={{ headerShown: false}} />
        </Stack.Navigator>
    );
}