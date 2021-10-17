import React from 'react';
import {Card} from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { appColors } from '../../infrastructure/appColors';
const LoadsImage = ()=>{
  return(
    <Card.Cover
    style={styles.image} resizeMode='cover' source={require('../../../assets/clothes.png')} />
  );
}

export default LoadsImage;

const styles=StyleSheet.create({
  image:{
    borderWidth:.5,
    marginHorizontal:40,
    marginTop:40,
    marginBottom: 20,
    borderRadius:10,
    borderColor:appColors.primaryColor,
    height:130,
  }
})
