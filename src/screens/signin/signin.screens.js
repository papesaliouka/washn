import React from 'react';
import {View} from 'react-native';
import SignInForm from '../../components/form/signin.form.component';
import ProfilePicture from '../../components/avatar/avatar.component';
import Header from '../../components/header/header.component';


const SigninScreen = ({navigation})=>{
    return(
        <View>
            <Header title='SIGN IN' onPress={()=> navigation.goBack()} />  
            <ProfilePicture/>
            <SignInForm navigation={navigation} />
       </View>
    );
}


export default SigninScreen;
