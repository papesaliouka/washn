import React from 'react';

import Button from '../../components/button/button.component';
import Header from '../../components/header/header.component';
import Spacer from '../../components/spacer/spacer.component';
import { FlatList } from 'react-native';
import LoadsImage from '../../components/loads-image/loads.image.component';

import ButtonControl from '../../components/button-control/button.control.component';
import Selector from '../../components/selector/selector.component';
const array = [
    {id:1, name:'White Loads'},
    {id:2, name:'Colored Load'},
    {id:3, name:'Mixed Load'},
    {id:4, name:'Delicate Load'},
    {id:5, name:'Linen/Comforter Load'},
];



const GetWashnScreen = ({navigation})=>{
  console.log(array)
  const renderItem = ({item:{name,id}}) => <Selector title={name} component={<ButtonControl/>}key={id} /> 
  return(
    <>
      <Header title={`What are we Wash'n`} onPress={()=> navigation.goBack()} />
      <LoadsImage/>
      <FlatList
        data={array}
        renderItem={renderItem}
      />
      <Button icon color/>
    </>
  );
}

export default GetWashnScreen;
