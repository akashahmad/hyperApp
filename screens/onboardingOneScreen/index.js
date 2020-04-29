import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FlashMessage  from "react-native-flash-message";
import {GlobalProvider} from '../context/GlobalState';
import AuthHandler from './authHandler'

const OnboardingOneScreen: () => React$Node = () => {
    return (
        <View style={ styles.fullScreenView }>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <View style={ styles.viewContainer }>
                <View style={ styles.welcomeSection }>
                    <Text style={ styles.welcomeText }>
                        WELCOME
                    </Text>
                </View>
                <View style={ styles.infoSection }>
                    <Text style={ styles.infoParagraph }>
                        Hyper makes it super simple to enhance your workouts using your heart rate zone. 
                    </Text>
                    <Text style={ styles.infoParagraph }>
                        Your heart rate zone gives you valuable feedback on your workout intensity and determines how 
                        hard you’re working during exercise.  
                    </Text>
                    <Text style={ styles.infoParagraph }>
                        The higher the intensity, the faster you’re going to burn calories and get in better shape. Just 
                        put your Hyper shirt on and follow your heart rate zone in the app. 
                    </Text>
                </View>
                <View style={ styles.circlePlusButtonSection }>
                    <View style={ styles.circleContainer }>
                        <View style={ styles.circleLight }></View>
                        <View style={ styles.circleDark }></View>
                        <View style={ styles.circleDark }></View>
                    </View>
                    <View style={ styles.buttonContainer }>
                        <TouchableOpacity style={ styles.signUpButton }>
                        <LinearGradient 
                            colors={['#55CBFF', '#63FFCF']} 
                            style={ styles.gradient }
                            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                        >
                            <Text style={ styles.signUpButtonText }>NEXT</Text>
                        </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
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
        width: '84%',
        height: '90%'
    },

    welcomeSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150
    },

    welcomeText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Biryani-Bold'
    },

    infoSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },

    infoParagraph: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'Biryani-Light',
        textAlign: 'center',
        marginTop: 10
    },

    circlePlusButtonSection: {
        position: 'absolute',
        bottom: 20,
        width: '100%'
    },

    circleContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20
    },

    circleLight: {
        width: 7,
        height: 7,
        borderRadius: 44/2,
        backgroundColor: 'white',
        marginLeft: 4,
        marginRight: 4
    },

    circleDark: {
        width: 7,
        height: 7,
        borderRadius: 44/2,
        backgroundColor: '#686868',
        marginLeft: 4,
        marginRight: 4
    },

    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    signUpButton: {
        width: '100%'
    },

    gradient: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 10
    },

    signUpButtonText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Biryani-ExtraBold'
    },

});

export default OnboardingOneScreen;
