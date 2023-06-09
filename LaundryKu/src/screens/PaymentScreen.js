import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, Button, Alert, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import instance from '../config/api';


const PaymentScreen = ({route}) => {

    const {date, pilihan_kurir, type, weight}= route.params;

    
    const [ pay, setPay ] = useState(0);
    const [ statusAwal, setStatusAwal ] = useState("")
    const [ balance, setBalance ] = useState(1000000);
    
    
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'IDR',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

    let total = 0;
    let word = "";

    const hitungTotal = ()=>{
        const convert = weight.match(/\d+/)[0];
        const kiloan =   8000;
        const jaskurir = 2000;
         
        if(pilihan_kurir === true){
           total = (parseInt(convert)*kiloan)+jaskurir;
            setPay(total);

            
        }else{
            total = (parseInt(convert)*kiloan);
            setPay(total);   

        }

       
    }

    const proses = ()=>{
        if(pilihan_kurir === true){
            word = "Sedang Menjemput Baju";
            setStatusAwal(word);
        }else{
            word = "Sedang Diproses Laundry";
            setStatusAwal(word);
        }
    }
    

    useEffect(()=>{
        hitungTotal();
        proses();  
    },[])



    const transaksi = async ()=>{
        try {
            const token = await AsyncStorage.getItem("token");
            const id = await AsyncStorage.getItem("id");
            const url = `/client/trans/${parseInt(id)}`;
            const dataJson = {
                date: date, 
                pilihan_kurir: pilihan_kurir, 
                detail_cucian:[{
                    pembayaran: pay,
                    status: statusAwal,
                    jenis_barang:type,
                    berat_barang:weight,
                }] };

            const { data, status } = await instance.post(url, dataJson,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            if (status === 201 && balance>= pay){
                setBalance(currbalance =>{
                    return (currbalance-pay)
                })
                Alert.alert("berhasil")
            }else{
                Alert.alert("Saldo Tidak Cukup")
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
          <Text style={styles.text}>Total Cost:{formatter.format(pay)}</Text>
          <Text style={styles.text}>Your Balance:{formatter.format(balance)}</Text>
          <TouchableOpacity style={styles.button} onPress={transaksi}>
            <Text style={styles.buttonText}>Pay</Text>
          </TouchableOpacity>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#089dfa',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: 'white',
        fontSize: 18,
        marginVertical: 10,
      },
      button: {
        backgroundColor: '#0a4da4',
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20,
        elevation: 3,
        marginBottom: 20,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
      },

    });




export default PaymentScreen;
