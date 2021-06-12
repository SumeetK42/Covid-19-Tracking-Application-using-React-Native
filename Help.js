import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Col,Row,Grid} from "react-native-easy-grid"

import Header from "./Header"


export default function Help({navigation}) {

  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView>

      <TouchableOpacity onPress={()=>{navigation.navigate("Survey")}}>
      <View style={styles.surv}>
        <Text style={{fontWeight:"bold"}}>Check your health filling out
              this short survey</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate("Helpline")}}>
      <View style={styles.surv}>       
        <Text style={{fontWeight:"bold"}}>Get a call on this Helpline Number</Text>
      </View></TouchableOpacity>
     <View>
       <Image  style={{width:340,height:340,margin:7}}
       source={require("./covid-preven.jpg")}/>
     </View>
   
      <View>
        <Text style={{fontWeight:"bold",fontSize:27,borderBottomColor:"grey",borderBottomWidth:2,borderTopWidth:2,backgroundColor:'#abdbe3',textDecorationStyle:"solid",textDecorationColor:"black",textAlign:"center"}}>FAQS</Text>
        <View style={styles.que}>
        <Text style={styles.ques}> I. What are the symptoms of COVID-19</Text>
        <Text>The most common symptoms of COVID-19 are fever, tiredness, and
         dry cough.Older people,and those with underlying medical problems like high blood pressure,
heart problems or diabetes, are more likely to develop serious illness.</Text></View>

         <View style={styles.que}>
        <Text style={styles.ques}> II.How does COVID-19 spread?</Text>
        <Text>The disease can spread from person to person through small droplets from
the nose or mouth which are spread when a person with COVID-19 coughs or exhales.This is
why it is important to stay more than 1 meter (3 feet) away from a
person who is sick.</Text></View>

         <View style={styles.que}>
        <Text style={styles.ques}>III. Who is at risk of developing severe illness ? </Text>
        <Text>older persons and persons with pre-existing medical conditions (such
as high blood pressure, heart disease, lung disease, cancer or
diabetes) appear to develop serious illness</Text></View>

         <View style={styles.que}>
        <Text style={styles.ques}> IV. Can CoVID-19 be caught from a person who has no symptoms? </Text>
        <Text>The risk of catching COVID-19 from someone with no symptoms at all is very low </Text></View>

         <View style={styles.que}>
        <Text style={styles.ques}> V. Should I worry about COVID-19?</Text>
        <Text>Illness due to COVID-19 infection is generally mild, especially for
             children and young adults. However, it can cause serious illness:
              about 1 in every 5 people who catch it need hospital care </Text></View>

         <View style={styles.que}>
        <Text style={styles.ques}> VI. Is there a vaccine drug or treatment for COVID-19 ?</Text>
        <Text>Yes, you can visit to your nearest hospital for vaccine provided by government of india. </Text></View>

         <View style={styles.que}>
        <Text style={styles.ques}> VII. Can humans become infected with the COVID-19 from an animal source?</Text>
        <Text>No, Occasionally, people get infected with these viruses which  may then spread to other people</Text></View>
        </View>
        </ScrollView> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  surv:{
    borderWidth:3,
    borderColor:"gray",
    borderRadius:15,
    padding:15,
    margin:10,
    backgroundColor:"#abdbe3",
  },
  prev:{
    borderRadius:10,
    borderColor:"gray",
    margin:7,
    borderWidth:2
  },
  que:{
    margin:6,
  },
  ques:{
    fontWeight:"bold"
  }
});
