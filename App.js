import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground,paragraph } from 'react-native';
import HomeView from './Component/HomeView/HomeView';
import backgroundImage from './assets/coffee-background.jpg'; 
//import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  // the constructor for the props of the elements
  constructor(props) {
    super(props);
  }

  handlePress = (props) => {

  }

  render() {
    return (
      <View style={styles.container}>
        
        <Image source={require('./Images/thecoffee.jpg')}  style={styles.backgroundimage}/>

        <Text style={styles.paragraph}>Time for a Coffee!</Text>

        <Image source={require('./Images/Coffee2020.png')}  style={styles.backgroundIcon}/>
        
          <HomeView />

          <View >
         
                   
                </View>

      </View>
      
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
  backgroundimage:{
    flex: 2,
    alignItems: 'center',
    width:410,
    height:920,
  },
  paragraph:{
    color:'#fff',fontSize:30,
     margin:60 ,  
     alignItems: 'center',
     flex:.3,  
     padding: 4,
      fontWeight: 'bold'
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundIcon:{
    alignItems: 'center',
    width:190,
    height:200,
    marginBottom:70
  }
  
});
