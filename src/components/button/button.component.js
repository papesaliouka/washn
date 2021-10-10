import React from 'react';
import { TouchableOpacity,Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { appColors } from '../../infrastructure/appColors';


const CustomButton = ({onPress, title='CONTINUE', icon, color}) => {
  return (
    <TouchableOpacity style={[styles.container,color && {backgroundColor:appColors.primaryColor}]} onPress={onPress} >
      <Text style={{color: color? 'white': appColors.primaryColor}}>{title}</Text>
      {icon && <Icon name='circledown' size={20} color='white' style={styles.circle}/>}
    </TouchableOpacity>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    marginHorizontal:20,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    height: 40
  },
  circle:{
    position:'absolute',
    right:10,
    rotation:260
  }
})