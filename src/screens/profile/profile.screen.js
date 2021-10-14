import React,{useContext} from 'react';
import {Text, View} from 'react-native';
import {Divider} from 'react-native-paper';

import Header from '../../components/header/header.component';
import Avatar from '../../components/avatar/avatar.component';
import Spacer from '../../components/spacer/spacer.component';
import Button from '../../components/button/button.component';
import {appColors} from '../../infrastructure/appColors';

import {CustomersContext} from '../../services/customers.context';

const ProfileScreen = ({navigation})=>{

  const {userCredentials:{username}}= useContext(CustomersContext);


  return(
    <View>
      <Header title={`Welcome to Wash'n`} onPress={()=>navigation.goBack()} />
      <Avatar/>
      <Text style={{textAlign:'center', fontSize:32, color: appColors.primaryColor, marginVertical:30}}>{username}</Text>
      <Divider style={{width:280, alignSelf:'center'}}/>
      <Spacer h={30}/>
      <View style={{width:250, alignSelf:'center'}}>
        <Button icon color title={`GET WASH'N`} onPress={()=> navigation.navigate('Getwashn')} />
        <Spacer h={10}/>
        <Button icon color title={'REFER A FRIEND'} />
      </View>
    </View>
  );
};

export default ProfileScreen;
