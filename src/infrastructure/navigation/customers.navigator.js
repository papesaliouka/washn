import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SigninScreen from '../../screens/signin/signin.screens';
import ConfirmationScreen from '../../screens/confirmation/comfirmation.screen';
import SignupScreen from '../../screens/signup/signup.screen'
import ProfileScreen from '../../screens/profile/profile.screen';
import GetWashnScreen from '../../screens/get-washn/getwashn.screen';
import FragranceScreen from '../../screens/fragrance/fragrance.screen';
import PickupScreen from '../../screens/pickup/pickup.screen';

const Stack = createNativeStackNavigator();

const CustomersNavigator=()=> {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Getwashn"
        screenOptions={{
            headerShown: false
          }}
      >
        <Stack.Screen name='Sign In' component={SigninScreen}/>
        <Stack.Screen name='Sign Up' component={SignupScreen}/>
        <Stack.Screen name='Confirmation' component={ConfirmationScreen}/>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
        <Stack.Screen name='Getwashn' component={GetWashnScreen}/>
        <Stack.Screen name='Fragrance' component={FragranceScreen}/>
        <Stack.Screen name='Pickup' component={PickupScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default CustomersNavigator;
