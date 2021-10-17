import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {appColors} from '../../infrastructure/appColors';

const Selector = ({title, component, style})=>{
  return(
    <View style={[styles.container, style]} >
      <Text style={styles.title} >{title}</Text>
      {component}
    </View>
  );
};

export default Selector;

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:60,
    alignItems:'center',
    marginBottom:10
  },
  title:{
    color:appColors.secondaryColor
  }
})
