import React,{useEffect,useState} from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor,
  LogBox
} from "react-native";
import axios from "axios"
import vaccine from "./vaccine.json"


import { LineChart } from "react-native-charts-wrapper";
import { set } from "mongoose";

const greenBlue = "rgb(26, 182, 151)";
const petrel = "rgb(59, 145, 153)";

const  LineChartScreen  = () => {
const [sta,setSta]  = useState({})
const [vac,setVacc] = useState([])

useEffect(()=>{
    function doses(){
      axios.get("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json").then(res=>{
        setVacc(res.data[91].data)
      })
    }
    doses()   
    },[])

const [para,setPara] = useState({
    x:"",y:""
})

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

let paq=[];

vaccine.forEach(i=>{
    paq.push({x:i.date,y:i.total_vaccinations})
})


 function handleSelect(event) {
    let entry = event.nativeEvent;
    LogBox.ignoreAllLogs();
    if (entry == null) {
      setSta({ ...sta, selectedEntry: null });
    } else {
      console.log(format(entry.data.y))

      console.log(entry)
      let d = entry.data.x
      let e = String(d).slice(0,4) +"-"+ String(d).slice(4,6) +"-"+ String(d).slice(6,8)
      console.log(e)
      if(entry.data.y !== undefined) {
        setSta({ ...sta, x: format(entry.data.y),y:e });

      }
      
    }
  }

    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 80 }}>
          <Text style={{fontWeight:"bold",fontSize:25,textAlign:'center'}}> Number of vaccinations : {sta.x} on {sta.y}</Text>
        </View>

        <View style={styles.container}>
          <LineChart
            style={styles.chart}
            data={{
              dataSets: [
                {
                  values:paq.slice(-90,-1),
                  label: "",
                  config: {
                    mode: "CUBIC_BEZIER",
                    drawValues: false,
                    lineWidth: 2,
                    drawCircles: true,
                    circleColor: processColor(petrel),
                    drawCircleHole: false,
                    circleRadius: 5,
                    highlightColor: processColor("transparent"),
                    color: processColor(petrel),
                    drawFilled: true,
                    fillGradient: {
                      colors: [processColor(petrel), processColor(greenBlue)],
                      positions: [0, 0.5],
                      angle: 90,
                      orientation: "TOP_BOTTOM"
                    },
                    fillAlpha: 1000,
                    valueTextSize: 15
                  }
                }               
              ]
            }}
            chartDescription={{ text: "" }}
            legend={{
              enabled: false
            }}
            marker={{
              enabled: true,
              markerColor: processColor("white"),
              textColor: processColor("black")
            }}
            xAxis={{
              enabled: true,
              granularity: 1,
              drawLabels: true,
              position: "BOTTOM",
              drawAxisLine: true,
              drawGridLines: true,
              fontFamily: "HelveticaNeue-Medium",
              fontWeight: "bold",
              textSize: 1,
              textColor: processColor("gray"),
              valueFormatter:["jan","Feb","Mar"]
            }}
            yAxis={{
              left: {
                enabled: false
              },
              right: {
                enabled: true
              }
            }}
            autoScaleMinMaxEnabled={true}
            animation={{
              durationX: 0,
              durationY: 1500,
              easingY: "EaseInOutQuart"
            }}
            drawGridBackground={false}
            drawBorders={false}
            touchEnabled={true}
            dragEnabled={true}
            scaleEnabled={true}
            scaleXEnabled={true}
            scaleYEnabled={true}
            pinchZoom={true}
            doubleTapToZoomEnabled={true}
            dragDecelerationEnabled={true}
            dragDecelerationFrictionCoef={0.99}
            keepPositionOnRotation={false}
            onSelect={(e)=> handleSelect(e)}
            onChange={event => console.log(event.nativeEvent)}
          />
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    padding: 20
  },
  chart: {
    height: 300,
  }
});

export default LineChartScreen;