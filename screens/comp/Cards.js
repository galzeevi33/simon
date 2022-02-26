import React from 'react';
import { Text, View,Pressable,StyleSheet } from 'react-native';

const Cards = ({color,onPress,flash}) => {
  return (
    
      <Pressable
       onPress={onPress}
       title={`cards`} style={styles.color}></Pressable>
    
  )
}

const styles=StyleSheet.create({

    green:{
        width:100,
        height:100,
    
        backgroundColor:"#008000",
      },
})


export default Cards;