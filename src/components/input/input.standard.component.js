import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {appColors} from '../../infrastructure/appColors';
const Input = ({title, label}) => {
    return (
        <View style={styles.container} >
            <Icon size={24} style={styles.icon} name='pluscircleo' color={appColors.secondaryColor} />
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.label} >{label}</Text>
            <TextInput style={styles.input} />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        left: 10,
        top: 10,
    },
    container: {
        flexDirection: 'column',
        backgroundColor: 'transparent',
        borderColor: appColors.overlayColor,
        borderWidth: 1,
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        color: appColors.thirdColor,
        textAlign: 'center'
    },
    label: {
        color: appColors.secondaryColor,
        zIndex: 10,
        textAlign: 'center',
        fontSize: 12
    },
    input: {
        backgroundColor: appColors.grey,
        textAlign: 'center',
    }
})
