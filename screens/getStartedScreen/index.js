import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import {GlobalContext} from '../../context/GlobalState';
import {validateEmail} from '../../utils/functions'
import Line from '../../assets/images/line.png';
import Back from '../../assets/images/back.png';
import BackTwo from '../../assets/images/back-two.png';
import FBLogo from '../../assets/images/fb-logo.png';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message'

import firestore from '@react-native-firebase/firestore';
const getStartedScreen = (props) => {
    let {setShow, email, setEmail, emailValidator, setEmailValidator, password, setPassword, passwordValidator, setPasswordValidator} = props;
    const {setLoader, setMainScreen} = useContext(GlobalContext);
    const [message, setMessage] = useState(null);
    const[emailAvailable,setEmailAvailable]=useState(false);

    const showNext = () => {
        if (!email || (email && !validateEmail(email)) || !password || (password.length < 8)) {
            if (!email || (email && !validateEmail(email))) {
                setEmailValidator(true)
            }
            if (!password || (password.length < 8)) {
                setPasswordValidator(true)
            }
        } else {
            firestore()
            .collection('users')
            .where('email', '==',email)
            .get()
            .then(querySnapshot => {
              console.log('Total users: ', querySnapshot.size);
          if(querySnapshot.size>0)
          {
              console.log("already exist user")
              setEmailAvailable(true)
          }
          else{
            setShow("addName")
          }
            });
           
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
            <View style={ styles.viewContainer }>
                <View style={ styles.backButtonContainer }>
                    <TouchableOpacity onPress={() => setShow("")}>
                        <Image source={ BackTwo } style={ styles.backImage }/>
                    </TouchableOpacity>
                </View>
                <View style={ styles.getStartedContainer }>
                    <Text style={ styles.getStartedText }>
                        LET'S GET STARTED
                    </Text>
                    <Text style={ styles.subtitleText }>
                        Enter your email and create a password below
                    </Text>  
                </View>
                <View style={ styles.inputFieldsContainer }>
                    <TextInput
                        style={ styles.inputFieldEmail }
                        placeholder='Email address'
                        placeholderTextColor='#b5b5b5'
                        color='black'
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
                    {
                        emailAvailable &&
                        <Text
                            style={{color: "red"}}>{"Email already exists"}</Text>
                    }
                    <TextInput
                        style={ styles.inputFieldPassword }
                        placeholder='Password'
                        placeholderTextColor='#b5b5b5'
                        color='black'
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
                    <LinearGradient 
                        colors={['#55CBFF', '#63FFCF']} 
                        style={ styles.gradient }
                        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                    >
                        <Text style={ styles.signUpButtonText }>NEXT</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={ styles.breakLinesContainer }>
                    <Image source={ Line } style={ styles.lineImage }></Image>
                    <Text style={ styles.orText }>OR</Text>
                    <Image source={ Line } style={ styles.lineImage }></Image>
                </View>
                <View style={ styles.facebookButtonContainer }>
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
                        <View style={ styles.fbLogofbTextContainer }>
                            <Image source={ FBLogo } style={ styles.fbLogo }></Image>
                            <Text style={ styles.facebookText }>{message === 'Signing in...' ? "Signing in..." : "CONTINUE AS FACEBOOK"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>              
                <View style={ styles.logInOptionContainer }>
                    <Text style={ styles.alreadyHaveAccountText }>
                        Already have an account? &nbsp;
                            <Text style={ styles.logInOption }>
                                Log In
                            </Text>
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

    backButtonContainer: {
        marginTop: '5%'
    },

    backImage: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        marginBottom: '5%'
    },

    getStartedContainer: {
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
        fontFamily: 'Biryani-Regular',
        fontSize: RFPercentage(1.75)
    },

    inputFieldPassword: {
        marginTop: 8,
        backgroundColor: 'white',
        borderRadius: 9,
        padding: 14,
        fontFamily: 'Biryani-Regular',
        fontSize: RFPercentage(1.75)
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
        paddingBottom: 14,
        marginTop: 8
    },

    signUpButtonText: {
        color: 'white',
        // fontSize: 14,
        fontSize: RFPercentage(1.75),
        fontFamily: 'Biryani-ExtraBold'
    },

    breakLinesContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },

    lineImage: {
        width: '45%',
        opacity: 0.2 
    },

    orText: {
        color: 'white',
        fontSize: RFPercentage(1.35),
        fontFamily: 'Biryani-SemiBold',
        paddingLeft: 10,
        paddingRight: 10
    },

    facebookButtonContainer: {
        marginTop: 15,
    },

    facebookButton: {
        backgroundColor: '#147AF8',
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 8,
        width: '100%',   
    },

    fbLogofbTextContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    fbLogo: {
        width: 20,
        marginRight: 6,
        marginBottom: 6,
        resizeMode: 'contain'
    },

    facebookText: {
        color: 'white',
        fontWeight: '700',
        // fontSize: 12,
        fontSize: RFPercentage(1.5),
        fontFamily: 'Biryani-ExtraBold'
    },

    logInOptionContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },

    alreadyHaveAccountText: {
        color: 'white',
        // fontSize: 10,
        fontSize: RFPercentage(1.35),
        fontFamily: 'Biryani-Regular',
        textAlign: 'center',
    },

    logInOption: {
        color: '#6fffec',
        // fontSize: 10,
        fontSize: RFPercentage(1.35),
        fontFamily: 'Biryani-Regular'
    }

});

export default getStartedScreen;