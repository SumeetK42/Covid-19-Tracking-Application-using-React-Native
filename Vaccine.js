import React ,{useEffect, useState} from 'react';
import { StyleSheet, Text, View,Image, ScrollView, Button ,Linking, ImageBackground} from 'react-native';
import Header from "./Header"
import axios from "axios"
import {Col,Row,Grid} from "react-native-easy-grid"
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import Line from "./cv"

export default function Vaccine() {
const [vacindia,setVac] = useState([])
const [date,setDate] = useState([])
const [total,setTotal] = useState([])

const [till,setTill]  = useState()
const[daily,setDaily] =useState({daily_vaccinations:"",daily_vaccinations_per_million: 1333, daily_vaccinations_raw: 2180486, date: "2021-05-05",people_fully_vaccinated: 30200597,
 people_fully_vaccinated_per_hundred: 2.19, people_vaccinated: 129730641, people_vaccinated_per_hundred: 9.4, total_vaccinations: 159931238, 
 total_vaccinations_per_hundred : 11.59})
const[time,setTime]=useState([])

  useEffect(()=>{
    function timeline(){
    axios.get("https://disease.sh/v3/covid-19/vaccine/coverage/countries/IN?lastdays=100").then(res=>{
    setTime(res.data.timeline)})
    
    }
    timeline()
  },[])

  

  useEffect(()=>{
function doses(){
  axios.get("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json").then(res=>{

    let l = res.data[92].data.length;
    setDaily(res.data[92].data[l-1])
  })
}
doses()


},[])

  const [m,setM] =useState([])
  let dates = [time]
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
  ]; 

var key=[];
var value=[];
var i;
dates.forEach(function(item){

for(i in item)
{
key.push(i);
value.push(item[i]);
}

});

function do_something(){
  Linking.openURL('https://selfregistration.cowin.gov.in/');
}
 
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
    <View style={styles.container}>
      <Header/>
      <ScrollView>

      <ImageBackground style={styles.vacimg}source={require('./aware.jpg')}>
        <View style={styles.dose}>

        </View>
        </ImageBackground> 
      
<View>
  <Grid style={{margin:20}}>
    <Row>
      <Col style={styles.vaccdat}><Text style={styles.vactext} >Total Vaccination :{'\n'} {format(daily.total_vaccinations)}</Text></Col>
      <Col style={styles.vaccdat}><Text style={styles.vactext} >People Vaccinated  :{'\n'} {format(daily.people_vaccinated)}</Text></Col>
    </Row>
    <Row>
      <Col style={styles.vaccdat}><Text style={styles.vactext} >People Fully Vaccinated  :{'\n'} {format(daily.people_fully_vaccinated)}</Text></Col>
      <Col style={styles.vaccdat}><Text style={styles.vactext} >People Fully Vaccinated per Hundred :{'\n'} {format(daily.people_fully_vaccinated_per_hundred)}</Text></Col>
    </Row>
    <Row>
      <Col style={styles.vaccdat}><Text style={styles.vactext} >Daily Vaccinations :{'\n'} {format(daily.daily_vaccinations)}</Text></Col>
      <Col style={styles.vaccdat}><Text style={styles.vactext} >Daily Vaccinations Per Miilion :{'\n'} {format(daily.daily_vaccinations_per_million)}</Text></Col>
    </Row>
  </Grid>
</View>


      <View>
   <Line/>
      </View>


      <View style={styles.effect}>
        <Image  style={{width:360,height:400}} source={require("./Vacc.jpg")}/>
      </View>
      <View style={{padding:10}}>
        <Text style={{textAlign:"center",fontSize:25,fontWeight:'bold',marginBottom:10,textDecorationLine: 'underline'}}>Effectiveness of vaccines</Text>
        
    <ProgressChart
  data={{
    label:["Bharat Biotech - Covaxin","hjjh"],
    data:[0.4,0.5]
  }}
  width={300}
  height={220}
  strokeWidth={20}
  radius={32}
  chartConfig={ { backgroundGradientFrom: "black",
  backgroundGradientFromOpacity: 0.1,
  backgroundGradientTo: "pink",
  backgroundGradientToOpacity: 0.5,
  propsForLabels:{
    r: "6",
    strokeWidth: "4",

  },
  color: (opacity = 1) => `rgba(2, 0, 146, ${opacity})`}}
  style={{
    marginLeft:25
  }}

/>

    <Text style={styles.effective}>
      Bharat Biotech - Covshield : 90%
    </Text>
    <Text style={styles.effective}>
      Serum Institute - Covaxin : 90%
    </Text>
    
    </View>



      <View>
        <Text style={{textAlign:"center",fontWeight:'bold',fontSize:25,backgroundColor:"aqua"}}>Faq's on Vaccinations</Text>
        <View>
        <Text style={styles.que}>
        <Text style={{fontSize:16,fontWeight:'bold'}}>1.How long I will remain protected after vaccination?</Text>{'\n'}
Longevity of the immune response in vaccinated individuals is yet to be determined. 
Hence, continuing the use of masks, handwashing, physical distancing and other COVID-19 appropriate
 behaviours is strongly recommended.</Text>
 <Text style={styles.que}>
 <Text style={{fontSize:16,fontWeight:'bold'}}>2.Which vaccine is better between Covisheild and Covaxin?</Text>{'\n'}
There is no head-to-head comparison done between the two vaccines being used in India so
 one cannot choose one over the other. Both would work fine in preventing the infection as well 
 as prevent a person from going into severe state of the disease. 
As a long-term effect, it would be preventing death for elderly people or those who have comorbidities.</Text>

<Text style={styles.que}>
<Text style={{fontSize:16,fontWeight:'bold'}}>3 . Is the vaccine contraindicated in person with chronic diseases?</Text>{'\n'}
Chronic diseases and morbidities like the cardiac, neurological, pulmonary, metabolic, renal and malignancies etc. are not contraindicated.
 In fact, the benefit of COVID-19 vaccines to reduce the risk of severe COVID-19 disease and death is for those who have these comorbidities.
</Text>

<Text  style={styles.que}>
<Text style={{fontSize:16,fontWeight:'bold'}}>4 . Is it mandatory to take the vaccine?</Text>{'\n'}
Vaccination for COVID-19 is voluntary. However, it is advisable to receive the
 complete schedule of COVID-19 vaccine for protecting oneself against this disease and also to limit the 
spread of this disease to the close contacts including family members, friends, relatives and co-workers
</Text>
 </View>
      </View>
    
      </ScrollView>
      <Button  style={styles.but} onPress={do_something} title="Register for Vaccination" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  dose:{
    width:200,
    height:200
  },
  effect:{
    width:200

  },
  data:{
    textAlign:"center",
    marginLeft:12
  }
  ,dosinfo:{
    flex:1,
    alignSelf:'flex-end',
    marginLeft:10,
    color:"white"

  },
  vacimg:{
  },
  but:{
    padding:10,
    color:"black",
    margin:10,
    height:20

  },
  vaccdat:{
    borderWidth:2,
    borderColor:"black",
    paddingLeft:14,
    paddingRight:14,
    borderRadius:20,
    margin:5,
    backgroundColor:"#1C4161"


  },
  vactext:{
    fontWeight:'bold',textAlign:'center',fontSize:16,color:"white"
  },
  que:{
    marginTop: 10,
    padding:5
  },
  effective:{
    marginTop:10,
    marginBottom:10,
    fontSize:20,
    padding:10,
    backgroundColor:"#1C4161",
    color:"white"

  }

});
