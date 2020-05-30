import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const BUTTON = (props) => {
  return (
    <View style={ style.button }>
      <Button
        title='Get a Coffee'
        onPress={() => alert('Button with adjusted color pressed')}
       // onPress={ props.handlePress }
        color='#FFF'
      />
    </View>

  )
};

const style = StyleSheet.create({
  button: {
    backgroundColor: '#df6124',
    width: 360,
  }
});



export default BUTTON;
