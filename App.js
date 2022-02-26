
import React,{useState,useEffect, memo} from 'react';
import Hello  from './screens/Hello';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import Cards from './screens/comp/Cards';
import ScreenA from './components/screenA';
import TableS from './components/TableS';






import ScreenB from './components/ScreenB';

import {
    Text,
    View ,
    Button,
    Linking,
    StyleSheet,
    Pressable,
  
  } from 'react-native';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import timeOut from './utils/utils';

const Stack=createStackNavigator();

const ScreenG=()=>{
  return(
    <View>
      <Text>asta la vista</Text>
    </View>
  )
}



 const App = () => {
   return(
     
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen
         name="ScreenA" 
         
         component={ScreenA}/>

          <Stack.Screen
         name="TableS" 
         
         component={TableS}
         
         />


  
       </Stack.Navigator>


     </NavigationContainer>
   )

 }




  


export default App;


