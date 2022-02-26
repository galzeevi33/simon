import React,{useState,useEffect, memo} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import Store from 'react-native-store';

import ScreenB from './ScreenB';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';




import {
    Text,
    View ,
    Button,
    Linking,
    StyleSheet,
    Pressable,
    TouchableOpacity,
  
  
  } from 'react-native';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import timeOut from '../utils/utils';
import Cards from '../screens/comp/Cards';

//const jfile=require('jsonfile');
//const jfile = require('../newPerson.json');
//import * as data from '../newPerson.json';

const DB = {
  'foo': Store.model('foo'),
  'bar': Store.model('bar')
}



//const word = data.name;

const ScreenA = ({navigation}) => {
    
    
    var whichColor;
    
  
    const [appTurn,setappTurn]=useState(false);
    const [isNew,setIsNew]=useState(false);
    const [userTurn,setuserTurn]=useState(false);
    const [isWait,setIsWait]=useState(false);
    const [IsPress,setIsPress]=useState(false);
    const [IsStartPress,setIsStartPress]=useState(false);
    const [score,setScore]=useState(0);
    const incrementScore = () => setScore(score + 1);
  
    //const [IsZero,setIsZero]=useState(0);
  
  
    //counte array size
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
  
    
  
    const [greenPress,setGreenPress]=useState(false);
    const [bluePress,setBluePress]=useState(false);
    const [redPress,setRedPress]=useState(false);
    const [yellowPress,setYellowPress]=useState(false);
  
  
   
  
  //player + app arrays
    const [userArray, setuserArray] = useState([]);
    const [appArray, setappArray] = useState([]);
    
  
  
  
    const colorArr=[0,1,2,3];
    const [isFlashG,setIsFlashG]=useState(false);
    const [isFlashB,setIsFlashB]=useState(false);
    const [isFlashR,setIsFlashR]=useState(false);
    const [isFlashY,setIsFlashY]=useState(false);
   

///////////........................testim///////////////////


/*
    const saveArticle = async (key, value) =>{
      try {
        await AsyncStorage.setItem(key, value);
        getAllData();
      } catch (e) {
        console.log(e);
      }
    };

    const getAllData = () =>{
      AsyncStorage.getAllKeys().then((keys) => {
        return AsyncStorage.multiGet(keys)
          .then((result) => {
            console.log(result);
          }).catch((e) =>{
            console.log(e);
          });
      });
    }*/

//////////////////////////////////////////////////////////////////

const onPressScores=()=>{
  navigation.navigate('TableS')
}


const fetchAllItems = async () => {
  try {
      const keys = await AsyncStorage.getAllKeys()
      const items = await AsyncStorage.multiGet(keys)
      console.log(items)

      return items
  } catch (error) {
      console.log(error, "problemo")
  }
}



saveData=()=>{
  let user = 'fhgj';
  
  AsyncStorage.setItem('user', user);
  AsyncStorage.setItem('user2',"john");

}
displayData = async () => {
  try {
    let data = await AsyncStorage.getItem('user');
    //let user2 = await AsyncStorage.getItem('user2');
    //let userAll = await AsyncStorage.getAllKeys();
    alert(data)
    console.log(data)
    //console.log(user2)
    //console.log(userAll)
  }
  catch(error){
    alert(error);
    
  }
}


function ReptileListItems() {
  const reptiles = ["alligator", "snake", "lizard"];

  return reptiles.map((reptile) => <li>{reptile}</li>);
}




     
  
    
  
    const startHandle=async()=>{
  
  
      
      setuserArray([]);
      setappArray([]);
      setCounter(1)
      let newColor=Math.floor(Math.random()*4);
     //setappArray(newColor);
     
      setappArray([...appArray, newColor]);
      
      await timeOut(1000);
      let flashColor=[newColor]
      flash(flashColor)
  
      console.log(appArray+"start handle")
      setuserTurn(true);
      setappTurn(false);
      let testi=fetchAllItems();
      console.log(testi);

 

      

      
      
    



      



      
      
      
      
  
    }
  
  
  
  
   const isEqual=(arr1,arr2)=>
    {
  
      
      // If length is not equal
      if(arr1.length!=arr2.length)
       return "False";
      else
      {
       
      // Comparing each element of array
       for(var i=0;i<arr1.length;i++)
       if(arr1[i]!=arr2[i])
        return "False";
        return "True";
      }
    }
  
  
  
  
    const flash=async(arr)=>{
      for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
          setIsFlashG(true)
        }
        else if(arr[i]==1){
          setIsFlashB(true);
        }
        else if(arr[i]==2){
          setIsFlashR(true);
        }
        else if(arr[i]==3){
          setIsFlashY(true);
        }
    
        await timeOut(1000);
    
        if(arr[i]==0){
          setIsFlashG(false)
        }
        else if(arr[i]==1){
          setIsFlashB(false);
        }
        else if(arr[i]==2){
          setIsFlashR(false);
        }
        else if(arr[i]==3){
          setIsFlashY(false);
        }
    
        await timeOut(1000);
      }
    
    
    }
  
  
  
  
  //appPlay
  /*
    useEffect(()=>{
      if(appTurn&&!userTurn){
   
        let newColor=Math.floor(Math.random()*4); 
        setTh(newColor)
        console.log("start");
        console.log(appArray)
         flash(appArray);
         //decrementCounter()
         console.log(counter+"counter start")
   
         
         setappTurn(false);
         setuserTurn(true)
         setIsNew(false)
  
  
      }
    })*/
  
    
  ///presser
    const userPlay=(num)=>{
      if(num===0)
      setGreenPress(true);
      if(num===1)
      setBluePress(true);
      if(num===2)
      setRedPress(true);
      if(num===3)
      setYellowPress(true);
  
      decrementCounter()
      console.log(counter+"presser counter")
  
  
      
  
    }
  
  
  
  
  //player
    useEffect(()=>{
      if(!appTurn&&userTurn&&(greenPress||bluePress||redPress||yellowPress)){
      if(greenPress){
        console.log("check2")
        whichColor=0
        console.log(whichColor+"player whichColor")
      }
      if(bluePress){
        whichColor=1
        console.log(whichColor+"player whichColor")
      }
      if(redPress){
        whichColor=2
        console.log(whichColor+"player whichColor")
      }
      if(yellowPress){
        whichColor=3
        console.log(whichColor+"player whichColor")
      }
        let toFlash=[whichColor];
        flash(toFlash);
  
        
    
  
        //await timeOut(1000);
        setuserArray(oldArray => [...oldArray, whichColor]);
  
  
        console.log(userArray+"player array")////print
        console.log(appArray+"color array")////print
        console.log(counter)
        setGreenPress(false)
        setBluePress(false)
        setRedPress(false)
        setYellowPress(false)
        setIsWait(true)
        
        
  
  
    }
      
      
    },)
  
  
  //compare
    useEffect(()=>{
      if(counter===0&&isWait){
        setappTurn(true);
        setuserTurn(false);
        console.log("is zero if")
        if(isEqual(appArray,userArray)){
          console.log("isEqule=true")
          setuserArray([]);
          let newColor=Math.floor(Math.random()*4); 
           
         
          setappArray([...userArray, newColor]);
         // setappArray( arr => [...arr, `${newColor}`]);
          console.log(appArray+"color array");
          setCounter(appArray.length)
          console.log(counter);
          incrementScore();
          
          flash(appArray);
          setappTurn(false);
          setuserTurn(true);
          setIsWait(false);
          console.log("check1")
          
          
          
  
  
  
        }
  
        else{
          console.log("is zero else")
          setScore(0);
          setappArray([])
          setuserArray([])
          setappTurn(true);
          setuserTurn(false);
          setIsWait(false)
          
        }
      }
    })
  
   /* useEffect(()=>{
      if(appTurn&&!isNew&&!userTurn){
        
  
      }
    })*/
  
  
  
    /*  const fetchData = async () => {
      await sleep(1000);*/
  
    /*const addColor=async ()=>{
      let newColor=colorArr[Math.floor(Math.random()*4)];
      memoColor.push(newColor);
      size=memoColor.length;
  
    }*/
  
  /*useEffect(()=>{
  
    if(appTurn&&isNew){
  
      addColor();
      console.log(memoColor)
  
      flash(memoColor);
      //setappTurn(false);
      setIsNew(false);
      //size++;
      
      //console.log(size)
      }
  
  })*/
  
  
  
  
  /*const userPlay=async(num)=>{
    if(appTurn&&userTurn){
    console.log(memoColor)
  
    userColor.push(num)
    await flash(userColor)
    setuserTurn(false);
    //console.log(userColor)
   //console.log(size)
    console.log(memoColor)
   
   if(size===0){
     if(userColor===memoColor){
      // console.log(userColor)
       //console.log(memoColor)
       
       let newColor=colorArr[Math.floor(Math.random()*4)];
       memoColor.push(newColor);
       console.log(memoColor)
       size=memoColor.length;
       //console.log(memoColor)
       //console.log(size)
  
     }
   
  
  }
  }}*/
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*useEffect(()=>{
    if(appTurn&& !isNew ){
     let newColor=colorArr[Math.floor(Math.random()*4)];
     memoColor.push(newColor);
     size=memoColor.length;
     flash(memoColor);
     score++;
     flag=0;
  
      
    }
  })*/
  
  
  
     /*else{
       //console.log("Game Over");
       //send score to json
       score=0;
       setappTurn(false);
       setIsNew(true);
       memoColor=[];
       
  
    }*/
  
  
  
  
  
    
   
  
  
  
  
  
  
  
  
   
  
  
  
  
  
  
  
  
  
  
  
   /*const displayColors=async function(){
      for(let i=0;i<play.colors.length;i++){
        setFlashColor(play.colors[i]);
        await timeOut(1000);
        setFlashColor("");
        await timeOut(1000);
      }
    }*/
  
  
  
  
  
  
  
  
  
    
  
    return (
  
      <View>
       
  
       <View style={styles.cardWrapper}>
         
         <Pressable title={"green"} onPress={() => userPlay(0)} style={[styles.green, isFlashG ? styles.flashG : styles.green]}></Pressable>
         <Pressable title="blue" onPress={() => userPlay(1)} style={[styles.blue, isFlashB ? styles.flashB : styles.blue]}></Pressable>
         <Pressable title="red" onPress={() => userPlay(2)} style={[styles.red, isFlashR ? styles.flashR : styles.red]}></Pressable>
         <Pressable title="yellow" onPress={() => userPlay(3)} style={[styles.yellow, isFlashY ? styles.flashY : styles.yellow]}></Pressable>
         <Button  title="start Button" color={"#8b008b"} style={styles.startButton} onPress={startHandle}></Button>
         <TouchableOpacity onPress={this.saveData}>
            <Text>Click me to save data</Text>
          </TouchableOpacity>
         <TouchableOpacity onPress={this.ReptileListItems}>
            <Text>Click me to display data</Text>
          </TouchableOpacity>
         <TouchableOpacity onPress={this.fetchAllItems}>
            <Text>Click me to render all data</Text>
          </TouchableOpacity>
          <Pressable
           onPress={onPressScores}>
             <Text> Asta la vista</Text>

          </Pressable>

          


         
         
         
        
       </View>
       
      

    
     
       
  
      </View>
     
        
  
              
        
        
      
   
      
  
     
      
  
    );
  
  
  
  
  };

  const styles=StyleSheet.create({

    green:{
      width:100,
      height:100,
  
      backgroundColor:"#008000",
    },
  
    blue:{
      width:100,
      height:100,
  
      backgroundColor:"#0000ff",
    },
  
    red:{
      width:100,
      height:100,
  
      backgroundColor:"#ff0000",
    },
  
    yellow:{
      width:100,
      height:100,
  
      backgroundColor:"#ffff00",
    },
  
    flashG:{
      width:100,
      height:100,
  
      backgroundColor:"#00ff00",
      
  
    },
  
    flashB:{
      width:100,
      height:100,
  
      backgroundColor:"#40e0d0",
      
  
    },
  
    flashR:{
      width:100,
      height:100,
  
      backgroundColor:"#8b0000",
      
  
    },
  
    flashY:{
      width:100,
      height:100,
  
      backgroundColor:"#ffa500",
      
  
    },
  
    
  
    startButton:{
      top:400,
  
     
    },
  
  
    
  
    cardWrapper:{
      //display:"flex",
      width:200,
      flexWrap:"wrap",
      flexDirection:"row",
      //alignItems:"stretch",
      justifyContent:"center",
      alignSelf:"center",
      position:"absolute",
      top: 200,
      left: 100,
      
      
      
    
  
      
  
    },
  
  })
export default ScreenA;