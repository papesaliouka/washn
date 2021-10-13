import React from 'react';
import Header from '../../components/header/header.component';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {appColors} from '../../infrastructure/appColors';
import SignUpForm from '../../components/form/signup.form.component';
const SignupScreen = ({navigation})=>{
  return(
    <View>
      <Header title='Sign Up' onPress={()=> navigation.goBack()} />
      <View>
        <Icon name='pluscircle' size={60} style={{position:'absolute', right:150, top:20}} color={appColors.primaryColor}/>
      </View>
      <SignUpForm navigation={navigation} />
    </View>
  );
}


export default SignupScreen;

