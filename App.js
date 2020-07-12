import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground,paragraph,Dimensions, SafeAreaView, ScrollView  } from 'react-native';
import HomeView from './Component/HomeView/HomeView';
import backgroundImage from './assets/coffee-background.jpg'; 
import { Searchbar} from 'react-native-paper';

//import MapView from 'react-native-maps';
//import SafeAreaView from 'react-native-safe-area-view';

export default class App extends React.Component {
  // the constructor for the props of the elements
  constructor(props) {
    super(props);
  }

  handlePress = (props) => {
      return(
        <View style={styles.container}>
        
      </View>
      );
    
  }
 

  render() {
    return (
     
      <SafeAreaView style={styles.container}>
       
       <Searchbar/>

        <Image source={require('./Images/thecoffee.jpg')}  style={styles.backgroundimage}/>
        
        <Text style={{color: '#fff',fontSize:50,flex: .5,alignContent:'center',borderColor:'black'}}>Time for a Coffee!</Text>
        
        <Image source={require('./Images/Coffee2020.png')}  style={styles.backgroundIcon}/>
       

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
    height:620,
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
    top:10,
    width:220,
    height:240,
    marginBottom:20,
    borderColor:'blue',
   

  },

  
});
