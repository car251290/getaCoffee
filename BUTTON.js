import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const BUTTON = (props) => {
  return (
    <View style={ style.button }>
      <Button
     
        title ='Get a Coffee'
        onPress={() => alert('Button with adjusted color pressed')}
       // onPress={ props.handlePress }
        color='#FFF'
       

      />
    </View>

  )
};

const style = StyleSheet.create({
  button: {
    flex:0.2,
    alignItems: 'center',
    color:'#fff',fontSize:30,
    backgroundColor: '#df6124',
  
    padding: 1,
    width: 380,
    height: 100
  }
});



export default BUTTON;
