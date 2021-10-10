import { StyleSheet } from 'react-native';

import {appColors} from '../../infrastructure/appColors';


 export default  StyleSheet.create({
  conatiner:{
    flex:1,
    marginHorizontal:10
  },
  input:{
  },
  wrapperTop:{
    flexDirection:'row-reverse',
    justifyContent:'space-between',
    alignItems:'center',
    borderColor: appColors.secondaryColor,
    borderWidth:1,
    backgroundColor: appColors.grey,
    margin:20,
    marginBottom:0,
    borderTopStartRadius:10,
    borderTopEndRadius:10
  },
  wrapperBottom:{
    flexDirection:'row-reverse',
    justifyContent:'space-between',
    alignItems:'center',
    borderColor: appColors.secondaryColor,
    borderWidth:1,
    backgroundColor: appColors.grey,
    margin:20,
    marginTop:0,
    borderBottomStartRadius:10,
    borderBottomEndRadius:10
  },
  wrapper:{
    flexDirection:'row-reverse',
    justifyContent:'space-between',
    alignItems:'center',
    borderColor: appColors.secondaryColor,
    borderWidth:1,
    backgroundColor: appColors.grey,
    margin:20,
    borderRadius:10
  }
})
