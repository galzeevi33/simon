import React from 'react';
import { Text, View } from 'react-native';

const timeOut = (ms) => {
    return new Promise(resolve=>setTimeout(resolve,ms))
  
}
export default timeOut;