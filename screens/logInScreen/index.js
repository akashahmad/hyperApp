import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {GlobalContext} from '../../context/GlobalState';
import Line from '../../assets/images/line.png';
import Back from '../../assets/images/back.png';
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
            setMainScreen("login");
            setMessage('Signing in...');
            auth().signInWithEmailAndPassword(email, password)
                .then(confirmResult => {
                    setShow("logInSuccess")
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
            <TouchableOpacity onPress={() => setShow("")}>
                <Image source={ Back } style={ styles.backImage }/>
            </TouchableOpacity>
            <Text style={ styles.getStartedText }>
                LOG IN
            </Text>
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
                <Text style={ styles.signUpButtonText }>LOG IN</Text>
            </TouchableOpacity>
            <View style={ styles.breakLinesContainer }>
                <Image source={ Line } style={ styles.lineImage }></Image>
                <Text style={ styles.orText }>OR</Text>
                <Image source={ Line } style={ styles.lineImage }></Image>
            </View>
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
                              }
                              }
            >
                <Text style={ styles.facebookText }>CONTINUE WITH FACEBOOK</Text>
            </TouchableOpacity>
            <Text style={ styles.alreadyHaveAccountText }>Don't have an account yet? Sign up</Text>
            <Text style={message === 'Signing in...' ? {color: "white"} : {color: "red"}}>{message}</Text>

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