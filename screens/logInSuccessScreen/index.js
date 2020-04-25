import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';

const logInSuccessScreen = () => {
    return (
        <View style={ styles.fullScreenView }>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <Text style={ styles.getStartedText }>
                I'M ALL LOGGED IN!
            </Text>
            <TouchableOpacity style={ styles.loginButton }>
                <Text style={ styles.loginButtonText }>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({

    fullScreenView: {
        flex: 1,
        backgroundColor: 'black',
    },

    getStartedText: {
        color: 'white',
        fontWeight: '800',
        fontSize: 25,
        marginTop: 120,
        marginLeft: 30,
        fontFamily: 'Biryani-Black'
    },

    loginButton: {
        backgroundColor: 'white',
        paddingTop: 20,
        // paddingRight: 130,
        paddingBottom: 20,
        // paddingLeft: 130,
        borderRadius: 8,
        width: '84%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 42,
        marginLeft: 30
    },

    loginButtonText: {
        color: 'black',
        fontWeight: '700',
        fontSize: 14
    },

});

export default logInSuccessScreen;