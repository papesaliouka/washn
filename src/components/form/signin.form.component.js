import React from 'react';

import Input from '../input/input.component';
import Button  from '../button/button.component';
import Spacer from '../spacer/spacer.component';
const SignInForm = ({navigation})=>{
  return(
    <>
      <Input top icon iconName='user' label='USERNAME / EMAIL'/>
      <Input bottom icon iconName='lock' label='PASSWORD' secureTextEntry/>
      <Button title='SIGN IN' icon color/>
      <Button title='SIGN UP' onPress={()=> navigation.navigate('Sign Up')} />
      <Spacer h={80} />
      <Button title='JOIN US'/>
 
    </>
  );
};

export default SignInForm;
