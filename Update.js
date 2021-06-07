import React, { useEffect, useState } from 'react';
import {ScrollView, StyleSheet, Image ,Text, TouchableOpacity, View,Dimensions, LogBox, ImageBackground} from 'react-native';
import Header from "./Header"
import axios from "axios"
import DropDownPicker from 'react-native-dropdown-picker';
import * as shape from 'd3-shape'
import {
  ProgressChart,
} from "react-native-chart-kit";
import {LineChart,Grid,YAxis,XAxis,BarChart} from "react-native-svg-charts"
import { Chart, VerticalAxis, HorizontalAxis, Line ,Area} from 'react-native-responsive-linechart'

export default function Update({navigation}) {


  const[states_data,setStates] = useState([])
  const[state_series,setSeries]= useState([])
  const[date,setDate]=useState([])
  const[total,setTotal]=useState([])
  const[statewise,setStatewise]=useState([])
  const[cases,Setcases]=useState({
    active:"",
    deaths:"",
    recoverd:"",
    confirmed:""
  })
  const [today,setToday] = useState({
    date:"",
    cases:"",
    deaths:"",
    recovered:""
  })

  const[val,setval]=useState('Total')
  const[sta,setSta]=useState("total")
  const[test,setTest]=useState("")


  //let data = axios.get("https://api.apify.com/v2/datasets/58a4VXwBBF0HtxuQa/items?format=json&clean=1yo").then(res=>{console.log(res)})
  //console.log(data)
  //https://anypoint.mulesoft.com/exchange/68ef9520-24e9-4cf2-b2f5-620025690913/covid19-data-tracking-api/minor/3.0/console/method/%231450/


/*
  useEffect(()=>{
    let g ;
    function get_states_series(){
      axios.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history").then(res=>{
        if(res.data.data.history.length > 1){
          setSeries(res.data.data.history)
          let len = state_series.length
          let l2 = state_series[len-1].statewise.length
           for(let i=0 ; i<len ;i++){
         date.push(state_series[i].day)  
         total.push(state_series[i].total)    
         statewise.push(state_series[i].statewise)       
      }  
        }
        }
  
      )}
      
    get_states_series()
  },{})
  const[key,setKey] = useState([])

  function do_this(){
  let l = statewise.length
  for(let j=0;j<l;j++){
    let g = statewise[j].find(s => s.state === val)
    key.push(g)

  }
  console.log(key)

}
*/
const[confirmed,setCon]=useState([])
const[deceased,setDea]=useState([])
const[recovered,setRec]=useState([])
const[tested,setTet]=useState([])
const[vaccinated,setVacc]=useState([])

const [qw,setQ] = useState([])

const[x,setX] = useState([])
useEffect(()=>{
  axios.get("https://api.covid19india.org/v4/min/timeseries.min.json").then(res=>{
    var p = res.data.MH.dates
    setX(res.data)
    let m = Object.keys(p)
    let so = []
    for (let  j =0;j<m.length;j++){
      so.push(m[j].slice(0,4) + m[j].slice(5,7) + m[j].slice(8,11))

    }
    setDate(so)
    m.forEach(i => {
      confirmed.push(res.data.MH.dates[i].delta.confirmed)
      deceased.push(res.data.MH.dates[i].delta.deceased)
      tested.push(res.data.MH.dates[i].delta.tested)
      recovered.push(res.data.MH.dates[i].delta.recovered)
      
      vaccinated.push(res.data.MH.dates[i].delta.vaccinated)
    });
    

  })
},[])

useEffect(()=>{
  function get_states(){
  axios.get("https://api.covid19india.org/data.json").then(res=>{
    setStates(res.data.statewise)
    
  }
  )}
get_states()    
},[])


 useEffect(()=>{
   // to get Test done till now
   axios.get("https://api.rootnet.in/covid19-in/stats/testing/latest").then(test=>{
     setTest(test.data.data.totalSamplesTested)

   })

 },[])


//format the data into k and Million
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

// this function sets the todays data on the dropdown picker

 const data1 = confirmed.slice(-120,-1)
 const data4 = date.slice(-120,-1)
 const data2 = recovered.slice(-120,-1)
 const data3 = deceased.slice(-120,-1)

 function Test(key, values) {
  this.x = key;
  this.y = values;
}
 const activeData = [
     {
         data: data1,
         svg: { stroke: '#8800cc' },
     }
    ]
    const recoveredData = [
      {
        data: data2,
        svg: { stroke: 'green' },
    },
     ]
     const DeathsData = [
      {
        data: data3,
        svg: { stroke: 'red' },
    },
     ]
    
   
 const data5= [
  { x: -2, y: 1 },
  { x: -1, y: 0 },
  { x: 8, y: 13 },
  { x: 9, y: 11.5 },
  { x: 10, y: 12 }
]
const data0 = [];
for(let i =0 ;i<data1.length;i++){
  data0.push(new Test(data4[i],data1[i]))
}
const data7 = [
  {x: 2, y: 54}, {x: 2, y: 56},
]

 function no(a){

   vaccinated.splice(0,vaccinated.length)
   tested.splice(0,tested.length)
   deceased.splice(0,deceased.length)
   recovered.splice(0,recovered.length)
   confirmed.splice(0,confirmed.length)

   let dates_series = x[a].dates
   let o = Object.keys(dates_series)
   let pq=[]
   let sk =[]
   o.forEach(i => {
    pq.push(x[a].dates[i].delta)
   })
   let data12 = pq.filter(function( element ) {
    return element !== undefined;
 });
data12.map(data=>{
  vaccinated.push(data.confirmed)
  tested.push(data.tested)
  recovered.push(data.recovered);
  deceased.push(data.deceased)
  confirmed.push(data.confirmed);


})

  

}
  return (
        <View style={styles.container}>
      <Header/>
      <ScrollView>
      <ImageBackground style={styles.data_box1} source={require('./up.jpg')}>

      <DropDownPicker
    items={states_data.map(data=>({label:data.state,value:data.state,code:data.statecode}))}
    defaultValue={val}
    containerStyle={{height: 40,width:200,marginLeft:100}}
    dropDownStyle={{backgroundColor: '#fafafa',height:200}}

    onChangeItem={item=>{
      setval(item.value)
      setSta(item.code)
      let state_found = states_data.find(data=>data.state === val)
      Setcases(state_found)
      no(sta)
    
    }}
/>
<View style={{flex:1,alignItems: 'center',aligncontent: 'center'}}>
<Text style={styles.information}> Confirmed Cases {`\n`} {format(cases.confirmed)}</Text>
</View>
<View style={styles.cases}>
<Text  style={styles.information} >{format(cases.active)} {`\n`} Active</Text>
<Text  style={styles.information}>{format(cases.recovered)} {`\n`} Recovered</Text>
<Text  style={styles.information}>{format(cases.deaths)} {`\n`} Deaths</Text>
</View>
    </ImageBackground>

    <View style={styles.data_box}>
       <Text style={styles.chartLabel}>Confirmed</Text>
      <BarChart style={{ height: 200 }} data={tested} svg={{fill: 'rgb(134, 65, 244)'}} contentInset={{ top: 30, bottom: 30 }}>
                <Grid />
            </BarChart>
    </View>
    <View style={styles.data_box}>
    <Text style={styles.chartLabel}>Recovered</Text>
    
      <BarChart style={{ height: 200}} data={recovered} svg={{fill: 'rgb(134, 65, 244)'}} contentInset={{ top: 30, bottom: 30 }}
      animate={true} spacingOuter= {0.1}>
                <Grid />
            </BarChart>
    </View>

    <View style={styles.data_box}>
    <Text style={styles.chartLabel}>Deceased</Text>
      <BarChart style={{ height: 200 }} data={tested} svg={{fill: 'rgb(134, 65, 244)'}} contentInset={{ top: 30, bottom: 30 }}>
                <Grid />
            </BarChart>
    </View>
    <ImageBackground style={styles.data_box2} source={require("./live.jpg")} opacity={0.5}>
      <Text>Live Updates : {date[date.length-2]} </Text>
      <Text>About Corona Virus</Text>
      <View style={styles.live}>
      <Text style={{textAlign:"center",fontWeight:"bold",color:"white"}}>Confirmed {'\n'}{confirmed[confirmed.length-2]}</Text>
      <Text style={{textAlign:"center"}}>Recovered {'\n'}{recovered[recovered.length-2]}</Text>
      <Text style={{textAlign:"center"}}>Deaths {'\n'}{deceased[deceased.length-2]}</Text></View>
    </ImageBackground>

    
    <View style={styles.data_box}>
    <Text style={styles.chartLabel}>Vaccinated</Text>
      <BarChart style={{ height: 200 }} data={vaccinated} svg={{fill: 'rgb(134, 65, 244)'}} contentInset={{}}>
                <Grid />
            </BarChart>
    </View>
    <View style={styles.data_box}>
      <Text style={styles.chartLabel}>Tested</Text>
      <BarChart style={{ height: 200 }} data={tested} svg={{fill: 'rgb(134, 65, 244)'}} contentInset={{ top: 30, bottom: 30 }}>
                <Grid />
            </BarChart>
    </View>
    <TouchableOpacity onPress={()=>{navigation.navigate("WorldWide")}}>
    <View style={styles.test}>
      <Text>World wide cases</Text>
    </View>
    </TouchableOpacity>
   
    <View style={styles.test}>
      <Text>Testing in India</Text>
    </View>
    <ImageBackground style={styles.test2} source={require("./imag2.png")} opacity={0.1}>
      <Text style={{textAlign:"center",marginTop:80 , fontWeight:"bold",fontSize:20}}>Total Testing done {'\n'}
      {format(test)}
      </Text>
   </ImageBackground>


      <View style={styles.data}>      
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
  data_box:
  {
    borderWidth:3,
    borderColor:"gray",
    borderRadius:15,
    padding:10,
    margin:10,
  },
  cases:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end',
  },
  test:{
    borderWidth:2,
    borderColor:"gray",
    borderRadius:15,
    padding:15,
    margin:10,
    backgroundColor:"#abdbe3",
  },
  test2:{
    borderWidth:3,
    borderRadius:100,
    marginLeft:80,
    width:200,
    height:200
  },
  ba:{},
  live:{
    flex:1,
    flexDirection:'row',
    alignContent:"center",
    alignItems:"flex-end",
    marginTop:20,
    justifyContent:"space-evenly"
  },
  data_box2:{
    borderWidth:3,
    borderColor:"gray",
    borderRadius:15,
    padding:15,
    margin:10,
  }
  , data_box1:{
    borderWidth:3,
    borderColor:"gray",
    borderRadius:15,
    padding:15,
    margin:10,
  }
  ,information:{
    textAlign:"center",marginTop:10,padding:15,fontSize:20,
    color:"white",fontWeight:"bold"
  },
  chartLabel:{ 
    borderWidth:1,
    width:250,
    margin:10,
    paddingLeft:10,paddingRight:10,
    textAlign:"center",
    backgroundColor:"#5E0C91",
    color:"white",
    fontWeight:"bold"
  }
});
//#endregion