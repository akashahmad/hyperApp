import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import React, {useState} from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import BackTwo from '../../assets/images/back-two.png';
import Calories from '../../assets/images/gradient-fire.png';
import Clock from '../../assets/images/gradient-clock.png';
import Heart from '../../assets/images/gradient-heart.png';
import Muscle from '../../assets/images/gradient-muscle.png';

const Leaderboard = (props) => {
    const {navigation} = props;
    return (
        
        <View style={ styles.fullScreenView }>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <View style={ styles.viewContainer }>
                <View style={ styles.backButtonContainer }>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={ BackTwo } style={ styles.backImage }/>
                    </TouchableOpacity> 
                </View>
                <View style={ styles.liveStatsTitleSection }>
                    <Text style={ styles.liveStatsText }>
                        PAIR SHIRT
                    </Text>
                </View>
                <View style={ styles.pairButtonSection }>
                    <TouchableOpacity style={ styles.signUpButton }>
                        <LinearGradient 
                            colors={['#55CBFF', '#63FFCF']} 
                            style={ styles.gradient }
                            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                        >
                            <Text style={ styles.signUpButtonText }>CONNECT SHIRT</Text>
                        </LinearGradient>
                    </TouchableOpacity>
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
        marginTop: '5%'
    },

    backImage: {
        width: 16,
        height: 16,
        resizeMode: 'contain'
    },

    liveStatsTitleSection: {
        // marginTop: 20,
        // marginLeft: 2,
    },

    liveStatsText: {
        color: 'white',
        // fontSize: 25,
        fontSize: RFPercentage(3),
        fontFamily: 'Biryani-Black',
        marginTop: '5%',
    },

    pairButtonSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
        // backgroundColor: 'blue'
    },

    signUpButton: {
        width: '70%'
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

});

export default Leaderboard;
