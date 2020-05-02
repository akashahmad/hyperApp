import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
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
                </View>
                {/* <Image source={ LogoTwo } style={ styles.logoImageTwo }/>
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
                <Text style={ styles.legalText }>
                    By continuing, you agree to Hyper’s Terms of Service and Privacy Policy.
                </Text>  */}
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
        height: '90%',
        backgroundColor: 'blue'
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
        marginTop: '20%'
    },

    buttonsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    signUpButton: {
        width: '100%',
    },

    gradient: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingTop: '4%',
        paddingBottom: '4%'
    },

    signUpButtonText: {
        color: 'white',
        fontSize: 14,
        // fontSize: '87%',
        fontFamily: 'Biryani-ExtraBold'
    },

    // signUpButton: {
    //     backgroundColor: '#63FFCF',
    //     paddingTop: 20,
    //     paddingBottom: 20,
    //     borderRadius: 8,
    //     width: '84%',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },

    loginButton: {
        backgroundColor: 'white',
        paddingTop: 15,
        // paddingRight: 130,
        paddingBottom: 15,
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
        // fontWeight: '700',
        fontSize: 14,
        fontFamily: 'Biryani-ExtraBold'
    },

    legalText: {
        color: '#FFFFFF',
        // fontWeight: '500',
        fontSize: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        // bottom: 0,
        width: '84%',
        lineHeight: 20,
        position: 'absolute',
        bottom: 40,
        fontFamily: 'Biryani-Bold'
    }

});

export default mainAuthScreen;
