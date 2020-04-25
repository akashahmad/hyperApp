import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import Logo from '../../assets/images/hyper-logo-one.png';

const mainAuthScreen = (props) => {
    let {setShow} = props;
    return (
        <View style={ styles.fullScreenView }>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <Image source={ Logo } style={ styles.logoImage }/>
            <TouchableOpacity style={ styles.signUpButton } onPress={() => setShow("signup")}>
                <Text style={ styles.signUpButtonText }>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.loginButton } onPress={() => setShow("login")}>
                <Text style={ styles.loginButtonText }>LOG IN</Text>
            </TouchableOpacity>
            <Text style={ styles.legalText }>
                By continuing, you agree to Hyper’s Terms of Service and Privacy Policy.
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({

    fullScreenView: {
        flex: 1,
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    logoImage: {
        width: 220,
        height: 60,
        marginBottom: 130
    },

    signUpButton: {
        backgroundColor: '#63FFCF',
        paddingTop: 20,
        // paddingRight: 130,
        paddingBottom: 20,
        // paddingLeft: 130,
        borderRadius: 8,
        width: '84%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    signUpButtonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 14
    },

    loginButton: {
        backgroundColor: 'white',
        paddingTop: 20,
        // paddingRight: 130,
        paddingBottom: 20,
        // paddingLeft: 130,
        borderRadius: 8,
        width: '84%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12
    },

    loginButtonText: {
        color: 'black',
        fontWeight: '700',
        fontSize: 14
    },

    legalText: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        bottom: 0,
        width: '84%',
        lineHeight: 20,
        position: 'absolute',
        bottom: 40
    }

});

export default mainAuthScreen;
