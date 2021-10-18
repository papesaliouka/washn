import React,{useState,useContext} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


import {appColors} from '../../infrastructure/appColors';
import {CustomersContext} from '../../services/customers.context';


const CheckControl = ({item, type})=>{
  const {dryList, setDryList, detergentList, setDetergentList} = useContext(CustomersContext);
  const [checked,setChecked] = useState(false);
  
  const validate = (item, data, updater) =>{
      if(!data.includes(item)){
        return updater(prev => [...prev, item])
      }else{
        return updater(prev => prev.filter(elem=> elem !==item))
      }
  } 


  const updateData = ()=>{
      if(type=='dry'){
        return validate(item, dryList, setDryList)
      }
      if(type=='detergent'){
        return validate(item, detergentList, setDetergentList)
      }
  }


  return(
    <Icon color={appColors.secondaryColor} size={32} name={checked ? 'check-circle' : 'circle-o' } onPress={()=> { setChecked(!checked); updateData()} } />
  );
};

export default CheckControl
