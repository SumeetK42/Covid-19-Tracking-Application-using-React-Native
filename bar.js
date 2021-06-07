import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  processColor
} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';

const BarChartScreen=(props) =>{

    let vac = [1,2] /*[1, 6, 2, undefined, 2, undefined, undefined, 1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefin]*/

    let vac2=[]
    for (let i = 0;i<vac.length;i++){
        if (vac[i] == undefined){
            vac2.push(0)
        }
        else{
            vac2.push(vac[i])
        }
    }    

    
let paq=[];

vac2.forEach(i=>{
    paq.push({y:i})
})

console.log(props.name)



    const [state,setState] = useState({
      legend: {
        enabled: true,
        textSize: 19,
        form: 'SQUARE',
        formSize: 14,
        xEntrySpace: 1000,
        yEntrySpace: 100,
        formToTextSpace: 5,
        wordWrapEnabled: true,
        maxSizePercent: 0.5
      },
      data: {
        dataSets: [{
          values: paq,
          label: 'Bar dataSet',
          config: {
            color: processColor('teal'),
            barShadowColor: processColor('lightgrey'),
            highlightAlpha: 90,
            highlightColor: processColor('red'),
          }
        }],
        config: {
          barWidth: 0.7,
        }
      },

      highlights: [{x: 8}, {x: 6}],
      xAxis: {
        valueFormatter: ['2021','2000'],
        granularityEnabled: true,
        granularity : 1,
      }
    })

  function handleSelect(event) {
    let entry = event.nativeEvent
    if (entry == null) {
      setState({...state, selectedEntry: null})
    } else {
      setState({...state, selectedEntry: JSON.stringify(entry)})
    }

    console.log(event.nativeEvent)
  }

    return (
      <View style={{flex: 1}}>

        <View style={{height:80}}>
          <Text> {props.name}</Text>
          <Text> {state.selectedEntry}</Text>
        </View>


        <View style={styles.container}>
          <BarChart
            style={styles.chart}
            data={state.data}
            xAxis={state.xAxis}
            animation={{durationX: 2000}}
            legend={state.legend}
            gridBackgroundColor={processColor('#ffffff')}
            visibleRange={{x: { min: 0, max: 1000}}}
            drawBarShadow={false}
            drawValueAboveBar={true}
            drawHighlightArrow={true}
            onSelect={handleSelect.bind(this)}
            highlights={state.highlights}
            
          />
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  chart: {
    flex: 1
  }
});

export default BarChartScreen;