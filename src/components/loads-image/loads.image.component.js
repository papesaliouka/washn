import React from 'react';
import {Card} from 'react-native-paper'
import { appColors } from '../../infrastructure/appColors';
const LoadsImage = ()=>{
  return(
    <Card.Cover style={{backgroundColor:'transparent', borderWidth:1, marginHorizontal:40, marginTop:40, marginBottom: 20, borderRadius:10,  borderColor:appColors.primaryColor, height:120}} resizeMode='cover' source={{ uri: '../../../assets/vehicle.png'}} />
  );
}

export default LoadsImage;
