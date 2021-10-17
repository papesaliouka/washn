import React,{useState, useContext} from 'react';
import {View,Text,  TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {CustomersContext} from '../../services/customers.context';

import {styles} from './button.control.styles'

const ButtonControl = ()=>{

    const [count,setCount] = useState(0);
    const {setTotalCount} = useContext(CustomersContext);

    const increment = ()=> { setCount(prev => prev+1) ; setTotalCount(prev => prev+1)}
  
    const decrement =()=>{
      // decrement the inline number in the button
        setCount(prev=> prev>=1 ? prev-1:0);
      //decrement the total count
        setTotalCount(prev => {
          if( prev>=1 && count>=1){
            return prev -1
          }if( prev >=1 && count==0){
            return prev
          }
          return 0
        }
    )}

    return(
      <View style={styles.container} >
        <TouchableOpacity style={styles.touch} onPress={()=> decrement()} >
          <Icon name='left' color='white' size={14} />
        </TouchableOpacity>
          <Text style={{color:'white'}} >{count}</Text>
        <TouchableOpacity style={styles.touch} onPress={()=>increment()} >
          <Icon name='right' color='white' size={14} />
        </TouchableOpacity>
      </View>
    );
};

export default ButtonControl;


