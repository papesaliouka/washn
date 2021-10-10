import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from '../../screens/signin/signin.screens';

import SignupScreen from '../../screens/signup/signup.screen'

const Stack = createNativeStackNavigator();

const CustomersNavigator=()=> {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Sign In"
        screenOptions={{
            headerShown: false
          }}
      >
        <Stack.Screen name='Sign In' component={SigninScreen}/>
        <Stack.Screen name='Sign Up' component={SignupScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default CustomersNavigator;
