import React,{useState} from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Table ,Row, Col } from 'react-native-table-component';
import Hel from "./csvjson.json"



export default function Helpline() {
  const [head,setHead] = useState(['States','Helpline-Nos'])

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.hea}>
        Helpline Number by States of India :
      </Text>
      
      <View style={styles.data} >
        <Table borderStyle={{borderWidth: 0.4, borderColor: 'black'}}>
          <Row data={head} style={styles.head} textStyle={{margin:10}}></Row>
          {
            Hel.map((num)=>(
              <Row data = {[[num["States_ut"]],[num['Helpline Nos.']]]} textStyle={{margin:10}}>
              </Row>
            ))
          }         
  
        </Table>
      </View>
      </ScrollView>
      <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${1075}`)}} style={styles.call}><View><Text style={{textAlign:"center",fontSize:16,fontWeight:"bold"}}>Call to National Helpline</Text></View></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:7
  },
  hea:{
    fontSize:20,
    fontWeight:"bold",
    textDecorationLine: 'underline',
    padding:10
  }
  ,head:{backgroundColor:"#abdbe3",height:40,alignContent:"center"},
  call:{
    borderWidth:4,
    borderColor:"black",
    padding:15,
    borderRadius:30,
    backgroundColor:"#abdbe3"
  }

});
