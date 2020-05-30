import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import HomeView from './Component/HomeView/HomeView';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePress = (props) => {

  }

  render() {
    return (
      
      <View style={styles.container}>
        <Text style={{color:'#fff',fontSize:30, margin:60 ,  flex:.3,  padding: 8,}}>Time for a Coffee!</Text>
        
        <Image source={require('./Images/thecoffee.jpg')}  style={styles.backgroundImage}/>
          <HomeView />
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

 // backImage:{
   // flex: .1,
  //  margin:10,
 //   alignItems: 'center',
 //   width:250,
 //   height:90,
    // the image botton
   // marginBottom:10,
  //}
});
