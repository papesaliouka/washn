import React,{useContext} from 'react';

import Button from '../../components/button/button.component';
import Header from '../../components/header/header.component';
import { FlatList, Text, StyleSheet } from 'react-native';
import LoadsImage from '../../components/loads-image/loads.image.component';
import Spacer from '../../components/spacer/spacer.component'
import ButtonControl from '../../components/button-control/button.control.component';
import Selector from '../../components/selector/selector.component';
import {appColors} from '../../infrastructure/appColors';

import {CustomersContext} from '../../services/customers.context';


const array = [
    {id:1, name:'White Loads'},
    {id:2, name:'Colored Load'},
    {id:3, name:'Mixed Load'},
    {id:4, name:'Delicate Load'},
    {id:5, name:'Linen/Comforter Load'},
];


const GetWashnScreen = ({navigation})=>{
  const {totalCount, cost} = useContext(CustomersContext);
  const renderItem = ({item:{name,id}}) => <Selector title={name} component={<ButtonControl key={`but-${id}`} />} key={`key-${id}`} /> 
  return(
    <>
      <Header title={`What are we Wash'n`} onPress={()=> navigation.goBack()} />
      <LoadsImage/>
      <FlatList
        data={array}
        renderItem={renderItem}
      />
      <Selector title='Total Loads' component={<Text style={styles.text} >{totalCount}</Text>} />
      <Selector title='Estimated Cost' component={<Text style={styles.text} >${cost}</Text>} />
      <Spacer h={20} />
      <Button icon color style={{width:200, alignSelf:'center'}} onPress={()=> navigation.navigate('Fragance')} />
      <Spacer h={100} />
    </>
  );
}

export default GetWashnScreen;

const styles = StyleSheet.create({
  text:{
    fontSize:20,
    color: appColors.primaryColor,
    marginRight:40
  }
})
