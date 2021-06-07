import React ,{useState} from 'react';
import { ScrollView, StyleSheet,Alert, Text, TouchableOpacity, View ,Modal,Pressable} from 'react-native';
import Header from "./Header"
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
export default function Survey() {  
  const [modalVisible, setModalVisible] = useState(false);

  const[prediction,setPred] = useState({
    age:"",
    gender:"",
    loss:"",
    cough:"",
    fatigue:"",
    skip:"",
  })

  var diagon = [
    {label: 'Yes  ', value: 1 },
    {label: 'No', value: 0 }
  ];
  var gen = [
    {label: 'Male  ', value: 1 },
    {label: 'Female', value: 0 }
  ];
  console.log(prediction)


  function pred(a,b,c,d,e,f){
  let  Prediction = -1.32-(0.01*a)+(0.44*b)+(1.75*c)+(1*d)+(0.49*e) +(0.39*f);
  console.log(prediction)
  if(Prediction>0.5){
    return (
      <Text style={styles.inf}>High Risk Of infection {'\n'} *We reccommend you do visit doctor immediately</Text>
    )
  }
  else{
    return (<Text style={styles.inf}>Low Risk Of infection {'\n'} *Make sure you stay safe</Text>)
  }

}
let age_data =[1,2,3,4,5,6,8,9,10,11,12]

for (let i = 0;i<100;i++){
  age_data.push(i)
}



  return (
    <View style={styles.container}>
      <Header/>

      <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.results}>
          {pred(prediction.age,prediction.gender,prediction.loss,prediction.cough,prediction.fatigue,prediction.skip)}
          <Button title="close"  style={{marginTop: 10}} onPress={() => setModalVisible(!modalVisible)}/> 
        </View>   
      </Modal>
    </View>
      <ScrollView>
      <View style={styles.data}>
        <Text style={{textAlign:"center", fontWeight:"bold",fontSize:20}}>Answer this Simple questions </Text>
      </View>
     
      <View style={styles.que}>
        <Text style={styles.quest}> I. What is your age ? </Text>
        <View style={styles.fl}>
         <DropDownPicker
          items={age_data.map(data=>({label:`${data}`,value:data}))}
             defaultValue={0}
             containerStyle={{height: 40,width:200,marginLeft:10,marginTop:8}}
             dropDownStyle={{backgroundColor: '#fafafa',height:200}}
             onChangeItem={item=>{setPred({...prediction,age:item.value})}}
         />
        </View>
      </View>

      <View style={styles.que} >
        <Text style={styles.quest}>II. What is your Gender</Text>
        <View style={styles.fl}>
        <RadioForm
  radio_props={gen}
  initial={0}
  formHorizontal={true}
  onPress={(value)=>{setPred({...prediction,gender:value});console.log(value)}}
  style={{margin:10}}
/>
        </View>
      </View>
      <View style={styles.que}>
        <Text style={styles.quest}>III. Have you lost your the smell and taste?</Text>
        <View style={styles.fl}>
        <RadioForm
  radio_props={diagon}
  initial={0}
  formHorizontal={true}
  onPress={(value)=>{setPred({...prediction,loss:value});console.log(value)}}
  style={{margin:10}}
/>
        </View>
      </View>
      <View style={styles.que}>
        <Text style={styles.quest}>IV. Do You have severe or siginificant cough problems?</Text>
        <View style={styles.fl}>
        <RadioForm
  radio_props={diagon}
  initial={0}
  formHorizontal={true}
  onPress={(value)=>{setPred({...prediction,cough:value});console.log(value)}}
  style={{margin:10}}
/>
        </View>
      </View>
      <View style={styles.que}>
        <Text style={styles.quest}>V. Are you Experiencing with fatigue over with time?</Text>
        <View style={styles.fl}>
        <RadioForm
  radio_props={diagon}
  initial={0}
  formHorizontal={true}
  onPress={(value)=>{setPred({...prediction,fatigue:value});console.log(value)}}
  style={{margin:10}}
/>
        </View>
      </View>
      <View style={styles.que}>
        <Text style={styles.quest}> VI. Are you Skipping your meals? </Text>
        <View style={styles.fl}>
        <RadioForm
  radio_props={diagon}
  initial={0}
  formHorizontal={true}
  onPress={(value)=>{setPred({...prediction,skip:value});console.log(value)}}
  style={{margin:10}}
/>
        </View>
      </View>

      <TouchableOpacity style={styles.sub} onPress={() => setModalVisible(true)} ><View><Text style={{textAlign:"center",color:"white", fontSize:20}}>Submit</Text></View></TouchableOpacity> 
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  results:{
    margin: 20,
    backgroundColor: "#46458A",
    borderRadius: 20,
    marginTop:190,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5

  },
  inf:{
    textAlign:"center",
    fontSize:20,
    color:"white",
    fontWeight:"bold"
  },
  yes:{
    borderWidth:2,
    borderColor:"black",
    width:150,
    paddingLeft:5,paddingRight:5,
    borderRadius:30,
    margin:5
  },
  no:{
    borderWidth:2,
    borderColor:"black",
    width:150,
   paddingLeft:5,paddingRight:5,
   borderRadius:30,
    margin:5
  },
  sub:{
    flex: 1,
    alignItems:'center',   
    borderWidth:2,
    borderColor:"black",
    margin:20,
    backgroundColor:"#46458A",
    padding:9
  },
  que:{
    padding:4,
  margin:1 },
  fl:{
    flex:1,flexDirection:"row",flexWrap: "wrap",marginLeft:20
  },
  quest:{
    fontSize:17,
    fontWeight:"bold"}
});
