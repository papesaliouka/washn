import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfilePicture from './src/components/avatar/avatar.component';
import Header from './src/components/header/header.component';
import Input from './src/components/signin-form/signin-form.component';

export default function App() {
  return (
    <View>
      <Header/>
      <ProfilePicture/>
      <Input/>
      <StatusBar style="auto" />
    </View>
  );
}


