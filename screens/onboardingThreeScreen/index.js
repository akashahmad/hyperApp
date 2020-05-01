import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import BackTwo from '../../assets/images/back-two.png';
import FlashMessage  from "react-native-flash-message";
import {GlobalProvider} from '../../context/GlobalState';
import AuthHandler from '../authHandler'

const OnboardingThreeScreen = (props) => {
    let {setShow} = props
    return (
        <View style={ styles.fullScreenView }>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <View style={ styles.viewContainer }>
                <TouchableOpacity onPress={() => setShow("onBoardingTwo")}>
                    <Image source={ BackTwo } style={ styles.backImage }/>
                </TouchableOpacity>
                <View style={ styles.titleSection }>
                    <Text style={ styles.firstTitle }>
                        You’re ready to go!
                    </Text>
                    <Text style={ styles.firstSubtitle }>
                        Your maximum heart rate is
                    </Text>
                </View>
                <View style={ styles.hrSection }>
                    <Text style={ styles.hrTitle }>
                        165
                    </Text>
                </View>
                <View style={ styles.hrParagraphSection }>
                    <Text style={ styles.hrParagraph }>
                        We’ll use this to number determine your heart rate zones during your workout. Make sure
                        your shirt is connected to Bluetooth on your phone.
                    </Text>
                </View>
                <View style={ styles.circlePlusButtonSection }>
                    <View style={ styles.circleContainer }>
                        <View style={ styles.circleDark }></View>
                        <View style={ styles.circleDark }></View>
                        <View style={ styles.circleLight }></View>
                    </View>
                    <View style={ styles.buttonContainer }>
                        <TouchableOpacity style={ styles.signUpButton }>
                            <LinearGradient
                                colors={['#55CBFF', '#63FFCF']}
                                style={ styles.gradient }
                                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                            >
                                <Text style={ styles.signUpButtonText }>FINISH</Text>
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

    titleSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },

    firstTitle: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Biryani-Bold',
        textAlign: 'center'
    },

    firstSubtitle: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Biryani-Light',
        textAlign: 'center',
        marginTop: 12
    },

    hrSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    hrTitle: {
        color: 'white',
        fontSize: 60,
        fontFamily: 'Biryani-Black',
        textAlign: 'center'
    },

    hrParagraphSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    hrParagraph: {
        color: 'white',
        fontSize: 11,
        fontFamily: 'Biryani-Light',
        textAlign: 'center'
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
        borderRadius: 44 / 2,
        backgroundColor: 'white',
        marginLeft: 4,
        marginRight: 4
    },

    circleDark: {
        width: 7,
        height: 7,
        borderRadius: 44 / 2,
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

export default OnboardingThreeScreen;
