import {StyleSheet,} from 'react-native';
import { appColors } from '../../infrastructure/appColors';
export const styles=StyleSheet.create({
  container:{
    backgroundColor:appColors.primaryColor,
    flexDirection:'row',
    justifyContent:'space-between',
    borderRadius:100,
    alignItems:'center',
    width:70,
    height:35
  },
  touch:{backgroundColor:'transparent',
    width:30,
    height:30,
    justifyContent:'center',
    alignItems:'center'
  }
})
