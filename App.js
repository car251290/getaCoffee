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
        <Text style={styles.paragraph}>Time for a Coffee!</Text>
        <Image source={require('./Images/thecoffee.jpg')}  style={styles.backgroundImage}/>
          <HomeView />

          <View >
                    <Image source={backgroundImage} style={{ height :'100%', width: '100%' }} />
                </View>

      </View>
      
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9678b6',
    
  },
  backgroundImage:{
    flex: .3,
    alignItems: 'center',
    width:360,
    height:800,
  },
  paragraph:{
    color:'#fff',fontSize:30,
     margin:60 ,  
     flex:.3,  
     padding: 8,
      fontWeight: 'bold'
  },
  

});
