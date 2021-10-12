import React from 'react';
import Spacer from '../../components/spacer/spacer.component';
import Header from '../../components/header/header.component';
import {View} from 'react-native';
import Input from '../../components/input/input.signup.component';
import Button from '../../components/button/button.component';
import Icon from 'react-native-vector-icons/AntDesign';
import {appColors} from '../../infrastructure/appColors';
const SignupScreen = ({navigation})=>{
  return(
    <View>
      <Header title='Sign Up' onPress={()=> navigation.goBack()} />
    <View style={{justifyContent:'center'}} >
      <Icon name='pluscircle' size={60} style={{position:'absolute', right:150, top:20}} color={appColors.primaryColor}/>
     <View style={{marginTop:100}}>
      <Input label='FULLNAME' top/>
      <Input label='EMAIL ADDRESS' bottom />
      <Input label='USERNAME' top/>
      <Input label='PHONE NUMBER' number bottom/>
      <Input label='PASSWORD' top />
      <Input label='CONFIRM PASSWORD' />
    </View>
    </View>
      <Button icon color onPress={()=> navigation.navigate('Confirmation')}/>
      <Spacer h={10} />
      <Button title='Generate OTP' />  
    </View>
  );
}


export default SignupScreen;

