import React, {useState} from 'react';
import {Text,View,TextInput,StyleSheet} from 'react-native';
import {appColors} from '../../infrastructure/appColors';


const Input = ({label='hello', top, onChangeText, value, num })=>{
  const [isFocus, setIsFocus] = useState(false)
  const setSecurity= ()=>  label.includes('PASSWORD') && true
  return(
    <View style={[ styles.container ,isFocus && {backgroundColor: appColors.overlayColor}, top ? {borderTopStartRadius:10, borderTopEndRadius:10, borderBottomWidth:0} : {borderBottomStartRadius:10, borderBottomEndRadius:10, marginBottom:10}]} >
      <Text style={{textAlign:'center', color: appColors.subtitleColor, fontSize:12}}>{label}</Text>
      <TextInput 
          keyboardType={num ? 'numeric': 'default'} 
          style={{textAlign:'center'}} 
          onChangeText={onChangeText} value={value} 
          onFocus={()=> setIsFocus(true)} 
          onEndEditing={()=> setIsFocus(false)} 
          secureTextEntry={setSecurity()}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container:{
    marginHorizontal:20,
    justifyContent:'center',
    alignContent:'center',
    height:50,
    borderColor: appColors.secondaryColor,
    borderWidth: 1,
    backgroundColor:appColors.grey
  }
})

