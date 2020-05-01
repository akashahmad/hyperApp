import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import BackTwo from '../../assets/images/back-two.png';
import ProfileAvatar from '../../assets/images/profile-avatar.png';
import FlashMessage  from "react-native-flash-message";
import {GlobalProvider} from '../../context/GlobalState';
import AuthHandler from '../authHandler'

{/* Need to put header up here with Save and Cancel buttons and move edit profile text to header, bc Save button 
currently gets cut off by keyboard. So remove save button and have save and cancel buttons in header like ttyl App */}

const EditProfile: () => React$Node = () => {
    return (

        <View style={ styles.fullScreenView }>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <View style={ styles.viewContainer }>
                <Image source={ BackTwo } style={ styles.backImage }/>
                <View style={ styles.liveStatsTitleSection }>
                    <Text style={ styles.liveStatsText }>
                        EDIT PROFILE
                    </Text>
                </View>
                <View style={ styles.profileAvatarSection }>
                    <Image source={ ProfileAvatar } style={ styles.avatarImage }/>
                    <Text style={ styles.changeProfileText }>
                        Change Profile Photo
                    </Text>
                </View>
                <View style={ styles.oLineSection }>
                    <View style={ styles.oLine }></View>
                </View>
                <View style={ styles.fieldSection }>
                    <View style={ styles.nameFieldContainer }>
                        <Text style={ styles.nameTitle }>
                            Name
                        </Text>
                        <TextInput 
                            style={ styles.nameInputField }
                            placeholder='Enter name'
                        >
                        </TextInput>
                    </View>
                    <View style={ styles.lineContainer }>
                        <View style={ styles.oLine }></View>
                    </View>
                </View>
                <View style={ styles.fieldSection }>
                    <View style={ styles.nameFieldContainer }>
                        <Text style={ styles.nameTitle }>
                            Email
                        </Text>
                        <TextInput 
                            style={ styles.nameInputField }
                            placeholder='Enter email address'
                        >
                        </TextInput>
                    </View>
                    <View style={ styles.lineContainer }>
                        <View style={ styles.oLine }></View>
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

    liveStatsTitleSection: {
        marginTop: 20,
        marginLeft: 2
    },

    liveStatsText: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Biryani-Black'
    },

    profileAvatarSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },

    avatarImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },

    changeProfileText: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'Biryani-SemiBold',
        marginTop: 10
    },

    oLineSection: {
        marginTop: 20
    },

    oLine: {
        borderBottomColor: '#979797',
        borderBottomWidth: 1,
        opacity: .16
    },

    fieldSection: {
        marginTop: 10
    },

    nameFieldContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    nameTitle: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Biryani-Bold',
    },

    nameInputField: {
        backgroundColor: 'black',
        borderRadius: 9,
        padding: 14,
        fontFamily: 'Biryani-Bold',
        color: 'white',
        fontSize: 12
    },

    lineContainer: {
        marginTop: 10
    },

    saveButtonSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },

    saveButton: {
        width: '100%'
    },

    gradient: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingTop: 15,
        paddingBottom: 15
    },

    saveText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Biryani-ExtraBold'
    },

});

export default EditProfile;
