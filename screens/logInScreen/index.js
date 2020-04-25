import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import Line from '../../assets/images/line.png';
import Back from '../../assets/images/back.png';

const logInScreen = (props) => {
    let {setShow} = props;
    return (
        <View style={ styles.fullScreenView }>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <TouchableOpacity onPress={() => setShow("")}>
                <Image source={ Back } style={ styles.backImage }/>
            </TouchableOpacity>
            <Text style={ styles.getStartedText }>
                LOG IN
            </Text>
            <TextInput
                style={ styles.inputFieldEmail }
                placeholder='Email address'
            >
            </TextInput>
            <TextInput
                style={ styles.inputFieldPassword }
                placeholder='Password'
            >
            </TextInput>
            <Text style={ styles.forgotPasswordText }>Forgot password?</Text>
            <TouchableOpacity style={ styles.signUpButton }>
                <Text style={ styles.signUpButtonText }>LOG IN</Text>
            </TouchableOpacity>
            <View style={ styles.breakLinesContainer }>
                <Image source={ Line } style={ styles.lineImage }></Image>
                <Text style={ styles.orText }>OR</Text>
                <Image source={ Line } style={ styles.lineImage }></Image>
            </View>
            <TouchableOpacity style={ styles.facebookButton }>
                <Text style={ styles.facebookText }>CONTINUE WITH FACEBOOK</Text>
            </TouchableOpacity>
            <Text style={ styles.alreadyHaveAccountText }>Don't have an account yet? Sign up</Text>
        </View>
    )
};

const styles = StyleSheet.create({

    fullScreenView: {
        flex: 1,
        backgroundColor: 'black',
    },

    backImage: {
        width: 17,
        height: 17,
        marginTop: 60,
        marginLeft: 30
    },

    getStartedText: {
        color: 'white',
        fontWeight: '800',
        fontSize: 25,
        marginTop: 20,
        marginLeft: 30,
        fontFamily: 'Biryani-Black'
    },

    inputFieldEmail: {
        width: '84%',
        backgroundColor: 'white',
        borderRadius: 9,
        padding: 16,
        marginLeft: 30,
        marginTop: 40,
        fontFamily: 'Biryani-Regular'
    },

    inputFieldPassword: {
        width: '84%',
        backgroundColor: 'white',
        borderRadius: 9,
        padding: 16,
        marginLeft: 30,
        marginTop: 10,
        fontFamily: 'Biryani-Regular'
    },

    signUpButton: {
        backgroundColor: '#63FFCF',
        paddingTop: 16,
        // paddingRight: 130,
        paddingBottom: 16,
        // paddingLeft: 130,
        borderRadius: 9,
        width: '84%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginTop: 10,
    },

    signUpButtonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 14,
        fontFamily: 'Biryani-ExtraBold'
    },

    breakLinesContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },

    lineImage: {},

    orText: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Biryani-ExtraBold',
        paddingLeft: 10,
        paddingRight: 10
    },

    facebookButton: {
        backgroundColor: '#147AF8',
        paddingTop: 16,
        // paddingRight: 130,
        paddingBottom: 16,
        // paddingLeft: 130,
        borderRadius: 9,
        width: '84%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginTop: 30,
    },

    facebookText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 14,
        fontFamily: 'Biryani-ExtraBold'
    },

    forgotPasswordText: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'Biryani-Regular',
        marginLeft: 30,
        marginTop: 6,
    },

    alreadyHaveAccountText: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'Biryani-Light',
        marginLeft: 30,
        marginTop: 17,
        textAlign: 'center'
    }

});

export default logInScreen;