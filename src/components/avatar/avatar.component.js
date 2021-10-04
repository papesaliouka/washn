import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import { appColors } from '../../infrastructure/appColors';

const ProfilePicture = () => (
  <View style={styles.container}>
    <View style={styles.greyCircle}>
      <View style={styles.blueCircle}>
        <Avatar.Image size={200} source={require('../../../assets/profile.png')} />
        <Avatar.Icon size={50} icon='plus' style={styles.icon} />
      </View>
    </View>
  </View>
);
export default ProfilePicture;

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center', marginTop: 64 },
  icon: {
    backgroundColor: appColors.primaryColor,
    position: 'absolute',
    bottom: 15,
    right: 7,
  },
  blueCircle:{
    borderWidth:6,
    borderRadius:150,
    borderColor:appColors.primaryColor,
  },
  greyCircle:{
    borderWidth:12,
    borderRadius:150,
    borderColor:'rgba(211,211,211,0.4)',
  }
});
