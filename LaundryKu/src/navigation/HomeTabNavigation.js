import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from '../screens/HomeScreen';

import { FontAwesome, AntDesign } from '@expo/vector-icons';
import AccountScreen from '../screens/AccountScreen';
import StatusScreen from '../screens/StatusScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const HomeTabNavigation = ({route}) => {

   const data = route.params;


    const Tab = createBottomTabNavigator();
    

    return (
        <Tab.Navigator screenOptions={{unmountOnBlur: true}}>
            <Tab.Screen 
                name='Home' 
                 component={HomeScreen}
                 initialParams={data}
                //  initialParams={ {email: username} } 
                // children={()=> <HomeScreen /> }
                options={{
                    tabBarLabel:'Home',
                    headerShown:true,
                    tabBarIcon: ({ color, size, focused }) => <FontAwesome name="television" size={24} color="black" />
                }}
            />
            <Tab.Screen 
                name='Transaksi' 
                component={StatusScreen}
                
                options={{
                    tabBarLabel:'Transaction',
                    headerShown:true,
                    tabBarIcon: ({ color, size, focused }) => <AntDesign name="meh" size={24} color="black" />
                }}
            />
             <Tab.Screen 
                name='Profile' 
                component={AccountScreen}
                options={{
                    tabBarLabel:'Profile',
                    headerShown:true,
                    unmountOnBlur:false,
                    tabBarIcon: ({ color, size, focused }) => <MaterialCommunityIcons name="account" size={24} color="black" />
                }}
            />
            
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default HomeTabNavigation;
