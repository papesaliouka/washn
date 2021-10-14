import React from 'react';

import Button from '../../components/button/button.component';
import Header from '../../components/header/header.component';
import Spacer from '../../components/spacer/spacer.component';
import { FlatList } from 'react-native';
import LoadsImage from '../../components/loads-image/loads.image.component';

const array = [
    {id:1, name:'White Load'},
    {id:2, name:'Colored Load'},
    {id:3, name:'Mixed Load'},
    {id:4, name:'Delicate Load'},
    {id:5, name:'Linen/Comforter Load'},
]


const GetWashnScreen = ({navigation})=>{
  return(
    <>
      <Header title={`What are we Wash'n`}/>
      <LoadsImage/>
      <Button icon color/>
    </>
  );
}

export default GetWashnScreen;
