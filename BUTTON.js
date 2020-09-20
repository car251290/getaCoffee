import React from 'react';
import { StyleSheet, Text, View, Button,Dimensions  } from 'react-native';
import {Card} from 'react-native-paper';
import MapView from 'react-native-maps';
import * as WebBrowser from 'expo-web-browser';
import {DetailView} from '../DetailView/DetailView'
import { ScreenStackHeaderCenterView } from 'react-native-screens';




const BUTTON = (props) => {

  return (
    <View style={ style.button }>
       
       <Button title = 'Get a Coffee'
//onPress={()=>{ props.handlePress }}
onPress={() => {
  WebBrowser.openBrowserAsync('https://www.google.com/maps/@49.2125932,-123.0931223,14z');
}} 
color='#FFF' float='1px' /> 
 
      
    </View>
  )
};

const style = StyleSheet.create({
  button: {
    flex:0.2,
    marginTop:90,
    alignItems: 'center',
    color:'#fff',fontSize:40,
    backgroundColor: '#a9a9a9',
    padding: 1.5,
    width: 170,
    height: 850,
    borderRadius:4,
    borderBottomWidth: StyleSheet.hairlineWidth,
  }, 
});



export default BUTTON;
