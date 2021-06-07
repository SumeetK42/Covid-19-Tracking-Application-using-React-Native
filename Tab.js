import React from "react"
import Update from "./Update"
import Vaccine from  "./Vaccine"
import Help from "./Help"
import World from "./world"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from  "@react-navigation/bottom-tabs" 
import Helpline from "./Helpline"
import {createStackNavigator} from "@react-navigation/stack"
import Survey from "./Survey"
import Header from "./Header"
import Register from "./Register"
import Welcome from "./Welcome"
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/Ionicons';
const Tabs=()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Update" options={{tabBarLabel:"Updates",tabBarIcon:()=><Icon name="ios-home" color = "black" size={25}/>}} component={Update} />
      <Tab.Screen name="Vaccine" options={{tabBarLabel:"Vaccine",tabBarIcon:()=><Icon name="medkit-outline" color = "black" size={25}/>}} component={Vaccine} />
      <Tab.Screen name="Help" options={{tabBarLabel:"Help",tabBarIcon:()=><Icon name="information-circle-outline" color = "black" size={25}/>}} component={Help} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
const Stacknav = () => (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen options={{headerShown: false}} name="Welcome" component={Welcome}/>
    <Stack.Screen options={{headerShown: false}} name="Register" component={Register}/>
    <Stack.Screen options={{headerShown: false}} name="Covid Tracker" component={Tabs} />
    <Stack.Screen name="WorldWide" component={World}/>
    <Stack.Screen name="Helpline" component={Helpline} />
    <Stack.Screen name="Survey" component={Survey} />
  </Stack.Navigator>
</NavigationContainer>
);
export default Stacknav;
