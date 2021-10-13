import React from 'react';
import {Text, View} from 'react-native';
import {Divider} from 'react-native-paper';

import Header from '../../components/header/header.component';
import Avatar from '../../components/avatar/avatar.component';

import Button from '../../components/button/button.component';

const ProfileScreen = ()=>{
  return(
    <View>
      <Header/>
      <Avatar/>
      <Text>Jane Doe</Text>
      <Divider/>
      <Button/>
      <Button/>
    </View>
  );
};

export default ProfileScreen;
