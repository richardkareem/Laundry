import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, Button, ScrollView} from 'react-native';
import instance from '../config/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardComponent from '../component/CardComponent';
import { MaterialIcons } from '@expo/vector-icons';


const StatusScreen = () => {

    const [ transaksiUser, setTransaksiUser ] = useState([]);
    const [ transuser, setTransUser ] = useState([]);
    const [ isEmpty, setIsEmpty ] = useState(false);

    // console.log("masuk Status Screen");


    const fetchUser = async()=>{
        
        try {
            const id = await AsyncStorage.getItem("id");
            const token = await AsyncStorage.getItem("token");
            const url = `/client/alltrans/${id}`;
            const config = {headers: { Authorization: `Bearer ${token}`}}
            const {data, status} = await instance.get(url, config);
           
            if(status ===200){
       
                setTransaksiUser(data);
                setTransUser(data.transaksi);

                // kalo blom pernah transaksi
                if(data.transaksi == null) setIsEmpty(true) 
                else setIsEmpty(true)
               
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchUser();
        console.log(isEmpty);
        
    },[])

  
    
    const tes= ()=>{
   
    console.log(transuser);
  

    }

    return (
        <ScrollView style={{ flex:1}}>
           
            {isEmpty ?  transuser.map(trans =>(
             <View key={trans.idTrans} style={{
                flexDirection:'row', 
                paddingTop:20, 
                borderRadius:25, 
                width:"90%", 
                height:125 , 
                alignSelf:'center', 
                backgroundColor:"#089dfa",
                marginTop:20}} >
                <View style={{flex:1}}> 
                    <MaterialIcons name="local-laundry-service" size={80} color="black" style={{ left:5 }} />
                </View>
                <View  style={{flex:3,  }} >
                    <View>
                        <Text style={{alignSelf:'center'}} > ID: {trans.idTrans}</Text>
                        <Text style={{alignSelf:'center'}} > {trans.date}</Text>
                        {trans.daoDetailCucians.map(detail =>(
                            <Text key={detail.id + "t"} style={{alignSelf:'center'}}>{detail.status}</Text>
                        ))}
                    </View>
                </View>
               
             </View>
           ))
            : 
            <View style={{ alignSelf:'center', justifyContent:'center', }}>
                <Text style={{ fontWeight:'bold', fontSize:20 }} > Belum ada Transaksi </Text>
            </View>} 
           
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default StatusScreen;


            