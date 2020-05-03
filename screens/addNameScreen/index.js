import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import React, {useState, useEffect, useContext} from "react";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import {GlobalContext} from '../../context/GlobalState';
import {showMessage} from 'react-native-flash-message'
import Back from '../../assets/images/back.png';
import BackTwo from '../../assets/images/back-two.png';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const addNameScreen = (props) => {
    let {setShow, email, setEmail, password, setPassword} = props;
    const {setMainScreen, setLoader} = useContext(GlobalContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstNameValidator, setFirstNameValidator] = useState(false);
    const signupHandler = () => {

            setLoader(true);
            setMainScreen("signup");
            auth().createUserWithEmailAndPassword(email, password).then(data => {
                let uid = data.user.uid;
                let userObj = {
                    firstName: firstName,
                    lastName: lastName,
                    email,
                    photoURL: "",
                    uid: uid
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
        <View style={ styles.fullScreenView }>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <View style={ styles.viewContainer }>
                <View style={ styles.backButtonContainer }>
                    <TouchableOpacity onPress={() => setShow("signup")}>
                        <Image source={ BackTwo } style={ styles.backImage }></Image>
                    </TouchableOpacity>
                </View>
                <View style={ styles.addNameContainer }>
                    <Text style={ styles.getStartedText }>
                        ADD YOUR NAME
                    </Text>
                    <Text style={ styles.subtitleText }>
                        Enter your first and last name below
                    </Text>
                </View>
                <View style={ styles.inputFieldsContainer }>
                    <TextInput
                        style={ styles.inputFieldEmail }
                        placeholder='First name'
                        autoFocus
                        value={firstName ? firstName : ""}
                        onChangeText={value => {
                            setFirstNameValidator(false);
                            setFirstName(value)
                        }}
                    >
                    </TextInput>
                    {
                        firstNameValidator &&
                        <Text style={{color: "red"}}>First Name is required</Text>
                    }
                    <TextInput
                        style={ styles.inputFieldPassword }
                        placeholder='Last name'
                        onChangeText={value => setLastName(value)}
                        value={lastName ? lastName : ""}
                    >
                    </TextInput>
                    <TouchableOpacity style={ styles.signUpButton }
                                onPress={() => {
                                    if (!firstName) {
                                        setFirstNameValidator(true)
                                    }
                                    else {
                                        setShow("onBoardingOne")
                                    }
                                }}>
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

    backButtonContainer: {
        marginTop: '5%'
    },

    backImage: {
        width: 16,
        height: 16,
        resizeMode: 'contain'
    },

    addNameContainer: {
        marginTop: '5%'
    },

    getStartedText: {
        color: 'white',
        // fontSize: 25,
        fontSize: RFPercentage(3),
        fontFamily: 'Biryani-Black'
    },

    subtitleText: {
        color: 'white',
        fontSize: RFPercentage(1.5),
        // fontSize: 12,
        fontFamily: 'Biryani-ExtraLight',
    },

    inputFieldsContainer: {
        marginTop: '5%'
    },

    inputFieldEmail: {
        backgroundColor: 'white',
        borderRadius: 9,
        padding: 14,
        fontSize: RFPercentage(1.75),
        fontFamily: 'Biryani-Regular'
    },

    inputFieldPassword: {
        marginTop: 8,
        backgroundColor: 'white',
        borderRadius: 9,
        padding: 14,
        fontSize: RFPercentage(1.75),
        fontFamily: 'Biryani-Regular'
    },

    gradient: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingTop: 14,
        paddingBottom: 14,
        marginTop: 8
    },

    signUpButton: {
        width: '100%'
    },

    signUpButtonText: {
        color: 'white',
        // fontSize: 14,
        fontSize: RFPercentage(1.75),
        fontFamily: 'Biryani-ExtraBold'
    }

});

export default addNameScreen;