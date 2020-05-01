import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import React, {useState, useEffect, useContext} from "react";
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
            <TouchableOpacity onPress={() => setShow("signup")}>
                <Image source={ BackTwo } style={ styles.backImage }></Image>
            </TouchableOpacity>
            <Text style={ styles.getStartedText }>
                ADD YOUR NAME
            </Text>
            <Text style={ styles.subtitleText }>
                Enter your first and last name below
            </Text>
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
                    <Text style={ styles.signUpButtonText }>Next</Text>
                </LinearGradient>
            </TouchableOpacity>
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
        marginLeft: 28,
        resizeMode: 'contain'
    },

    getStartedText: {
        color: 'white',
        // fontWeight: '800',
        fontSize: 25,
        marginTop: 20,
        marginLeft: 30,
        fontFamily: 'Biryani-Black'
    },

    subtitleText: {
        color: 'white',
        fontWeight: '300',
        fontSize: 12,
        marginTop: -3,
        marginLeft: 30,
        fontFamily: 'Biryani-ExtraLight',
    },

    inputFieldEmail: {
        width: '84%',
        backgroundColor: 'white',
        borderRadius: 9,
        padding: 14,
        marginLeft: 30,
        marginTop: 40,
        fontFamily: 'Biryani-Regular'
    },

    inputFieldPassword: {
        width: '84%',
        backgroundColor: 'white',
        borderRadius: 9,
        padding: 14,
        marginLeft: 30,
        marginTop: 10,
        fontFamily: 'Biryani-Regular'
    },

    gradient: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginTop: 10
    },

    signUpButton: {
        // paddingTop: 16,
        // // paddingRight: 130,
        // paddingBottom: 16,
        // // paddingLeft: 130,
        // borderRadius: 9,
        // width: '84%',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginLeft: 30,
        // marginTop: 10,
        width: '91.5%'
    },

    signUpButtonText: {
        color: 'white',
        // fontWeight: '700',
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

    alreadyHaveAccountText: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'Biryani-Light',
        marginLeft: 30,
        marginTop: 17,
        textAlign: 'center'
    },

});

export default addNameScreen;