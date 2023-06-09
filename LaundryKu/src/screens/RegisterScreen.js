import React, { useState } from 'react';
import { Alert, Button, Image, ImageBackground, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import {View, StyleSheet, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import instance from '../config/api';

const RegisterScreen = () => {

    const [ email ,setEmail ] = useState('');
    const [ password ,setPassword ] = useState('');
    const [ alamat ,setalamat ] = useState('');
    const [ nama ,setNama ] = useState('');
    const [ role ,setRole ] = useState('Client');

    const navigation = useNavigation();

  


    const signUp = async() =>{
      
        try {
          const url = "/register";
          const body = {username:email, password:password, name:nama, alamat:alamat, role:role};
          const config = { "Content-type" : "application/json" };
          const {data, status}= await instance.post(url, body, config);

          if(status === 200){
            Alert.alert("Berhasil Membuat Akun");
            navigation.navigate("Login Screen")
          }

        } catch (error) {
           console.log(error);
        }
       
    }

    const changeScreen = ()=>{
        navigation.navigate("Login Screen")
        
    }
    return (
        <View style={styles.background} >
        <View style={styles.inputArea}>
          <Image style={{ width:"60%", height:"30%"}} source={require("../../assets/colorLogo.png")}/>
        </View>
        <View style={[styles.inputArea, { bottom:100 } ]}>
          <TextInput value={nama} onChangeText={setNama} style={styles.textInput} placeholder="Nama" placeholderTextColor="white" />
          <TextInput value={alamat} onChangeText={setalamat} style={styles.textInput} placeholder="alamat" placeholderTextColor="white" />
          <TextInput value={email} onChangeText={setEmail} style={styles.textInput} placeholder="Email" placeholderTextColor="white" />
          <TextInput value={password} secureTextEntry={true} onChangeText={setPassword} style={styles.textInput} placeholder="Password" placeholderTextColor="white" />
        </View>

        <View style={{bottom:80}}>
          <TouchableOpacity onPress={signUp} style={{ backgroundColor:"#089dfa", borderRadius:15, width:"50%", height:35, alignSelf:'center' }}>
              <Text style={{color:'black', alignSelf:'center', fontSize:23, opacity:0.7, top:3}} >SignUp</Text>
          </TouchableOpacity>
          
          <Text style={[ styles.textStyle, styles.textStyle2 ]}>Already Have Account?</Text>
          <TouchableOpacity onPress={changeScreen}>
            <Text style={[ styles.textStyle, styles.textStyle2 ]}>Login</Text>
          </TouchableOpacity>
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

export default RegisterScreen;
