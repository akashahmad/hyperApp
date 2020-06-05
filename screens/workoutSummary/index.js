import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
import React, { useState, useContext } from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import BackTwo from '../../assets/images/back-two.png';
import { GlobalContext } from '../../context/GlobalState';
import StatsClock from '../../assets/images/stats-clock.png';
import StatsHeart from '../../assets/images/stats-heart.png';
import One from '../../assets/images/one.png';
import Two from '../../assets/images/two.png';
import Three from '../../assets/images/three.png';
import Four from '../../assets/images/four.png';
import Fire from '../../assets/images/new-fire.png';
import Mind from '../../assets/images/blown-mind.png';
import Share from '../../assets/images/share.png';
// import FlashMessage  from "react-native-flash-message";
// import {GlobalProvider} from '../../context/GlobalState';
// import AuthHandler from '../authHandler'

const WorkoutSummary = (props) => {
    const { navigation } = props;
    const { user, hrm, calories, setCalories, setSeconds, setMinutes, setWarmUpMinutes, setWarmUpSeconds, setFatBurningMinutes, setFatBurningSeconds, setProAthleteMinutes, setProAthleteSeconds, setBeastMinutes, setBeastSeconds, setIntensity, setIntensityMinutes, setIntensitySeconds, setIntensityMinutes2, setIntensitySeconds2, setAverageHeartRate, avergaeHeartRate,intensity, beastSeconds, beastMinutes, proAthleteSeconds, proAthleteMinutes, fatBurningSeconds, fatBurningMinutes, warmUpSeconds, warmUpMinutes ,minutes,seconds} = useContext(GlobalContext);
const endWorkout=()=>{
    setCalories(0)
    setSeconds(0)
    setMinutes(0)
    setWarmUpMinutes(0)
    setWarmUpSeconds(0)
    setFatBurningMinutes(0)
    setFatBurningSeconds(0)
    setProAthleteMinutes(0)
    setProAthleteSeconds(0)
    setBeastMinutes(0)
    setBeastSeconds(0)
    setIntensity(0)
    setAverageHeartRate(0)
    setIntensityMinutes(0)
    setIntensitySeconds(0)
    setIntensityMinutes2(0)
    setIntensitySeconds2(0)
    navigation.goBack()
}
    return (
        <View style={styles.fullScreenView}>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <View style={styles.viewContainer}>
                <View style={styles.backButtonContainer}>
                    <TouchableOpacity onPress={endWorkout}>
                        <Image source={BackTwo} style={styles.backImage} />
                    </TouchableOpacity>
                </View>
                <View style={styles.liveStatsTitleSection}>
                    <Text style={styles.liveStatsText}>
                        WORKOUT SUMMARY
                    </Text>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.cardContainerRow}>
                        <View style={styles.card}>
                            <Text style={styles.cardtitle}>
                                TOTAL TIME
                            </Text>
                            <View style={styles.statImageContainer}>
                                <Text style={styles.liveStat}>
                                {(minutes) + ':' + ('0' + (seconds)).slice(-2)}
                                </Text>
                                <Image source={StatsClock} style={styles.clockImage} />
                            </View>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.cardtitle}>
                                AVG. HEART RATE
                            </Text>
                            <View style={styles.statImageContainer}>
                                <Text style={styles.liveStat}>
                                {avergaeHeartRate}
                                </Text>
                                <Image source={StatsHeart} style={styles.clockImage} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardContainerRow}>
                        <View style={styles.card}>
                            <Text style={styles.cardtitle}>
                                WARM UP ZONE
                            </Text>
                            <View style={styles.statImageContainer}>
                                <Text style={styles.liveStat}>
                                {(warmUpMinutes) + ':' + ('0' + (warmUpSeconds)).slice(-2)}
                                </Text>
                                <Image source={One} style={styles.clockImage} />
                            </View>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.cardtitle}>
                                FAT BURNING ZONE
                            </Text>
                            <View style={styles.statImageContainer}>
                                <Text style={styles.liveStat}>
                                {(fatBurningMinutes) + ':' + ('0' + (fatBurningSeconds)).slice(-2)}
                                </Text>
                                <Image source={Two} style={styles.clockImage} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardContainerRow}>
                        <View style={styles.card}>
                            <Text style={styles.cardtitle}>
                                PRO ATHLETE ZONE
                            </Text>
                            <View style={styles.statImageContainer}>
                                <Text style={styles.liveStat}>
                                {(proAthleteMinutes) + ':' + ('0' + (proAthleteSeconds)).slice(-2)}
                                </Text>
                                <Image source={Three} style={styles.clockImage} />
                            </View>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.cardtitle}>
                                BEAST MODE
                            </Text>
                            <View style={styles.statImageContainer}>
                                <Text style={styles.liveStat}>
                                {(beastMinutes) + ':' + ('0' + (beastSeconds)).slice(-2)}
                                </Text>
                                <Image source={Four} style={styles.clockImage} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardContainerRow}>
                        <View style={styles.card}>
                            <Text style={styles.cardtitle}>
                                CALORIES BURNED
                            </Text>
                            <View style={styles.statImageContainer}>
                                <Text style={styles.liveStat}>
                                {hrm&&calories?calories:0}
                                </Text>
                                <Image source={Fire} style={styles.clockImage} />
                            </View>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.cardtitle}>
                                INTENSITY SCORE
                            </Text>
                            <View style={styles.statImageContainer}>
                                <Text style={styles.liveStat}>
                                {intensity}
                                </Text>
                                <Image source={Mind} style={styles.clockImage} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.streakShareContainer}>
                    <View style={styles.streakContainer}>
                        <Text style={styles.messageText}>
                            YOUR ROCK!
                        </Text>
                        <Text style={styles.streakText}>
                            WORKOUT STREAK 3
                        </Text>
                    </View>
                    <View style={styles.shareContainer}>
                        <Text style={styles.shareText}>
                            SHARE
                        </Text>
                        <Image source={Share} style={styles.shareImage} />
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

    backButtonContainer: {
        marginTop: '5%'
    },

    backImage: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        marginBottom: '5%'
    },

    liveStatsTitleSection: {
        marginLeft: 2
    },

    liveStatsText: {
        color: 'white',
        // fontSize: 25,
        fontSize: RFPercentage(3),
        fontFamily: 'Biryani-Black',
        marginTop: '5%'
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








    statsContainerWidth: {
        // width: '95%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    zoneInfoSection: {
        // marginTop: 40,
        // marginTop: '12%',
        width: '90%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },

    zoneNamePlusTimeSection: {
        // marginTop: 6
        marginTop: '9%',
    },

    zoneInfoSectionNext: {
        // marginTop: 20,
        // marginTop: '1%',
        width: '90%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },

    zoneTitle: {
        color: 'white',
        // fontSize: 12,
        fontFamily: 'Biryani-Light',
        fontSize: RFPercentage(1.5),
    },

    zoneTime: {
        color: 'white',
        // fontSize: 18,
        fontSize: RFPercentage(2.2),
        fontFamily: 'Biryani-Bold',
        marginTop: 1
    },

    zoneCircleSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '7%',
    },

    circleOneImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },

    gradientFireImage: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
        marginRight: 3
    },

    zonePercentageTitle: {
        color: 'white',
        // fontSize: 10,
        fontSize: RFPercentage(1.25),
        fontFamily: 'Biryani-SemiBold',
        opacity: .49,
        marginTop: 5,
        marginLeft: 5
    },

    timeSubtitle: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Biryani-Bold',
        marginTop: 5
    },

    messageText: {
        color: 'white',
        // fontSize: 10,
        fontSize: RFPercentage(1.5),
        fontFamily: 'Biryani-SemiBold',
        textAlign: 'center',
        marginTop: '12%'
    },

    streakText: {
        color: 'white',
        // fontSize: 10,
        fontSize: RFPercentage(1.5),
        fontFamily: 'Biryani-SemiBold',
        textAlign: 'center',
        opacity: .8,
    },

    streakShareContainer: {
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

    shareText: {
        color: 'white',
        // fontSize: 10,
        fontSize: RFPercentage(1.15),
        fontFamily: 'Biryani-SemiBold',
        marginTop: '5%'
    },

    shareImage: {
        height: 18,
        width: 18,
        resizeMode: 'contain',
        marginTop: '5%'
    }

});

export default WorkoutSummary;