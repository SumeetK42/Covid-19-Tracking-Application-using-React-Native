import React, { useState } from 'react';
import { Button, StyleSheet, Text, View,Modal ,TouchableOpacity} from 'react-native';
import Register from "./Register"
export default function Welcome({ navigation }) {
const[modal,setModal] = useState(false)
  return (
    <View style={styles.container}>
           <View>
        <Text style={styles.logo}><Text style={{textAlign:"center"}}>COVID</Text> {'\n'} TRACKER</Text>
        </View> 
        
          <View style={styles.box}>
            <Text style={{padding:4,textAlign:"center"}}>With COVID tracker your can help our {'\n'} country in efforts to fight COVID-19</Text>
            <Text style={{fontWeight:"bold",fontSize:20,textAlign:"center"}}>Lets fight with Covid together</Text>
          </View>

          

      <TouchableOpacity onPress={()=>{navigation.navigate("Register")}}>
      <View style={styles.butt}>       
        <Text style = {{textAlign:"center",fontSize:15,fontWeight:"bold"}}>Register Now</Text>
      </View></TouchableOpacity>

          
      
      
    </View>

  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F7FF07",
    justifyContent: 'center',
    alignItems:"center",
    height:660
},
logo:{
  fontSize:40,
  fontStyle:"normal",
  fontWeight:"bold",
  textAlign:"center",


},
box:{
  borderTopWidth:2,
  borderBottomWidth:2,
  borderColor:"grey",
  backgroundColor:"white",
  width:360,

},
butt:{
backgroundColor:"#DCDC24",
borderWidth:2,
borderRadius:20,
marginTop:50,
padding:12,
width:200,
textAlign:"center"



},
modal:{height:650,
  borderColor:"black",
  borderWidth:2
}
});
