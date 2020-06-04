import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import React, {useState} from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import Close from '../../assets/images/close.png';
import Bar from '../../assets/images/bar.png';
import Clock from '../../assets/images/white-clock.png';
import Heart from '../../assets/images/white-heart.png';
import Fire from '../../assets/images/white-fire.png';
import NewClock from '../../assets/images/stats-clock.png';
import NewFire from '../../assets/images/new-fire.png';
import BlownMind from '../../assets/images/blown-mind.png';
import Share from '../../assets/images/share.png';
// import FlashMessage  from "react-native-flash-message";
import {GlobalProvider} from '../../context/GlobalState';
import AuthHandler from '../authHandler'

const WorkoutSummary = (props) => {
    const {navigation} = props; 
    return (
        <View style={ styles.fullScreenView }>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <View style={ styles.viewContainer }>
                <View style={styles.headerSection}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={ Close } style={ styles.closeImage }/>
                    </TouchableOpacity>
                </View>
                <View style={ styles.liveStatsTitleSection }>
                    <Text style={ styles.liveStatsText }>
                        WORKOUT SUMMARY
                    </Text>
                </View>
                <View style={ styles.zoneSummarySection }>
                    <Text style={ styles.zoneTextFirst }>
                        WARM UP ZONE
                    </Text>
                    <Image source={ Bar } style={ styles.barImageFirst }/>
                    <Text style={ styles.timeTextFirst }>
                        5 MINS
                    </Text>
                </View> 
                <View style={ styles.zoneSummarySectionHigher }>
                    <Text style={ styles.zoneText }>
                        FAT BURNING ZONE
                    </Text>
                    <Image source={ Bar } style={ styles.barImage }/>
                    <Text style={ styles.timeText }>
                        10 MINS
                    </Text>
                </View>
                <View style={ styles.zoneSummarySectionHigher }>
                    <Text style={ styles.zoneText }>
                        PRO ATHLETE ZONE
                    </Text>
                    <Image source={ Bar } style={ styles.barImage }/>
                    <Text style={ styles.timeText }>
                        15 MINS
                    </Text>
                </View>
                <View style={ styles.zoneSummarySectionHigher }>
                    <Text style={ styles.zoneText }>
                        BEAST MODE
                    </Text>
                    <Image source={ Bar } style={ styles.barImage }/>
                    <Text style={ styles.timeText }>
                        2 MINS
                    </Text>
                </View> 
                <View style={ styles.cardContainer }>
                    <View style={ styles.cardContainerRow }>
                        <View style={ styles.card }>
                            <Text style={ styles.cardtitle }>
                                DURATION
                            </Text>
                            <View style={ styles.statImageContainer }>
                                <Text style={ styles.liveStat }>
                                    10:22
                                </Text>
                                <Image source={ NewClock } style={ styles.clockImage }/>
                            </View>
                        </View>
                        <View style={ styles.card }>
                            <Text style={ styles.cardtitle }>
                                CALORIES BURNED
                            </Text>
                            <View style={ styles.statImageContainer }>
                                <Text style={ styles.liveStat }>
                                    53
                                </Text>
                                <Image source={ NewFire } style={ styles.clockImage }/>
                            </View>
                        </View>
                    </View>
                </View>
                {/* <View style={ styles.statsRowContainer }>
                    <View style={ styles.individualStatContainer }>
                        <Image source={ NewClock } style={ styles.clockImage }/>
                        <Text style={ styles.iconTitle }>
                            DURATION 
                        </Text>
                        <Text style={ styles.iconStat }>
                            10:22
                        </Text>
                    </View>
                    <View style={ styles.individualStatContainer }>
                        <Image source={ NewFire } style={ styles.caloriesImage }/>
                        <Text style={ styles.iconTitle }>
                            CALORIES
                        </Text>
                        <Text style={ styles.iconStat }>
                            72
                        </Text>
                    </View>
                    <View style={ styles.individualStatContainer }>
                        <Image source={ BlownMind } style={ styles.muscleImage }/>
                        <Text style={ styles.iconTitle }>
                            INTENSITY 
                        </Text>
                        <Text style={ styles.iconStat }>
                            25
                        </Text>
                    </View>
                </View>  */}
                <View style={ styles.streakShareContainer }>
                    <View style={ styles.streakContainer }>
                        <Text style={ styles.messageText }>
                            YOUR ROCK!
                        </Text>
                        <Text style={ styles.streakText }>
                            WORKOUT STREAK 3
                        </Text>
                    </View>
                    <View style={ styles.shareContainer }>
                        <Text style={ styles.shareText }>
                            SHARE
                        </Text>
                        <Image source={ Share } style={ styles.shareImage }/>
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
        width: '90%',
        height: '90%'
    },

    headerSection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        // marginTop: 20,
        marginTop: '7%',
    },

    closeImage: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        // marginTop: 20
    },

    liveStatsTitleSection: {
        // marginTop: 19,
        marginLeft: 2,
    },

    liveStatsText: {
        color: 'white',
        // fontSize: 25,
        fontFamily: 'Biryani-Black',
        marginTop: '5%',
        fontSize: RFPercentage(3),
    },

    zoneSummarySection: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        // marginTop: 25,
        marginLeft: 4
    },

    zoneSummarySectionHigher: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        // marginTop: 15,
        marginLeft: 4
    },

    barImageFirst: {
        width: '60%',
        height: 40,
        resizeMode: 'contain',
        marginLeft: 10,
        marginTop: '7%',
    },

    zoneTextFirst: {
        color: 'white',
        // fontSize: 10,
        fontFamily: 'Biryani-Bold',
        width: '24%',
        fontSize: RFPercentage(1.2),
        marginTop: '7%',
    },

    timeTextFirst: {
        color: 'white',
        // fontSize: 9,
        fontFamily: 'Biryani-Regular',
        marginLeft: 11,
        fontSize: RFPercentage(1.1),
        marginTop: '7%',
    },

    barImage: {
        width: '60%',
        height: 40,
        resizeMode: 'contain',
        marginLeft: 10,
        marginTop: '4%',
    },

    zoneText: {
        color: 'white',
        // fontSize: 10,
        fontFamily: 'Biryani-Bold',
        width: '24%',
        fontSize: RFPercentage(1.2),
        marginTop: '4%',
    },

    timeText: {
        color: 'white',
        // fontSize: 9,
        fontFamily: 'Biryani-Regular',
        marginLeft: 11,
        marginTop: '4%',
        fontSize: RFPercentage(1.1),
    },

    cardContainerRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },

    card: {
        backgroundColor: 'white',
        width: '47%',
        paddingTop: '3%',
        paddingBottom: '2%',
        paddingLeft: '6%',
        paddingRight: '6%',
        borderRadius: 9,
        marginTop: '5%',
        // marginLeft: 10,
        // marginRight: 10 
    },

    cardtitle: {
        color: 'black',
        opacity: .55,
        // fontSize: 12,
        fontFamily: 'Biryani-Regular',
        fontSize: RFPercentage(1.5),
        marginTop: '5%'
    },

    statImageContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },

    liveStat: {
        color: 'black',
        // fontSize: 12,
        fontFamily: 'Biryani-Bold',
        fontSize: RFPercentage(4),
    },

    clockImage: {
        // width: 40,
        // height: 40,
        width: '52%',
        height: '80%',
        // backgroundColor: 'blue',
        resizeMode: 'contain',
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

export default WorkoutSummary;
