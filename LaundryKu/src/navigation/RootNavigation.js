import React, { useEffect, useState } from 'react';
import {View, StyleSheet} from 'react-native';
import { createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AsyncStorage from "@react-native-async-storage/async-storage"
import HomeScreen from '../screens/HomeScreen';
import IntroScreen from '../screens/IntroScreen';
import HomeTabNavigation from './HomeTabNavigation';
import LogRegNav from './LogRegNav';
import TransactionScreen from '../screens/TransactionScreen';
import PaymentScreen from '../screens/PaymentScreen';

const RootNavigation = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [balance, setBalance ] = useState(1000000);

    const Stack = createStackNavigator();

    const checkisLogin = async()=>{
        try {
            const token = await AsyncStorage.getItem("token");
            if(token){
                AsyncStorage.getItem("token");
                setIsLogin(true);
            }else{
                console.log("dont have account");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        checkisLogin();
        console.log(isLogin);
    }, [isLogin])

    return (
      <NavigationContainer>
       <Stack.Navigator screenOptions={{ headerShown:false }}  >
       {!isLogin ? <Stack.Screen name='Login' component={LoginScreen}  /> : null }
       <Stack.Screen name= "Login Nav" component={ HomeTabNavigation } />
       <Stack.Screen name='Transaction' component={TransactionScreen} options={{headerShown:true}} />
       <Stack.Screen name='Register' component={RegisterScreen} />
       <Stack.Screen name='Login Screen' component={LoginScreen} />
       <Stack.Screen name="Payment" component={PaymentScreen}   options={{headerShown:true,
    balance:balance}} />
       {/* <Stack.Screen name="LoginRegisterNav" component={LogRegNav} />    */}
       
        
        
       </Stack.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default RootNavigation;
