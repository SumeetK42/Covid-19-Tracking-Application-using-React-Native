import React, { useState,useEffect } from 'react';
import { Button, StyleSheet, Text, View,TextInput, KeyboardAvoidingView,LogBox } from 'react-native';
import DatePicker from "react-native-datepicker"
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
export default function App({ navigation }) {
  const [gender,setGender]= useState("")
  const[isDiagonised,setDiagon] = useState("")
  var radio_props = [
    {label: 'Male   ', value: 0 },
    {label: 'Female', value: 1 }
  ];
  var diagon = [
    {label: 'Yes  ', value: 1 },
    {label: 'No', value: 0 }
  ];

  LogBox.ignoreAllLogs();

  return (

    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
   

      
  
          <Text style={{backgroundColor:"green",textAlign:'center',fontSize:20,padding:6,color:"white"}}>Register</Text>
          <TextInput placeholder="First Name" style={styles.inp}/>   
          <TextInput placeholder="Last Name"  style={styles.inp} /> 
          <TextInput placeholder="Email"  style={styles.inp}/> 
          <TextInput placeholder="Mobile Number"  style={styles.inp}/> 
            <TextInput placeholder="Address" style={styles.inp} multiline/> 
          <View style={{flexDirection:"row"}}>
          <Text style={{margin:6}}>Gender  :</Text> 
          <RadioForm
  radio_props={radio_props}
  initial={0}
  formHorizontal={true}
  style={{margin:6}}
  onPress={(value)=>{setGender(value);console.log(value)}}
/>
</View>
<View style={{flexDirection:"row"}}>
          <Text style={{margin:6}}>Date of birth  : </Text>
          <DatePicker
          style={{width:200}}
          mode="date"
          format="YYYY-MM-DD"
          minDate="1950-01-01"
          confirmBtnText="confirm"
          cancelBtnText="cancel"
          onDateChange={(date2)=>{setDate({date:date2})}}
          style={{margin:6}}
          
          /></View>
                
        
          <Text style={{margin:6,fontSize:20}}>Are you daigonised with Covid 19 ?</Text>
          <RadioForm
  radio_props={diagon}
  initial={0}
  formHorizontal={true}
  onPress={(value)=>{setDiagon(value);console.log(value)}}
  style={{margin:10}}
/>
      

             
          <Button title="Submit" onPress={()=>{navigation.navigate("Covid Tracker")}}></Button>  
             
          <View style={{ height: 60 }} />       
    </KeyboardAvoidingView>   
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"yellow",
    paddingTop:5,
},
inp:{
  borderWidth:3,
  borderColor:"gray",
  margin:6
},
sub:{
  borderWidth:2,
  padding:6,
  borderColor:"black"
}
});

