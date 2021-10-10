import React from 'react';
import {View} from 'react-native';

import ProfilePicture from '../../components/avatar/avatar.component';
import CustomButton from '../../components/button/button.component';
import Header from '../../components/header/header.component';
import Input  from '../../components/input/input.component';
import Spacer from '../../components/spacer/spacer.component';


const SigninScreen = ({navigation})=>{
    return(
        <View>
            <Header title='SIGN IN' onPress={()=> navigation.goBack()} />  
            <ProfilePicture/>
            <Input top icon iconName='user' label='USERNAME / EMAIL'/>
            <Input bottom icon iconName='lock' label='PASSWORD' secureTextEntry/>
            <CustomButton title='SIGN IN' icon color/>
            <CustomButton title='SIGN UP' onPress={()=> navigation.navigate('Sign Up')} />
            <Spacer h={80} />
            <CustomButton title='JOIN US'/>
        </View>
    );
}


export default SigninScreen;
