import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screen/HomeScreen';
import MovieScreen from '../Screen/MovieScreen';
import PersonScreen from '../Screen/PersonScreen';

const stack = createNativeStackNavigator();
const Appnavigation = () => {
  return (
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen options={{headerShown: false}} name='Home' component={HomeScreen} />
            <stack.Screen options={{headerShown: false}} name='Movie' component={MovieScreen} />
            <stack.Screen options={{headerShown: false}} name='Person' component={PersonScreen} />
        </stack.Navigator>
    </NavigationContainer>
  )
}

export default Appnavigation