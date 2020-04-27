import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {GlobalContext} from '../../context/GlobalState';
import {validateEmail} from '../../utils/functions'
import Line from '../../assets/images/line.png';
import Back from '../../assets/images/back.png';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message'

const getStartedScreen = (props) => {
    let {setShow, email, setEmail, emailValidator, setEmailValidator, password, setPassword, passwordValidator, setPasswordValidator} = props;
    const {setLoader, setMainScreen} = useContext(GlobalContext);
    const [message, setMessage] = useState(null);

    const showNext = () => {
        if (!email || (email && !validateEmail(email)) || !password || (password.length < 8)) {
            if (!email || (email && !validateEmail(email))) {
                setEmailValidator(true)
            }
            if (!password || (password.length < 8)) {
                setPasswordValidator(true)
            }
        } else {
            setShow("addName")
        }
    }

    async function onFacebookButtonPress() {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }

        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw 'Something went wrong obtaining access token';
        }

        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(facebookCredential);
    }

    return (
        <View style={ styles.fullScreenView }>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <TouchableOpacity onPress={() => setShow("")}>
                <Image source={ Back } style={ styles.backImage }/>
            </TouchableOpacity>
            <Text style={ styles.getStartedText }>
                LET'S GET STARTED
            </Text>
            <Text style={ styles.subtitleText }>
                Enter your email and create a password below
            </Text>
            <TextInput
                style={ styles.inputFieldEmail }
                placeholder='Email address'
                autoFocus
                value={email ? email : ""}
                onChangeText={value => {
                    setEmailValidator(false);
                    setEmail(value.replace(/\s/g, ''))
                }}
            >
            </TextInput>
            {
                emailValidator &&
                <Text
                    style={{color: "red"}}>{emailValidator && email ? "Email is invalid" : "Email field is required"}</Text>
            }
            <TextInput
                style={ styles.inputFieldPassword }
                placeholder='Password'
                value={password ? password : ""}
                onChangeText={value => {
                    setPasswordValidator(false);
                    setPassword(value)
                }}
                secureTextEntry={true}
            >
            </TextInput>
            {
                passwordValidator &&
                <Text
                    style={{color: "red"}}>{password ? "Password length should be 8 characters" : "This field is required"}</Text>
            }
            <TouchableOpacity style={ styles.signUpButton } onPress={() => showNext()}>
                <Text style={ styles.signUpButtonText }>NEXT</Text>
            </TouchableOpacity>
            <View style={ styles.breakLinesContainer }>
                <Image source={ Line } style={ styles.lineImage }></Image>
                <Text style={ styles.orText }>OR</Text>
                <Image source={ Line } style={ styles.lineImage }></Image>
            </View>
            <TouchableOpacity style={ styles.facebookButton }
                              onPress={() => {
                                  setLoader(true);
                                  setMainScreen("signup");
                                  setMessage('Signing in...');
                                  onFacebookButtonPress()
                                      .then(() => {
                                          console.log('Signed in with Facebook!')
                                          setShow("signUpSuccess")
                                          setLoader(false);
                                          setMessage(null);
                                      })
                                      .catch(error => {
                                          setLoader(false);
                                          setMessage(null);
                                          showMessage({
                                              message: error,
                                              type: "danger",
                                              backgroundColor: "red",
                                              color: "white",
                                              icon: "danger",
                                          });
                                      })
                              }}
            >
                <Text style={ styles.facebookText }>{message === 'Signing in...' ? "Signing in..." : "CONTINUE WITH FACEBOOK"}</Text>
            </TouchableOpacity>
            <Text style={ styles.alreadyHaveAccountText }>Already have an account? Log In</Text>
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
        padding: 16,
        marginLeft: 30,
        marginTop: 50,
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

    alreadyHaveAccountText: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'Biryani-Light',
        marginLeft: 30,
        marginTop: 17,
        textAlign: 'center'
    },

});

export default getStartedScreen;