import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, SafeAreaView, TextInput, Button, TouchableOpacity, Alert, Platform} from 'react-native';
import DatePicker from "react-native-date-picker"
import instance from '../config/api';
import { Checkbox } from "react-native-paper"
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

//date
import DateTimePicker from '@react-native-community/datetimepicker';

const TransactionScreen = () => {
    const navigation = useNavigation();
    
    // bikin date
    const [date, setDate] = useState("");
    

    const dateNow = new Date();

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
      }

    const year = dateNow.getFullYear();
    const month = padTo2Digits(dateNow.getMonth()+ 1);
    const day = padTo2Digits(dateNow.getDate());

    const withHyphens = [year, month, day].join('-');

    console.log(date);   

    const [ payment, setPayment ] = useState("");
    const [ statusLaundry, setStatusLaundry ] = useState("");
    const [ type, setType ] = useState("");
    const [ weight, setWeight ] = useState("");


    const [ checked, setChecked ]= useState(false);


    //   const tes = "30kg".match(/\d+/)[0];
    //   console.log("HASIL DARI TES");
    //   console.log(tes);

    const checkBox = ()=>{
       if (checked === false){
        setChecked (true);
       }else{
        setChecked(false)
       }
    } 

    const gotoPay= ()=>{
        if(type === "0"){
            Alert.alert("Data Harus Diisi")
        }else{
            navigation.navigate("Payment", {
                type:type,
                date:withHyphens,
                pilihan_kurir: checked,
                weight:weight
            })
        }
      

    }

 



    return (
//         <SafeAreaView style={{ flex:1, justifyContent:'center'}}>
//             <View style={styles.container}>
//                 {/* Date */}
//                 {/* <TextInput 
//                 onChangeText={setDate}
//                 value={date}
//                 placeholder='Date'
//                 keyboardType='numeric'
//                 style={styles.formDate}
//                 /> */}
//                 {/* <Button onPress={showDatepicker} title="Show date picker!" />
//                 {show && (
//                     <DateTimePicker
//                     testID="dateTimePicker"
//                     value={date}
//                     mode={mode}
//                     is24Hour={true}
//                     onChange={onChange}
//                     />
//                 )} */}
//                 {/* Pembayaran */}
//                 {/* <TextInput 
//                 onChangeText={setPayment}
//                 value={payment}
//                 placeholder='Pembayaran'
//                 keyboardType='numeric'
//                 style={styles.formDate}
//                 /> */}
            
//                 {/* <TextInput 
//                 onChangeText={setStatusLaundry}
//                 value={statusLaundry}
//                 placeholder='Status'
//                 style={styles.formDate}
//                 /> */}

//                 <TextInput 
//                 onChangeText={setType}
//                 value={type}
//                 placeholder='Jenis Barang'
//                 style={styles.formDate}
//                 />

//                 <TextInput 
//                 onChangeText={setWeight}
//                 value={weight}
//                 placeholder='Berat Barang'
//                 style={styles.formDate}
//                 />

//                 <View style={{flexDirection:'row', alignSelf:'center', padding:20 }} >
//                 <Text style={{paddingRight:10, fontWeight:"bold", top:5}}>Menggunakan Kurir</Text>
//                     <TouchableOpacity style={styles.checkbox} onPress={checkBox} value={checked}>
//                     {checked ?   <AntDesign name="check" size={24} color="black" /> : null  }
//                     </TouchableOpacity>
                    
//                 </View>
//                 <Button title='Lanjut Ke Pembayaran' onPress={gotoPay} />
//             </View>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     formDate:{
//         width:"60%",
//         height:45,
//         borderRadius:30,
//         backgroundColor:"gold",
//         alignSelf:'center',
//         marginTop:10,
//         paddingLeft:20
//     },
//     container:{
//         justifyContent:'center'
//     },
//     checkbox:{
//         width:25,
//         height:25,
//         backgroundColor:"gold",
//         borderRadius:4,
//     }
<View style={{ flex: 1, backgroundColor: '#089dfa', paddingHorizontal: 20, paddingVertical: 30 }}>
<Text style={{ color: 'white', fontSize: 20, marginBottom: 20 }}>Transaksi Baru</Text>
<View style={{ flexDirection: 'column', marginBottom: 20 }}>
  <TextInput
    style={{ backgroundColor: 'white', borderRadius: 10, height: 50, paddingHorizontal: 10, marginBottom: 10 }}
    placeholder="Jenis Barang"
    onChangeText={setStatusLaundry}
    value={statusLaundry}
  />
  <TextInput
    style={{ backgroundColor: 'white', borderRadius: 10, height: 50, paddingHorizontal: 10 }}
    placeholder="Berat Barang"
    onChangeText={setWeight}
    value={weight}
  />
</View>
<TouchableOpacity
  style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}
  onPress={checkBox}
>

  <View
    style={{
      width: 20,
      height: 20,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: 'white',
      marginRight: 10,
      backgroundColor: checked? '#089dfa' : 'white'
    }}
  /> 
  <Text style={{ color: 'white' }}>Menggunakan Kurir?</Text>
    </TouchableOpacity>

    <TouchableOpacity
  onPress={gotoPay}
  style={{
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }}
  
>
  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#089dfa' }}>Lanjut Ke Pembayaran</Text>
</TouchableOpacity>
</View>
);
};  

export default TransactionScreen;
