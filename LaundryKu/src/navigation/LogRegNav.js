import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import IntroScreen from '../screens/IntroScreen';
import HomeTabNavigation from './HomeTabNavigation';

const LogRegNav = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
          
                <Stack.Screen name='Intro' component={IntroScreen} />
                <Stack.Screen  name='Login' component={LoginScreen} />
                <Stack.Screen  name='Register' component={RegisterScreen} />
                <Stack.Screen name="Main Menu" component={HomeTabNavigation} />
            
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default LogRegNav;
