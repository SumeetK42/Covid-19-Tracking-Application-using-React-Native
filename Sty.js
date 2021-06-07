import React from "react-native"
import {Stylesheet} from "react-native";

export const styles = Stylesheet.create({
    container:{
        flex:1,
        padding:6,
        paddingTop:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box:{
        border: "2px solid black",
        fontSize:10,
        fontWeight:400

    },
    butt:{
        backgroundColor:"red",
        padding:7

    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
      },
      highlight: {
        fontWeight: '700',
      },
    

})