import  React,{useState} from 'react';
import { TextInput, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import styles from './input.styles';

import {appColors} from '../../infrastructure/appColors';



const Input = ({top,bottom, icon,iconName, label, style, onChange, ...otherprops}) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={[top ? styles.wrapperTop: bottom ? styles.wrapperBottom: styles.wrapper, isFocus && {backgroundColor: appColors.overlayColor}]} >
      <View style= {styles.conatiner}>
       {label && <Text style={{color:appColors.secondaryColor, marginTop:10}} >{label}</Text>}
        <TextInput style={[styles.input]} {...otherprops} onFocus={()=>setIsFocus(true)} onEndEditing={()=> setIsFocus(false)} onChange={onChange}/>
      </View>
      {icon && <Icon name={iconName} size={20} color={appColors.secondaryColor} style={{marginHorizontal:10}}/>}
    </View>
  );
};

export default Input;


