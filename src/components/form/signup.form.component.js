import React from 'react';
import Input from '../input/input.signup.component';
import Button from '../button/button.component';
import Spacer from '../spacer/spacer.component';
import {Formik} from 'formik';
import {View} from 'react-native';
const SignUpForm = ({navigation})=>(
  <Formik 
     initialValues={
       { 
         email: '',
         password:'',
         fullname:'',
         phone:'',
         confirmpassword:'',
         username:'',
       }
     }
     onSubmit={values => console.log(values)}
  >
  {({handleChange, handleSubmit, values})=>(
    <View style={{marginTop:100}}>
      <Input label='FULLNAME' top 
          onChangeText={handleChange('fullname')}
          value={values.fullname}
      />
      <Input label='EMAIL ADDRESS' bottom
          onChangeText={handleChange('email')}
          value={values.email}
      />
      <Input label='USERNAME' top
          onChangeText={handleChange('username')}
          value={values.username}
      />
      <Input label='PHONE NUMBER' num bottom
          onChangeText={handleChange('phone')}
          value={values.phone}
      />
      <Input label='PASSWORD' top
          onChangeText={handleChange('password')}
          value={values.password}
      />
      <Input label='CONFIRM PASSWORD'
          onChangeText={handleChange('confirmpassword')}
          value={values.confirmpassword}
      />
      <Button icon color onPress={()=>{handleSubmit() }}/>
      <Spacer h={10} />
      <Button title='Generate OTP' />  
    </View>
  )}
  </Formik>
);

export default SignUpForm
