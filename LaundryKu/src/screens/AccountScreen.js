import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from "expo-image-picker"

const AccountScreen = () => {
    const navigation = useNavigation();

    const [ nama, setNama ] = useState("");
    const [ street, setStreet ] = useState("");
    const [image, setImage] = useState(null);

    //http://localhost:8080/client/updateuser/1

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        console.log(result);

        if (!result.canceled) {
        setImage(result.assets[0].uri);
        }
    };

    const clear = async() =>{
        await AsyncStorage.clear();
        navigation.navigate("Login Screen")

    }

    const getProfile = async()=>{
        const name = await AsyncStorage.getItem("name");
        setNama(name);
        const alamat = await AsyncStorage.getItem("alamat");
        console.log(alamat);
        setStreet(alamat);
    }
    
    useEffect(()=>{
        getProfile();
        console.log(street);
    },[])

    const check = async() =>{
       const id =  await AsyncStorage.getItem("id")
       const role = await AsyncStorage.getItem("role");
       const name = await AsyncStorage.getItem("name");
       console.log(id + role + name);
    //    console.log(typeof(id));
    
    }

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={pickImage}>
                <Image
                    style={styles.profilePic}
                    source={{ uri: image }}
                />
            </TouchableOpacity>
             <Text style={styles.name}>{nama}</Text>
        </View>
        <View style={styles.balanceSection}>
        <View style={styles.balance}>
            <Text style={styles.balanceLabel}>Balance:</Text>
            <Text style={styles.balanceValue}>Rp.10.000</Text>
        </View>
             <Text style={styles.address}>{street}</Text>
        </View>
        <TouchableOpacity style={styles.signOutButton} onPress={clear}>
            <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
    </View>
    );
    };

    const styles = StyleSheet.create({
        container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        paddingHorizontal: 20,
        paddingVertical: 30,
        },
        header: {
        alignItems: 'center',
        },
        profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
        backgroundColor:'#d3d3d3'
        },
        name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        },
        balanceSection: {
        marginVertical: 20,
        alignItems: 'center',
        },
        balance: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        },
        balanceLabel: {
        fontSize: 18,
        color: '#333',
        },
        balanceValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2196f3',
        marginLeft: 5,
        },
        address: {
        fontSize: 16,
        color: '#555',
        },
        signOutButton: {
        backgroundColor: '#2196f3',
        borderRadius: 25,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        },
        signOutText: {
        color: '#fff',
        fontSize: 18,
        },
    });


export default AccountScreen;
