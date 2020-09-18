import React,{useState,useEffect}from "react";
import { StyleSheet, Text, View, Image,ImageBackground,paragraph,Dimensions, SafeAreaView, ScrollView  } from 'react-native';
import HomeView from './Component/HomeView/HomeView';
import { Searchbar,Card} from 'react-native-paper';
import DetailView from './Component/DetailView/DetailView'


//import MapView from 'react-native-maps';
//import SafeAreaView from 'react-native-safe-area-view';

export default class App extends React.Component {
  // the constructor for the props of the elements
  

  handlePress = (props) => {
      return(
        <View style={styles.container}>
        
      </View>
      );
    
  }
 

  render() {
    return (
     
      <SafeAreaView style={styles.container}>
       
      
        <Image source={require('./Images/thecoffee.jpg')}  style={styles.backgroundimage}/>
        
        <Text style={{color: '#fff',fontSize:50,flex: .7,alignContent:'center',borderColor:'black'}}>Time for a Coffee!</Text>

          <Image size={24} source={require('./Images/coffee-background.jpg')}  style={styles.backgroundIcon}/>
          
          <HomeView />
          
          
      </SafeAreaView>
      
      
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
    
  },
  //the background image
  backgroundimage:{
    flex: 2,
    alignItems: 'center',
    width:400,
    height:630,
  },
  
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    borderColor:'blue', 
    width:400,
    height:620,
  },
  backgroundIcon:{
    alignItems: 'center',
    top:50,
    width:220,
    height:240,
    marginBottom:20,
    borderColor:'blue',
  },
  

  
});
