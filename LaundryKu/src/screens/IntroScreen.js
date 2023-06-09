import React from 'react';
import {View, StyleSheet, ImageBackground, Button, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"


const IntroScreen = ({navigation}) => {

    const signUp= ()=>{
        navigation.navigate("Register");
    }
    const signIn= ()=>{
        navigation.navigate("Login");
    }
    const tesAja= async()=>{
        const token = await AsyncStorage.getItem("token");
        console.log(token);
    }

    return (
        <ImageBackground source={{uri: "https://images.unsplash.com/photo-1541980003984-e8a9dd38025c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&w=1000&q=80"}} style={styles.background}>
            <View style={{ justifyContent:'center' }}>
                <View style={{flexDirection:'row', justifyContent:"space-around"}}>
                    <TouchableOpacity  style={styles.button} onPress={signUp}>
                        <Text style={styles.texts}>signUp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.button} onPress={signIn}>
                        <Text style={styles.texts}>SignIn</Text>
                    </TouchableOpacity>
                    <Button  title='Tes' onPress={tesAja} />
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"center"
    },
    button:{ 
        backgroundColor:"salmon", 
        width:"40%", 
        height:50,
        borderRadius:20
    },
    texts:{
        fontSize:20,
        alignSelf:'center',
        paddingTop:10
    }
})

export default IntroScreen;
