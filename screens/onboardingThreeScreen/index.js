import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import BackTwo from '../../assets/images/back-two.png';
import FlashMessage from "react-native-flash-message";
import { GlobalProvider } from '../../context/GlobalState';
import AuthHandler from '../authHandler'

import { GlobalContext } from '../../context/GlobalState';
import { showMessage } from 'react-native-flash-message'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const OnboardingThreeScreen = (props) => {
    let { setShow, email, setEmail, setPassword, password, setFirstName, firstName, setLastName, lastName, setGender, gender, setdob, dob } = props
    const { setLoader } = useContext(GlobalContext);
    const [heartrate, setHeartrate] = useState('')
    useEffect(() => {
        let year = new Date().getFullYear()
        var dobyear = dob.substring(0, 4);
        let age = year - dobyear;
        if (gender === "male") {
            let heartrat = 208 - (0.7 * age)
            setHeartrate(heartrat)
        }
        else if (gender === "female") {
            let heartrat = 206 - (0.88 * age)
            setHeartrate(heartrat)
        }
    }, []);
    const signupHandler = () => {
        setLoader(true);
        auth().createUserWithEmailAndPassword(email, password).then(data => {
            let uid = data.user.uid;
            let userObj = {
                firstName: firstName,
                lastName: lastName,
                email,
                photoURL: "",
                uid: uid,
                location:"",
                gender,
                DOB: dob
            };
            firestore().collection('users')
                .doc(uid)
                .set(userObj).then(res => {
                    setLoader(false)
                    setEmail("");
                    setPassword("");
                })
                .catch(err => {
                    setLoader(false)
                    showMessage({
                        message: error.message,
                        type: "danger",
                        backgroundColor: "red",
                        color: "white",
                        icon: "danger",
                    });
                })
        }).catch(function (error) {
            setLoader(false)
            showMessage({
                message: error.message,
                type: "danger",
                backgroundColor: "red",
                color: "white",
                icon: "danger"
            });
        });
    };
    return (
        <View style={styles.fullScreenView}>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <View style={styles.viewContainer}>
                <View style={ styles.backButtonContainer }>
                    <TouchableOpacity onPress={() => setShow("onBoardingTwo")}>
                        <Image source={BackTwo} style={styles.backImage} />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleSection}>
                    <Text style={styles.firstTitle}>
                        You’re ready to go!
                    </Text>
                    <Text style={styles.firstSubtitle}>
                        Your maximum heart rate is
                    </Text>
                </View>
                <View style={styles.hrSection}>
                    <Text style={styles.hrTitle}>
                        {heartrate}
                    </Text>
                </View>
                <View style={styles.hrParagraphSection}>
                    <Text style={styles.hrParagraph}>
                        We’ll use this to number determine your heart rate zones during your workout. Make sure
                        your shirt is connected to Bluetooth on your phone.
                    </Text>
                </View>
                <View style={styles.circlePlusButtonSection}>
                    <View style={styles.circleContainer}>
                        <View style={styles.circleDark}></View>
                        <View style={styles.circleDark}></View>
                        <View style={styles.circleLight}></View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.signUpButton}
                            onPress={() => { signupHandler() }}
                        >
                            <LinearGradient
                                colors={['#55CBFF', '#63FFCF']}
                                style={styles.gradient}
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                                <Text style={styles.signUpButtonText}>FINISH</Text>
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
        width: '90%',
        height: '90%'
    },

    backButtonContainer: {
        marginTop: '5%'
    },

    backImage: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        marginBottom: '5%'
    },

    titleSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 100 
    },

    firstTitle: {
        color: 'white',
        // fontSize: 20,
        fontSize: RFPercentage(2.75),
        fontFamily: 'Biryani-Bold',
        textAlign: 'center',
        marginTop: '26%'
    },

    firstSubtitle: {
        color: 'white',
        // fontSize: 12,
        fontSize: RFPercentage(1.5),
        fontFamily: 'Biryani-Light',
        textAlign: 'center',
        marginTop: 12
    },

    hrSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 20
    },

    hrTitle: {
        color: 'white',
        // fontSize: 60,
        fontSize: RFPercentage(7.3),
        fontFamily: 'Biryani-Black',
        textAlign: 'center',
        marginTop: '5%'
    },

    hrParagraphSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 20
    },

    hrParagraph: {
        color: 'white',
        // fontSize: 11,
        fontSize: RFPercentage(1.40),
        fontFamily: 'Biryani-Light',
        textAlign: 'center',
        marginTop: '5%',
        width: '95%'
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
        paddingTop: 14,
        paddingBottom: 14,
        marginTop: 10
    },

    signUpButtonText: {
        color: 'white',
        // fontSize: 14,
        fontSize: RFPercentage(1.75),
        fontFamily: 'Biryani-ExtraBold'
    },

});

export default OnboardingThreeScreen;
