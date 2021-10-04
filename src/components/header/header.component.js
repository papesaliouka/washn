import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { appColors } from '../../infrastructure/appColors';
const Header = ({title='Title'}) => {

  return (
    <Appbar.Header style={{backgroundColor: appColors.primaryColor}}>
      <Appbar.BackAction />
      <Appbar.Content title={title} titleStyle={{textAlign:'center'}}/>
      <Appbar.Action icon="menu"/>
    </Appbar.Header>
  );
};

export default Header;