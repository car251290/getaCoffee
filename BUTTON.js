import React from 'react';
import { StyleSheet, Text, View, Button,Dimensions  } from 'react-native';
import {Card} from 'react-native-paper';
import MapView from 'react-native-maps';
import * as WebBrowser from 'expo-web-browser';
import {DetailView} from '../DetailView/DetailView'




const BUTTON = (props) => {

  return (
    <View style={ style.button }>
       <Card.Actions>
       <Button title = 'Get a Coffee'
//onPress={()=>{ props.handlePress }}
//onPress={() => {
  //WebBrowser.openBrowserAsync('');
//}} 
color='#FFF' Get a coffee /> 
 
       </Card.Actions>
    </View>
  )
};

const style = StyleSheet.create({
  button: {
    flex:0.2,
    marginTop:50,
    alignItems: 'center',
    color:'#fff',fontSize:30,
    backgroundColor: '#a9a9a9',
    padding: 1,
    width: 200,
    height: 600,
  }, 
});



export default BUTTON;
