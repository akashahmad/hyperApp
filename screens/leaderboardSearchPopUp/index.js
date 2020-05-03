import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import React, {useState} from 'react';
// import LinearGradient from 'react-native-linear-gradient';
import Close from '../../assets/images/close.png';
import Search from '../../assets/images/search.png';
import ProfileAvatar from '../../assets/images/profile-avatar.png';
// import FlashMessage  from "react-native-flash-message";
// import {GlobalProvider} from '../../context/GlobalState';
// import AuthHandler from '../authHandler'

const LeaderboardSearchPopUp= (props) => {
    const {navigation} = props;
    return (
        <View style={ styles.fullScreenView }>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <View style={ styles.viewContainer }>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={ Close } style={ styles.closeImage }/>
                </TouchableOpacity>
                <View style={ styles.liveStatsTitleSection }>
                    <Text style={ styles.liveStatsText }>
                        SEARCH USER
                    </Text>
                </View>
                <View style={ styles.oLineSection }>
                    <View style={ styles.oLine }></View>
                </View>
                <View style={ styles.textInputFieldContainer }>
                    <Image source={ Search } style={ styles.searchImage }/>
                    <TextInput
                        style={ styles.inputFieldBirthday }
                        placeholder='Search'
                    >
                    </TextInput>
                </View>
                <View style={ styles.leaderboardRowInfo }>
                    <Image source={ ProfileAvatar } style={ styles.avatarImage }/>
                    <Text style={ styles.userNameText }>
                        DANNY M.
                    </Text>
                </View>
                <View style={ styles.leaderboardRowInfoHigher }>
                    <Image source={ ProfileAvatar } style={ styles.avatarImage }/>
                    <Text style={ styles.userNameText }>
                        DANNY M.
                    </Text>
                </View>
                <View style={ styles.leaderboardRowInfoHigher }>
                    <Image source={ ProfileAvatar } style={ styles.avatarImage }/>
                    <Text style={ styles.userNameText }>
                        DANNY M.
                    </Text>
                </View>
                <View style={ styles.leaderboardRowInfoHigher }>
                    <Image source={ ProfileAvatar } style={ styles.avatarImage }/>
                    <Text style={ styles.userNameText }>
                        DANNY M.
                    </Text>
                </View>
                <View style={ styles.leaderboardRowInfoHigher }>
                    <Image source={ ProfileAvatar } style={ styles.avatarImage }/>
                    <Text style={ styles.userNameText }>
                        DANNY M.
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
        width: '84%',
        height: '90%'
    },

    closeImage: {
        width: 14,
        height: 14,
        resizeMode: 'contain',
        marginTop: 20
    },

    liveStatsTitleSection: {
        marginTop: 19,
        marginLeft: 2,
    },

    liveStatsText: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Biryani-Black'
    },

    oLineSection: {
        marginTop: 10
    },

    oLine: {
        borderBottomColor: '#979797',
        borderBottomWidth: 1,
        opacity: .35
    },

    textInputFieldContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 24,
        borderRadius: 9,
    },

    searchImage: {
        width: 10,
        height: 10,
        resizeMode: 'contain',
        opacity: .24,
        padding: 8,
        marginLeft: 13,
        marginBottom: 2
    },

    inputFieldBirthday: {
        backgroundColor: 'white',
        borderRadius: 9,
        // padding: 14,
        fontSize: 13,
        fontFamily: 'Biryani-SemiBold',
        flex: 1,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#fff'
    },

    leaderboardRowInfo: {
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 25
    },

    leaderboardRowInfoHigher: {
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 18
    },

    userNameText: {
        color: 'white',
        fontSize: 9,
        fontFamily: 'Biryani-ExtraBold',
        marginLeft: 10
    },

    avatarImage: {
        width: 37,
        height: 37,
        resizeMode: 'contain',
        opacity: .30
    },

});

export default LeaderboardSearchPopUp;
