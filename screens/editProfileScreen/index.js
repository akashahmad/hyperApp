import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import React, { useState, useContext } from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import BackTwo from '../../assets/images/back-two.png';
import ProfileAvatar from '../../assets/images/profile-avatar.png';
import FlashMessage from "react-native-flash-message";
import { GlobalProvider } from '../../context/GlobalState';
import AuthHandler from '../authHandler'
import storage from '@react-native-firebase/storage';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GlobalContext } from '../../context/GlobalState';
{/* Need to put header up here with Save and Cancel buttons and move edit profile text to header, bc Save button 
currently gets cut off by keyboard. So remove save button and have save and cancel buttons in header like ttyl App */}

const EditProfile = (props) => {

    const { setUser, setId, setLoggedIn, user } = useContext(GlobalContext);
    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState('')
    const [location, setLocation] = useState(user.location)
    const [saveLoader, setSaveLoader] = useState('')
    const [passwordValidator, setPasswordValidator] = useState(false);
    const [emailValidator, setEmailValidator] = useState(false);
    
    const [errorMessage, setErrorMessage] = useState(false);
    const options = {
        title: 'Select Avatar',
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };
    console.log(user)
    const updateProfilePic = () => {

        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                ImageResizer.createResizedImage((Platform.OS === "ios" ? response.uri : response.path), 1000, 700, 'JPEG', 50).then((res) => {

                    const imageRef = storage().ref('profiles').child(user.uid);
                    let data = imageRef.putFile(res.uri);
                    data.on('state_changed', function (snapshot) {
                    });
                    return data;
                }).then(async res => {


                    const url = await storage().ref('profiles/' + user.uid).getDownloadURL();
                    firestore()
                        .collection('users')
                        .doc(user.uid)
                        .update({
                            photoURL: url
                        })

                    //  firebase.database().ref("/users/" + id + "/photoURL").set(res.downloadURL);
                }).catch((err) => {
                    console.log("err", err);
                });
            }
        });

    }
    const update = async () => {
        console.log(location)
        setSaveLoader('SAVING...')
        // if (password) {
        //     if (password.length < 8) {
        //         setSaveLoader('')
        //         setPasswordValidator(true)
        //     }
        //     else {
        //         var users = auth().currentUser;
        //         users.updatePassword(password).then(function () {
        //             console.log("password updated")
        //         }).catch(function (error) {
        //             console.log(error)
        //         });
        //         users.updateEmail(email).then(function () {
        //             console.log("updated")
        //         }).catch(function (error) {
        //             console.log(error)
        //         });

        //         firestore()
        //             .collection('users')
        //             .doc(user.uid)
        //             .update({
        //                 firstName: firstName,
        //                 lastName: lastName,
        //                 email: email,
        //                 location:location
        //             })
        //             .then(() => {

        //                 navigation.goBack()
        //                 console.log('User updated!');
        //             });
        //     }
        //     console.log("password")
        // }
        // else {}
        
            var users = auth().currentUser;
            users.updateEmail(email).then(res=> {
                firestore()
                .collection('users')
                .doc(user.uid)
                .update({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    location:location
                })
                .then(() => {

                    navigation.goBack()
                    console.log('User updated!');
                }); 
        
            }).catch(function (error) {
                console.log(error)
                setSaveLoader('')
                setEmailValidator(true)
                setErrorMessage("email already exists or login again")
            });

           
            
    }
    const { navigation } = props;
    return (

        <View style={styles.fullScreenView}>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <View style={styles.viewContainer}>
                <View style={styles.backButtonContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={BackTwo} style={styles.backImage} />
                    </TouchableOpacity>

                    <Text style={styles.editText}>
                        EDIT PROFILE
                    </Text>
                    <TouchableOpacity onPress={() => update()}>
                        <Text style={styles.saveText}>
                            {saveLoader ? saveLoader : 'SAVE'}
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => updateProfilePic()}>
                    <View style={styles.profileAvatarSection}>
                        <Image source={{ uri: user.photoURL?user.photoURL:avatarImage }} style={styles.avatarImage} style={{ width: 70, height: 70, borderRadius: 70 / 2 }} />
                        <Text style={styles.changeProfileText}>
                            Change Profile Photo
                    </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.oLineSection}>
                    <View style={styles.oLine}></View>
                </View>
                <View style={styles.fieldSection}>
                    <View style={styles.nameFieldContainer}>
                        <Text style={styles.nameTitle}>
                            First Name
                        </Text>
                        <TextInput
                            style={styles.nameInputField}
                            placeholder='Enter name'
                            value={firstName}
                            onChangeText={value => {
                                setFirstName(value)
                            }}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.nameFieldContainer}>
                        <Text style={styles.nameTitle}>
                            Last Name
                        </Text>
                        <TextInput
                            style={styles.nameInputField}
                            placeholder='Enter name'
                            value={lastName}
                            onChangeText={value => {
                                setLastName(value)
                            }}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.lineContainer}>
                        <View style={styles.oLine}></View>
                    </View>
                </View>
                <View style={styles.fieldSection}>
                    <View style={styles.nameFieldContainer}>
                        <Text style={styles.nameTitle}>
                            Email
                        </Text>
                        <TextInput
                            style={styles.nameInputField}
                            placeholder='Enter email address'
                            value={email}
                            onChangeText={value => {
                                setEmail(value)
                            }}
                        >
                        </TextInput>
                        {
                        emailValidator &&
                        <Text
                            style={{color: "red"}}>{errorMessage}</Text>
                    }
                    </View>
                    {/* <View style={styles.nameFieldContainer}>
                        <Text style={styles.nameTitle}>
                            PASSWORD
                        </Text>
                        <TextInput
                            style={styles.nameInputField}
                            placeholder='Enter Password'
                            value={password}
                            onChangeText={value => {
                                setPassword(value)
                            }}
                            secureTextEntry={true}
                        >
                        </TextInput>
                        {
                            passwordValidator &&
                            <Text
                                style={{ color: "red" }}>{"Password length should be 8 characters"}</Text>
                        }
                    </View> */}
                    <View style={styles.lineContainer}>
                        <View style={styles.oLine}></View>
                    </View>
                </View>
                <View style={styles.fieldSection}>

                    <View style={styles.nameFieldContainer}>
                        <Text style={styles.nameTitle}>
                            Location
                        </Text>
                        <TextInput
                            style={styles.nameInputField}
                            placeholder='City, State'
                            value={location}
                            onChangeText={value => {
                                setLocation(value)
                            }}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.lineContainer}>
                        <View style={styles.oLine}></View>
                    </View>
                </View>
                <View style={styles.locationContainer}>
                    <Text style={styles.locationText}>
                        *Your city and state will show up on the leaderboard.
                    </Text>
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
        // marginTop: '5%',
        marginTop: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: 'blue'
    },

    backImage: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
    },

    editText: {
        color: 'white',
        fontSize: RFPercentage(1.2),
        fontFamily: 'Biryani-Bold',
        marginLeft: '2%'
    },

    saveText: {
        color: '#6fffec',
        fontSize: RFPercentage(1.2),
        fontFamily: 'Biryani-Bold'
    },

    profileAvatarSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 50
    },

    avatarImage: {
        marginTop: '13%',
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },

    changeProfileText: {
        color: 'white',
        // fontSize: 10,
        fontFamily: 'Biryani-Regular',
        marginTop: 10,
        fontSize: RFPercentage(1.2)
    },

    oLineSection: {
        // marginTop: 20
        marginTop: '5%'
    },

    oLine: {
        borderBottomColor: '#979797',
        borderBottomWidth: 1,
        opacity: .16
    },

    fieldSection: {
        // marginTop: 10
        marginTop: '1%'
    },

    nameFieldContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    nameTitle: {
        color: 'white',
        // fontSize: 12,
        fontFamily: 'Biryani-Bold',
        fontSize: RFPercentage(1.5)
    },

    nameInputField: {
        backgroundColor: 'black',
        borderRadius: 9,
        padding: 14,
        fontFamily: 'Biryani-Bold',
        color: 'white',
        // fontSize: 12
        fontSize: RFPercentage(1.5)
    },

    lineContainer: {
        // marginTop: 10
        marginTop: '1%'
    },

    locationContainer: {

    },

    locationText: {
        color: 'white',
        // fontSize: 12,
        fontFamily: 'Biryani-Regular',
        fontSize: RFPercentage(1.2),
        opacity: 0.5,
        marginTop: '2%',
        // lineHeight: 15
    },

    gradient: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingTop: 15,
        paddingBottom: 15
    },

});

export default EditProfile;
