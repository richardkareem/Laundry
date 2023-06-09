import React, { useEffect, useState } from 'react';
import { Alert, Button, ImageBackground, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import {View, StyleSheet, Text} from 'react-native';
import instance from '../config/api';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  
  const navigation = useNavigation();

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ isFalse, setisFalse] = useState(false);


    const changeScreen = ()=>{
        navigation.navigate("Register");
    }

    const  signUp = async()=>{
      try {
        
        const url = "/login";
        const body = {username:email, password:password};
        const config = { "Content-type" : "application/json" };
        const {data, status}= await instance.post(url, body, config);
        if(status === 200){
          // console.log(data.token);
          setisFalse(false);
         await AsyncStorage.setItem("token", data.token);
         const {id, role, name, alamat} = data;
         await AsyncStorage.setItem("id", id.toString());
         await AsyncStorage.setItem("role", role);
         await AsyncStorage.setItem("name", name);
         await AsyncStorage.setItem("alamat", alamat);
         navigation.navigate("Login Nav")
        }
        console.log(status);
      } catch (error) {
        console.error(error);
        setisFalse(true);
        
      }
    }
    
    // useEffect(()=>{
    //   console.log(isFalse);
    //   signUp();
    // },[])
  


    return (
        <View style={styles.background} >
          <View style={styles.inputArea}>
          <Image style={{ width:"60%", height:"30%"}} source={require("../../assets/colorLogo.png")}></Image>
          </View>
          <View style={[styles.inputArea, { bottom:100 } ] }>
            <TextInput value={email} onChangeText={setEmail} style={styles.textInput} placeholder="Email" placeholderTextColor="white" />
            <TextInput value={password}  secureTextEntry={true} onChangeText={setPassword} style={styles.textInput} placeholder="Password" placeholderTextColor="white" />
          </View>
          <View style={{ bottom:80 }}>
              <TouchableOpacity onPress={signUp} style={{ backgroundColor:"#089dfa", borderRadius:15, width:"50%", height:35, alignSelf:'center' }}>
                  <Text style={{color:'black', alignSelf:'center', fontSize:23, opacity:0.7, top:3}} >SignIn</Text>
              </TouchableOpacity>
            <Text style={[ styles.textStyle, styles.textStyle2 ]}>Dont Have Account?</Text>
          
            <TouchableOpacity onPress={changeScreen}>
              <Text style={[ styles.textStyle, styles.textStyle2 ]}>Register</Text>
            </TouchableOpacity>
            {isFalse ? (<Text style={{ color:'gold', alignSelf:'center', paddingTop:20 }} >Password salah / akun belum terdaftar </Text>): null }
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'#2768c2'
      },
      inputArea: {
        alignItems: 'center'
      },
      textInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        margin: 10,
        padding: 10,
        borderRadius: 15,
        width: '60%',
        color:'white'
      },
      button: {
        backgroundColor: 'white',
        padding: 10, 
        borderRadius: 10,
        width: '40%',
        alignSelf: 'center',
        margin: 5
      },
      textStyle: { 
        alignSelf: 'center', 
        fontSize: 15 ,
        paddingTop:10
      },
      textStyle2: {
        color: 'white',
      },
      imageStyle: {
        // alignSelf: 'flex-end',
        resizeMode: 'stretch',
        width: 150, 
        height: 150
      }
})

export default LoginScreen;
