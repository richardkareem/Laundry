import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const CardComponent = ({user}) => {

    const detail = user;

    return (
        <View>
          {/* {user.daoDetailCucians.map((cucian)=>(
            <Text> {cucian.pembayaran} </Text>
          ))} */}
            <Text> {detail.date} </Text>         
        </View>
    );
}

const styles = StyleSheet.create({})

export default CardComponent;

