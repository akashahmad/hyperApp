import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import BackTwo from '../../assets/images/back-two.png';
import FlashMessage  from "react-native-flash-message";
import {GlobalProvider} from '../../context/GlobalState';
import AuthHandler from '../authHandler'

const OnboardingTwoScreen = (props) => {
    let {setShow} = props
    return (
        <View style={ styles.fullScreenView }>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <View style={ styles.viewContainer }>
                <TouchableOpacity onPress={() => setShow("onBoardingOne")}>
                    <Image source={ BackTwo } style={ styles.backImage }/>
                </TouchableOpacity>
                <View style={ styles.inputTextSection }>
                    <Text style={ styles.inputTextTitle }>
                        To get started, we need to calculate your maximum heart rate using your age and gender. 
                    </Text>
                </View>
                <View style={ styles.inputSection }>
                    <TextInput
                        style={ styles.inputFieldBirthday }
                        placeholder='MM / DD / YYYY'
                    >
                    </TextInput>
                    <TextInput
                        style={ styles.inputFieldGender }
                        placeholder='Gender'
                    >
                    </TextInput>
                </View>
                <View style={ styles.circlePlusButtonSection }>
                    <View style={ styles.circleContainer }>
                        <View style={ styles.circleDark }></View>
                        <View style={ styles.circleLight }></View>
                        <View style={ styles.circleDark }></View>
                    </View>
                    <View style={ styles.buttonContainer }>
                        <TouchableOpacity style={ styles.signUpButton }
                                          onPress={() => {
                                              setShow("onBoardingThree")
                                          }}
                        >
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

    backImage: {
        width: 17,
        height: 17,
        resizeMode: 'contain',
        marginTop: 20
    },

    inputTextSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },

    inputTextTitle: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Biryani-Bold',
        textAlign: 'center'
    },

    inputSection: {
        marginTop: 20
    },

    inputFieldBirthday: {
        backgroundColor: 'white',
        borderRadius: 9,
        padding: 14,
        fontFamily: 'Biryani-Regular'
    },

    inputFieldGender: {
        backgroundColor: 'white',
        borderRadius: 9,
        padding: 14,
        fontFamily: 'Biryani-Regular',
        marginTop: 10
    },

    circlePlusButtonSection: {
        marginTop: 20,
        width: '100%'
    },

    circleContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10
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

export default OnboardingTwoScreen;
