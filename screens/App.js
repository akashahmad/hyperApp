import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Close from '../assets/images/close.png';
import Bar from '../assets/images/bar.png';
import Clock from '../assets/images/white-clock.png';
import Heart from '../assets/images/white-heart.png';
import Fire from '../assets/images/white-fire.png';
import Share from '../assets/images/share.png';
import FlashMessage  from "react-native-flash-message";
import {GlobalProvider} from '../context/GlobalState';
import AuthHandler from './authHandler'

const App: () => React$Node = () => {
    return (

        <>
        <View style={{flex: 1}}>
            <GlobalProvider>
                <AuthHandler/>
            </GlobalProvider>
            <FlashMessage
                position="top"
                autoHide={true}
                hideOnPress={true}
                duration={5000}
            />
        </View>
            {/*<View style={ styles.fullScreenView }>*/}
                {/*<StatusBar backgroundColor="black" barStyle="light-content"/>*/}
                {/*<View style={ styles.viewContainer }>*/}
                    {/*<Image source={ Close } style={ styles.closeImage }/>*/}
                    {/*<View style={ styles.liveStatsTitleSection }>*/}
                        {/*<Text style={ styles.liveStatsText }>*/}
                            {/*WORKOUT SUMMARY*/}
                        {/*</Text>*/}
                    {/*</View>*/}
                    {/*<View style={ styles.zoneSummarySection }>*/}
                        {/*<Text style={ styles.zoneText }>*/}
                            {/*WARM UP ZONE*/}
                        {/*</Text>*/}
                        {/*<Image source={ Bar } style={ styles.barImage }/>*/}
                        {/*<Text style={ styles.timeText }>*/}
                            {/*5 MINS*/}
                        {/*</Text>*/}
                    {/*</View> */}
                    {/*<View style={ styles.zoneSummarySectionHigher }>*/}
                        {/*<Text style={ styles.zoneText }>*/}
                            {/*FAT BURNING ZONE*/}
                        {/*</Text>*/}
                        {/*<Image source={ Bar } style={ styles.barImage }/>*/}
                        {/*<Text style={ styles.timeText }>*/}
                            {/*10 MINS*/}
                        {/*</Text>*/}
                    {/*</View>*/}
                    {/*<View style={ styles.zoneSummarySectionHigher }>*/}
                        {/*<Text style={ styles.zoneText }>*/}
                            {/*PRO ATHLETE ZONE*/}
                        {/*</Text>*/}
                        {/*<Image source={ Bar } style={ styles.barImage }/>*/}
                        {/*<Text style={ styles.timeText }>*/}
                            {/*15 MINS*/}
                        {/*</Text>*/}
                    {/*</View>*/}
                    {/*<View style={ styles.zoneSummarySectionHigher }>*/}
                        {/*<Text style={ styles.zoneText }>*/}
                            {/*BEAST MODE*/}
                        {/*</Text>*/}
                        {/*<Image source={ Bar } style={ styles.barImage }/>*/}
                        {/*<Text style={ styles.timeText }>*/}
                            {/*2 MINS*/}
                        {/*</Text>*/}
                    {/*</View> */}
                    {/*<View style={ styles.statsRowContainer }>*/}
                        {/*<View style={ styles.individualStatContainer }>*/}
                            {/*<Image source={ Fire } style={ styles.fireImage }/>*/}
                            {/*<Text style={ styles.iconTitle }>*/}
                                {/*CALORIES {"\n"}BURNED*/}
                            {/*</Text>*/}
                            {/*<Text style={ styles.iconStat }>*/}
                                {/*72*/}
                            {/*</Text>*/}
                        {/*</View>*/}
                        {/*<View style={ styles.individualStatContainer }>*/}
                            {/*<Image source={ Clock } style={ styles.fireImage }/>*/}
                            {/*<Text style={ styles.iconTitle }>*/}
                                {/*WORKOUT {"\n"}DURATION*/}
                            {/*</Text>*/}
                            {/*<Text style={ styles.iconStat }>*/}
                                {/*5:04*/}
                            {/*</Text>*/}
                        {/*</View>*/}
                        {/*<View style={ styles.individualStatContainer }>*/}
                            {/*<Image source={ Heart } style={ styles.fireImage }/>*/}
                            {/*<Text style={ styles.iconTitle }>*/}
                                {/*AVERAGE {"\n"}BPM*/}
                            {/*</Text>*/}
                            {/*<Text style={ styles.iconStat }>*/}
                                {/*85*/}
                            {/*</Text>*/}
                        {/*</View>*/}
                    {/*</View> */}
                    {/*<View style={ styles.streakShareContainer }>*/}
                        {/*<View style={ styles.streakContainer }>*/}
                            {/*<Text style={ styles.messageText }>*/}
                                {/*YOUR ROCK!*/}
                            {/*</Text>*/}
                            {/*<Text style={ styles.streakText }>*/}
                                {/*WORKOUT STREAK 3*/}
                            {/*</Text>*/}
                        {/*</View>*/}
                        {/*<View style={ styles.shareContainer }>*/}
                            {/*<Text style={ styles.shareText }>*/}
                                {/*SHARE*/}
                            {/*</Text>*/}
                            {/*<Image source={ Share } style={ styles.shareImage }/>*/}
                        {/*</View>*/}
                    {/*</View> */}
                {/*</View>*/}
            {/*</View>*/}
        </>
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

    zoneSummarySection: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 4
    },

    zoneSummarySectionHigher: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 4
    },

    barImage: {
        width: '60%',
        height: 40,
        resizeMode: 'contain',
        marginLeft: 10
    },

    zoneText: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'Biryani-Bold',
        width: '24%'
    },

    timeText: {
        color: 'white',
        fontSize: 9,
        fontFamily: 'Biryani-Regular',
        marginLeft: 11
    },

    statsRowContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 40
    },

    individualStatContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    fireImage: {
        width: 22,
        height: 22,
        resizeMode: 'contain'
    },

    iconTitle: {
        color: 'white',
        fontSize: 9,
        fontFamily: 'Biryani-Bold',
        marginTop: 8,
        opacity: .42,
        lineHeight: 15,
        textAlign: 'center'
    },

    iconStat: {
        color: 'white',
        fontSize: 22,
        fontFamily: 'Biryani-Bold',
        marginTop: 1
    },

    streakShareContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },

    streakContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    shareContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },

    messageText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Biryani-ExtraBold',
    },

    streakText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Biryani-Regular',
        opacity: .53
    },

    shareText: {
        color: 'white',
        fontSize: 8,
        fontFamily: 'Biryani-Bold',
    },

    shareImage: {
        width: 15,
        height: 15,
        resizeMode: 'contain'
    }

});

export default App;
