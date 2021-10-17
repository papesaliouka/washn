import React,{useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { appColors } from '../../infrastructure/appColors';

const ButtonControl = ()=>{
  const [count,setCount] = useState(0)
  return(
    <View style={styles.container} >
    <TouchableOpacity style={styles.touch} >
      <Icon name='left' color='white' size={18} />
    </TouchableOpacity>
      <Text style={{color:'white'}} >{count}</Text>
    <TouchableOpacity style={styles.touch} >
      <Icon name='right' color='white' size={18} style={{alignSelf:'flex-end'}} />
    </TouchableOpacity>
    </View>
  );
};

export default ButtonControl;

const styles=StyleSheet.create({
  container:{
    backgroundColor:appColors.primaryColor,
    flexDirection:'row',
    justifyContent:'space-evenly',
    borderRadius:100,
    alignItems:'center',
    width:100,
    height:45
  },
  touch:{backgroundColor:'transparent', width:30, height:30, justifyContent:'center'}
})
