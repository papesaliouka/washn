import React from 'react';
import Header from '../../components/header/header.component';
import {View,Text,StyleSheet} from 'react-native';
import Button from '../../components/button/button.component';
import Icon from 'react-native-vector-icons/AntDesign';
import VerifCode from 'rn-verifcode';
import {appColors} from '../../infrastructure/appColors';
const ConfirmationScreen = ({navigation})=>{
  return(
    <View>
      <Header onPress={()=> navigation.goBack()} title='Confirmation' />
      <View style={styles.container}>
        <Text>CONFIRM YOUR ACCOUNT </Text>
        <Text style={{fontSize:10, color: 'grey'}} >You're almost Wash'n</Text>
      </View>
      <Icon name='checkcircle' style={{alignSelf:'center', marginTop:40}} size={72} color={appColors.primaryColor}/>
      <View style={[styles.container],{backgroundColor:'whitesmoke', marginTop:40}}>
        <Text style={{color:appColors.subtitleColor, textAlign:'center'}}>A code has been sent to</Text>
        <Text style={{textAlign:'center', fontSize:32}} >00 000 000 00</Text> 
      </View>
      <VerifCode numberOfDigits={4} style={{borderColor: appColors.overlayColor, borderWidth:0, borderBottomWidth:1, textAlign:'center', marginLeft:60}} />
      <Button icon color/>
    </View>
  );
}

export default ConfirmationScreen;


const styles= StyleSheet.create({
  container:{
    backgroundColor: appColors.overlayColor,
    borderRadius:10,
    marginHorizontal:20,
    marginTop:40,
    justifyContent:'center',
    alignItems:'center',
    height:50
  }
})
