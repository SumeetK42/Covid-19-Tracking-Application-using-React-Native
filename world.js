import React, { useEffect,useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from "./Header"
import axios from "axios"
import { Table ,Row, Col } from 'react-native-table-component';
import world from "./world.json";
import { Tooltip }from"react-native-elements";

export default function World() {
  const [data,setData] = useState({
    country:"",
    cases : "",
    active : "",
    recovered:"",
    deaths:""
  })
  useEffect(()=>{
    axios.get('https://disease.sh/v3/covid-19/countries').then(res=>{
      let l = res.data.length;
      console.log(l)
      for(let i=0; i<l; i++){
       console.log(res.data[i])
        res.data[i].map(dat=>{
          setData({...data,})

        })
            }
    })

   

  },[])

  function format(num)
  {
   if(num > 999 && num < 1000000)
   {
       return (num/1000).toFixed(1) + 'k'; // convert to K for number from > 1000 < 1 million 
   }else if(num > 1000000)
   {
       return (num/1000000).toFixed(1) + 'm'; // convert to M for number from > 1 million 
   }else if(num < 900)
   {
       return num; // if value < 1000, nothing to do
   }
  }
  

  return (
      <ScrollView>
    <View style={styles.container}>
      <Header/>
      <View style={styles.data}>
      </View>

      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={['country','cases','deaths','recovered']} style={styles.head} textStyle={{margin:10}}></Row>
          {
            world.map((num)=>(
              <Tooltip height={100} width={150} backgroundColor="yellow"
              popover={<Text style={styles.tool}>Current Active :{format(num.active)}{`\n`}New cases :{format(num.new)}{`\n`}New Deaths{format(num['new deaths'])}</Text>}>
             <Row data = {[num.country,format(num.total),format(num.deaths),format(num.recoverd)]} textStyle={{margin:10}}>
              </Row>
              </Tooltip>
            ))
          }         
  
        </Table>
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
