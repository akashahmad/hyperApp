import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../assets/images/hyper-logo-one.png';
import LogoTwo from '../../assets/images/hyper-am-logo-rn-test.png';

const mainAuthScreen = (props) => {
    let {setShow} = props;
    return (
        <View style={ styles.fullScreenView }>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <View style={ styles.viewContainer }>
                <View style={ styles.logoImageContainer }>
                    <Image source={ LogoTwo } style={ styles.logoImageTwo } />
                </View>
                <View style={ styles.buttonsContainer }>
                    <TouchableOpacity style={ styles.signUpButton } onPress={() => setShow("signup")}>
                    <LinearGradient 
                        colors={['#55CBFF', '#63FFCF']} 
                        style={ styles.gradient }
                        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                    >
                        <Text style={ styles.signUpButtonText }>SIGN UP</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.loginButton } onPress={() => setShow("login")}>
                        <Text style={ styles.loginButtonText }>LOG IN</Text>
                    </TouchableOpacity>
                </View>
                <View style={ styles.legalTextContainer }>
                    <Text style={ styles.legalText }>
                        By continuing, you agree to Hyper’s Terms of Service and Privacy Policy.
                    </Text> 
                </View>
            </View>
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

    viewContainer: {
        width: '90%',
        height: '90%'
    },

    logoImageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    logoImageTwo: {
        width: '85%',
        // height: 60,
        height: '25%',
        marginTop: '25%'
    },

    buttonsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120
    },

    signUpButton: {
        width: '100%',
    },

    gradient: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingTop: 14,
        paddingBottom: 14
    },

    signUpButtonText: {
        // fontSize: 14,
        fontFamily: 'Biryani-ExtraBold',
        fontSize: RFPercentage(1.75),
        color: 'white'
    },

    loginButton: {
        backgroundColor: 'white',
        paddingTop: 14,
        paddingBottom: 14,
        borderRadius: 8,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12
    },

    loginButtonText: {
        color: 'black',
        // fontSize: 14,
        fontSize: RFPercentage(1.75),
        fontFamily: 'Biryani-ExtraBold'
    },

    legalTextContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },

    legalText: {
        color: '#FFFFFF',
        // fontSize: 10,
        textAlign: 'center',
        lineHeight: 20,
        fontFamily: 'Biryani-SemiBold',
        fontSize: RFPercentage(1.35)
    }

});

export default mainAuthScreen;
