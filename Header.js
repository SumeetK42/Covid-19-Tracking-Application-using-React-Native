import React, { useState } from 'react';
import {Button, StyleSheet,Text, Touchable, View} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';



export default function Header(){
    return(
        <View style={styles2.container}>
           <Text style={styles2.HeaderText}>COVID {"\n"} TRACKER  </Text> 

        </View>
           

    )
}

const styles2 = StyleSheet.create({
    container:{
        borderWidth:1,

    },
    HeaderText:{
        fontSize:25,
        textAlign:"center",
        backgroundColor:"yellow" ,
        fontWeight:"bold"
   
 
    }
})