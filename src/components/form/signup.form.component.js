import React,{useContext} from 'react';
import Input from '../input/input.signup.component';
import Button from '../button/button.component';
import Spacer from '../spacer/spacer.component';
import {Formik} from 'formik';
import {View} from 'react-native';
import {CustomersContext} from '../../services/customers.context'; 



const SignUpForm = ({navigation})=>{

  
  const {setUserCredentials} = useContext(CustomersContext);
  
      
  const validateInput =(values)=>{
    const {email,password,confirmpassword,fullname,phone,username} = values 
    if(!email || !password || !confirmpassword || !fullname || !phone || !username){
      return alert('All the fields are required')
    }
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
      return alert('please enter a valid email address')
    }
    if(password !== confirmpassword){
      return alert('password did not match')
    }
    setUserCredentials(values);
    return navigation.navigate('Confirmation')
  }
  return(
  <Formik 
     initialValues={{ email: '', password:'', fullname:'', phone:'', confirmpassword:'', username:'' }}
     onSubmit={values =>validateInput(values)}
  >
  {({handleChange, handleSubmit, values})=>(
    <View style={{marginTop:100}}>
      <Input label='FULLNAME' top onChangeText={handleChange('fullname')} value={values.fullname} />
      <Input label='EMAIL ADDRESS' bottom onChangeText={handleChange('email')} value={values.email} />
      <Input label='USERNAME' top onChangeText={handleChange('username')} value={values.username} />
      <Input label='PHONE NUMBER' num bottom onChangeText={handleChange('phone')} value={values.phone} />
      <Input label='PASSWORD' top onChangeText={handleChange('password')} value={values.password} />
      <Input label='CONFIRM PASSWORD' onChangeText={handleChange('confirmpassword')} value={values.confirmpassword} />
      <Spacer h={20} />
      <Button icon color onPress={handleSubmit}/>
    </View>
  )}
  </Formik>
);
}
export default SignUpForm
