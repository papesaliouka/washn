import React from 'react';
import Header from '../../components/header/header.component';
import {View} from 'react-native';
import Input from '../../components/input/input.component';
import Button from '../../components/button/button.component';

const SignupScreen = ({navigation})=>{
  return(
    <View>
      <Header title='Sign Up' onPress={()=> navigation.goBack()} />
    <View style={{justifyContent:'center'}} >
      <Input top/>
      <Input bottom />
      <Input top/>
      <Input bottom/>
      <Input top />
      <Input bottom/>
    </View>
      <Button/>
      <Button/>  
    </View>
  );
}


export default SignupScreen;

