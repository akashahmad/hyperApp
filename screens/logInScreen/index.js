import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import {GlobalContext} from '../../context/GlobalState';
import Line from '../../assets/images/line.png';
import Back from '../../assets/images/back.png';
import BackTwo from '../../assets/images/back-two.png';
import FBLogo from '../../assets/images/fb-logo.png';
import auth from '@react-native-firebase/auth';
import {validateEmail} from '../../utils/functions'
import {LoginManager, AccessToken} from 'react-native-fbsdk';

const logInScreen = (props) => {
    let {setShow} = props;
    const {setLoader, setMainScreen} = useContext(GlobalContext);
    const [email, setEmail] = useState(null);
    const [emailEmpty, setEmailEmp] = useState(false);
    const [password, setPass] = useState(null);
    const [passwordEmpty, setPassEmp] = useState(null);
    const [message, setMessage] = useState(null);

    const signIn = () => {
        setEmailEmp(!email);
        setPassEmp(!password);
        if (!email || (email && !validateEmail(email)) || !password) {
            if (!validateEmail(email)) {
                setEmailEmp(true)
            }
            return;
        } else {
            setLoader(true);
            setMessage('Signing in...');
            auth().signInWithEmailAndPassword(email, password)
                .then(confirmResult => {
                    setLoader(false);
                    setMessage(null);
                })
                .catch(error => {
                    setLoader(false)
                    setMessage(`Something went wrong please try again!`);
                });
        }
    };
    const setEmailVal = (value) => {
        setEmail(value);
        setEmailEmp(!value);
    };
    const setPassVal = (value) => {
        setPass(value);
        setPassEmp(!value);
    };

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
                <View style={ styles.loginTitleContainer }>
                    <Text style={ styles.getStartedText }>
                        LOG IN
                    </Text>
                </View>
                <View style={ styles.inputFieldsContainer }>
                    <TextInput
                        style={ styles.inputFieldEmail }
                        placeholder='Email address'
                        autoFocus
                        onChangeText={value => setEmailVal(value.replace(/\s/g, ''))}
                        autoCorrect={false}
                        autoCapitalize='none'
                    >
                    </TextInput>
                    {
                        emailEmpty &&
                        <Text style={{color: "red"}}>{email ? "Email is invalid" : "Email field is required"}</Text>
                    }
                    <TextInput
                        style={ styles.inputFieldPassword }
                        placeholder='Password'
                        onChangeText={value => setPassVal(value)}
                        autoCorrect={false}
                        secureTextEntry={true}
                    >
                    </TextInput>
                    {
                        passwordEmpty &&
                        <Text style={{color: "red"}}>Password field is required</Text>
                    }
                    <Text style={ styles.forgotPasswordText }>Forgot password?</Text>
                    <TouchableOpacity style={ styles.signUpButton } onPress={() => signIn()}>
                        <LinearGradient 
                            colors={['#55CBFF', '#63FFCF']} 
                            style={ styles.gradient }
                            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                        >
                            <Text style={ styles.signUpButtonText }>LOG IN</Text>
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
                                  setMainScreen("login");
                                  setMessage('Signing in...');
                                  onFacebookButtonPress()
                                      .then(() => {
                                          console.log('Signed in with Facebook!')
                                          setShow("logInSuccess")
                                          setLoader(false);
                                          setMessage(null);
                                      })
                                      .catch(error => {
                                          setLoader(false);
                                          setMessage(`Something went wrong please try again!`);
                                      })
                              }}
                    >
                        <View style={ styles.fbLogofbTextContainer }>
                            <Image source={ FBLogo } style={ styles.fbLogo }></Image>
                            <Text style={ styles.facebookText }>CONTINUE AS FACEBOOK</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={ styles.logInOptionContainer }>
                    <Text style={ styles.alreadyHaveAccountText }>
                        Don't have an account yet? &nbsp;
                            <Text style={ styles.logInOption }>
                                Sign up
                            </Text>
                    </Text>
                </View>
                <Text style={message === 'Signing in...' ? {color: "white"} : {color: "red"}}>{message}</Text>
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

    loginTitleContainer: {
        // marginTop: '5%',
    },

    getStartedText: {
        color: 'white',
        // fontSize: 25,
        fontSize: RFPercentage(3),
        fontFamily: 'Biryani-Black',
        marginTop: '5%',
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

    forgotPasswordText: {
        color: 'white',
        // fontSize: 10,
        fontSize: RFPercentage(1.35),
        fontFamily: 'Biryani-Bold',
        marginTop: 7,
        marginLeft: 2
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
        marginTop: 12
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
        fontFamily: 'Biryani-Regular',
        fontSize: RFPercentage(1.35),
        textAlign: 'center'
    },

    logInOption: {
        color: '#6fffec',
        // fontSize: 10,
        fontSize: RFPercentage(1.35),
        fontFamily: 'Biryani-Regular'
    }

});

export default logInScreen;