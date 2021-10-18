import React from 'react';
import {Text, StyleSheet} from 'react-native';

import Header from '../../components/header/header.component';
import Button from '../../components/button/button.component';
import Selector from '../../components/selector/selector.component';
import Spacer from '../../components/spacer/spacer.component';
import {appColors} from '../../infrastructure/appColors';
import CheckControl from '../../components/check-control/checkcontrol.component';

const detergent=[`Natural Wash'n`, `Basic Wash'n`, `Sensitive`];
const dry = [`Machine Dry`, `Air Dry ($2)`];


const FragranceScreen = ({navigation})=>{
  return(
    <>
      <Header title={`What are we wash'n`} onPress={()=> navigation.goBack()}/>
      <Text style={styles.title} >Detergent</Text>
      {detergent.map(item=> <Selector title={item} key={item} style={styles.border} component={<CheckControl item={item} type={'detergent'} />} />)} 
      <Text style={styles.title} >Dry</Text>
      {dry.map(item=> <Selector title={item} key={item}  style={styles.border} component={<CheckControl item={item} type={'dry'} />}  />)}
      <Spacer h={30}/>
      <Button color icon style={{width:180, alignSelf:'center', backgroundColor:appColors.secondaryColor}}  />
   </>
  );
};

export default FragranceScreen;



const styles = StyleSheet.create({
  title:{
    fontSize:32,
    color: appColors.primaryColor,
    textAlign:'center',
    marginTop:40,
    marginBottom:20
  },
  border:{
  borderWidth:0, 
  borderBottomWidth:1,
  borderColor:'rgba(0,0,0,0.1)',
  height:35
  }
})
