import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import React, {useState} from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import BackTwo from '../../assets/images/back-two.png';
import ProfileAvatar from '../../assets/images/profile-avatar.png';
import FlashMessage  from "react-native-flash-message";
import {GlobalProvider} from '../../context/GlobalState';
import AuthHandler from '../authHandler'

{/* Need to put header up here with Save and Cancel buttons and move edit profile text to header, bc Save button 
currently gets cut off by keyboard. So remove save button and have save and cancel buttons in header like ttyl App */}

const EditProfile= (props) => {
    const {navigation} = props;
    return (

        <View style={ styles.fullScreenView }>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <View style={ styles.viewContainer }>
                <View style={ styles.backButtonContainer }>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={ BackTwo } style={ styles.backImage }/>
                    </TouchableOpacity>
                    <Text style={ styles.editText }>
                        EDIT PROFILE
                    </Text>
                    <TouchableOpacity>
                        <Text style={ styles.saveText }>
                            SAVE
                        </Text>
                    </TouchableOpacity>
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
                <View style={ styles.fieldSection }>
                    <View style={ styles.nameFieldContainer }>
                        <Text style={ styles.nameTitle }>
                            Location
                        </Text>
                        <TextInput 
                            style={ styles.nameInputField }
                            placeholder='City, State'
                        >
                        </TextInput>
                    </View>
                    <View style={ styles.lineContainer }>
                        <View style={ styles.oLine }></View>
                    </View>
                </View>
                <View style={ styles.locationContainer }>
                    <Text style={ styles.locationText }>
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
