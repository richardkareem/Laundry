import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({route, navigation}) => {

    const [ roleUser, setRoleUser ] = useState("");

    const data = route.params;
   
    console.log(data);

   

    const userAsync = async() =>{
        await AsyncStorage.getItem("role");
        
    }

    console.log();
    useEffect(()=>{
        userAsync;
    },[])

//     console.log(roleUser);

//     return (
//         <View style={styles.wrapper}>
//             <View style={styles.container}>
//                 <TouchableOpacity onPress={()=> navigation.navigate("Transaction", data) }>
//                     <Text>
//                         Pesan Laundry
//                     </Text>
//                 </TouchableOpacity>
                
//             </View>
            
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     wrapper:{
//         justifyContent:'center',
//         // 
//         flex:1,
//         backgroundColor:'#089dfa',
//     }
//     ,container:{
//         width:"80%",
//         height:"40%",
//         borderRadius:15,
//         backgroundColor:"gold",
//         alignSelf:'center',
//         alignItems:'center',
//         justifyContent:'center'
        
//     }
// })

return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Laundry App</Text>
      <Text style={styles.subtitle}>Let's start your laundry order</Text>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Transaction", data) } >
        <Text style={styles.buttonText}>Order Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#089dfa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 40,
  },
  button: {
    backgroundColor: 'linear-gradient(90deg, #094c9a, #073567)',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginBottom: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
