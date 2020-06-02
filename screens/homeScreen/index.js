import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput, Dimensions } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import Menu from '../../assets/images/menu.png';
import SwitchToStats from '../../assets/images/switch-to-stats.png';
import Clock from '../../assets/images/clock.png';
import Calories from '../../assets/images/calories.png';
import Muscle from '../../assets/images/muscle.png';
import CircleOne from '../../assets/images/zone-circle.png';
import Signal from '../../assets/images/signal.png';
import Pause from '../../assets/images/pause.png';
import NewClock from '../../assets/images/new-clock.png';
import NewFire from '../../assets/images/new-fire.png';
import BlownMind from '../../assets/images/blown-mind.png';
import LookingForHeart from '../../assets/images/looking-for-heart.png';
import FlashMessage from "react-native-flash-message";
import { GlobalProvider } from '../../context/GlobalState';
import AuthHandler from '../authHandler'
import { GlobalContext } from '../../context/GlobalState';
import ProgressCircle from 'react-native-progress-circle';
import Workers from '../../utils/workers'
import Worker from '../../utils/worker'
let second = 0;
let minute = 0;
let pause = false;
let age = 0;
let calorie;
const Homescreen = (props) => {
    const { navigation } = props;
    const { user, hrm, calories, setCalories, setSeconds, setMinutes } = useContext(GlobalContext);
    const [heartrate, setHeartrate] = useState('')
    const [hrmPercentage, setHrmPercentage] = useState('')

    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(0)
    const [time, setTime] = useState(0)
    const [pausing, setPausing] = useState(false)

    useEffect(() => {
        // const worker = new Workers(worker);
        let year = new Date().getFullYear()
        let dob = user.DOB;
        var dobyear = dob.substring(0, 4);
        age = year - dobyear;

        if (user.gender === "male") {

            let heartrat = 208 - (0.7 * age)
            setHeartrate(heartrat)
        }
        else if (user.gender === "female") {

            let heartrat = 206 - (0.88 * age)
            setHeartrate(heartrat)
        }
        setHrmPercentage((parseInt(hrm) / heartrate) * 100)
    }, []);
    const startTimer = () => {
        let check = pause
        pause = !pause;
        setPausing(!pausing)
        if (!check) {
            recursiveTimer(true)
        }
    }
    const recursiveTimer = (check) => {
        console.log("pausing", pausing)
        if (pause || check) {
            if (second < 59) {
                second = second + 1
                setSec(second)
            }
            else {
                // console.log("checkelse", seconds)
                minute = minute + 1
                second = 0
                setSec(0)
                setMin(minute)
                calorie = (
                    user.gender === "male" ?
                        ((parseInt(age) * 0.2017) + (parseInt(hrm) * 0.6309) - (((user.weight) / 2.2046) * 0.09036) - 55.0969) * (parseInt(minute) / 4.184) :
                        ((parseInt(age) * 0.074) + (parseInt(hrm) * 0.4472) - (((user.weight) / 2.2046) * 0.05741) - 20.4022) * (parseInt(minute) / 4.184)
                )
                if (calorie < 0) {
                    setCalories(.5)
                }
                else {
                    setCalories(calorie.toFixed(2))
                }
                console.log(minute)
                console.log(calories)
            }
            setTimeout(() => {

                recursiveTimer(false)
            }, 1000);
        }

    }
    const endWorkout = () => {
        setMinutes(min)
        setSeconds(sec)
        setSec(0)
        setMin(0)
        minute = 0;
        second;
    }
    return (
        <View style={styles.fullScreenView}>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <View style={styles.viewContainer}>
                <View style={styles.headerSection}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Image source={Menu} style={styles.menuImage} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('LiveStats')}>
                        <Image source={SwitchToStats} style={styles.switchToStatsImage} />
                    </TouchableOpacity>
                </View>
                <View style={styles.statsSection}>
                    <View style={styles.clockSection}>
                        <Image source={NewClock} style={styles.clockImage} />
                        <Text style={styles.timeSubtitle}>
                            {('0' + (min)).slice(-2) + ':' + ('0' + (sec)).slice(-2)}
                        </Text>
                    </View>
                    <View style={styles.caloriesSection}>
                        <Image source={NewFire} style={styles.caloriesImage} />
                        {user && hrm ? <Text style={styles.timeSubtitle}>
                            {calories ? calories : 0}
                        </Text> : <Text style={styles.timeSubtitle}>
                                0
                            </Text>}
                    </View>
                    <View style={styles.intensitySection}>
                        <Image source={BlownMind} style={styles.muscleImage} />
                        <Text style={styles.timeSubtitle}>
                            127
                        </Text>
                    </View>
                </View>
                {/* <View style={ styles.circleProgressBarSection }>
                <Text style={ styles.bpmSubtitle }>
                        {hrm}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
                    </Text>
                    <Image source={ CircleOne } style={ styles.circleOneImage }/>
                    
                    <Text style>
                        {hrm}
                    </Text>
                    <Text style={ styles.percentageTitle }>
                    {parseInt((parseInt(hrm)/parseInt(heartrate))*100)}%
                    </Text>
                    <Text style={ styles.bpmSubtitle }>
                        {heartrate}
                    </Text>
                </View> */}

                <View style={styles.circleProgressBarSection}>
                    <ProgressCircle
                        percent={hrm ? parseInt((parseInt(hrm) / parseInt(heartrate)) * 100) : 0}
                        radius={170}
                        borderWidth={20}
                        color="#3399FF"
                        shadowColor="#63FFCF"
                        bgColor="black"
                    >
                        <Text style={styles.percentageTitle}>{hrm ? parseInt((parseInt(hrm) / parseInt(heartrate)) * 100) + '%' : "Connect"} </Text>
                        <Text style={styles.bpmSubtitle}>{hrm ? hrm : 0} BPM</Text>

                        {/* Show when device hasn't paired */}
                        {/* <Image source={LookingForHeart} style={styles.lookingForHeartImage} /> */}

                    </ProgressCircle>
                </View>
                <View style={styles.bigZoneTitleSection}>
                    <Text style={styles.bigZoneTitle}>
                        {
                            hrm && parseInt((parseInt(hrm) / parseInt(heartrate)) * 100) <= 100 && parseInt((parseInt(hrm) / parseInt(heartrate)) * 100) >=91 ? "BEAST MODE":(hrm && parseInt((parseInt(hrm) / parseInt(heartrate)) * 100) <= 90 && parseInt((parseInt(hrm) / parseInt(heartrate)) * 100) >=76 ? "PRO ATHLETE ZONE":(hrm && parseInt((parseInt(hrm) / parseInt(heartrate)) * 100) <= 75 && parseInt((parseInt(hrm) / parseInt(heartrate)) * 100) >=61 ? "FAT BURNING ZONE":"WARM UP ZONE"))}
                    </Text>
                </View>
                <View style={styles.startButtonSection}>
                    {pausing ? <View><TouchableOpacity style={styles.startCircle} onPress={startTimer}>
                        <Image source={Pause} style={styles.pauseImage} />
                    </TouchableOpacity>
                        <TouchableOpacity style={styles.endWorkoutContainer} onPress={endWorkout}>
                            <Text style={styles.endWorkoutText}>
                                END WORKOUT
                            </Text>
                        </TouchableOpacity></View> : <TouchableOpacity style={styles.startCircle} onPress={startTimer}>
                            <Text style={styles.startText}>START</Text>
                        </TouchableOpacity>


                    }
                </View>
                {/* No Signal Section */}
                {/* <View style={ styles.pairDeviceSection }>
                    <Image source={ Signal } style={ styles.signalImage }/>
                    <Text style={ styles.pairDeviceTitle }>
                        Make sure your shirt is paired in order to get heart rate data. You can pair your shirt from the option
                        in the menu. 
                    </Text>
                </View>
                <View style={ styles.startButtonSection }>
                    <TouchableOpacity style={ styles.startCircleNoPair }>
                        <Text style={ styles.startTextNoPair }>START</Text>
                    </TouchableOpacity>
                </View> */}
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
        marginTop: 20,
        // marginTop: '5%',
    },

    menuImage: {
        width: 22,
        height: 20,
        resizeMode: 'contain'
        // marginTop: 20
        // marginTop: '20%'
    },

    switchToStatsImage: {
        width: 21,
        height: 21,
        resizeMode: 'contain',
        // marginTop: 20
        // marginTop: '20%'
    },

    statsSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // marginTop: 30
    },

    clockSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        marginTop: '8%'
    },

    caloriesSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        marginLeft: 12,
        marginTop: '8%'
    },

    intensitySection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 12,
        marginTop: '8%'
    },

    clockImage: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },

    caloriesImage: {
        width: 26,
        height: 26,
        resizeMode: 'contain'
    },

    muscleImage: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },

    timeSubtitle: {
        color: 'white',
        // fontSize: 16,
        fontFamily: 'Biryani-Bold',
        marginTop: 5,
        fontSize: RFPercentage(1.9)
    },

    circleProgressBarSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
        // marginTop: '10%',
        // backgroundColor: 'blue',
        // width: '100%',
        // height: '55%'
    },

    outerCircle: {
        borderRadius: 40,
        width: 80,
        height: 80,
        backgroundColor: 'white',
    },
    innerCircle: {
        borderRadius: 35,
        width: 70,
        height: 70,
        margin: 5,
        backgroundColor: 'black'
    },

    circleOneImage: {
        width: 300,
        height: 300,
        // width: '90%',
        // height: '90%',
        resizeMode: 'contain',
    },

    percentageTitle: {
        color: 'white',
        fontSize: 65,
        fontFamily: 'Biryani-Black',
        textAlign: 'center',
        position: 'absolute'
    },

    bpmSubtitle: {
        color: 'white',
        fontSize: 17,
        fontFamily: 'Biryani-Bold',
        opacity: 0.23,
        textAlign: 'center',
        position: 'absolute',
        paddingTop: 100
    },

    lookingForHeartImage: {
        width: '45%',
        height: '45%',
        resizeMode: 'contain',
    },

    pairDeviceSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    signalImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginTop: '50%',
    },

    pairDeviceTitle: {
        color: 'white',
        // fontSize: 32,
        fontFamily: 'Biryani-Regular',
        fontSize: RFPercentage(1.70),
        marginTop: 10,
        textAlign: 'center',
        width: '95%'
    },

    bigZoneTitleSection: {
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    bigZoneTitle: {
        color: 'white',
        // fontSize: 32,
        fontFamily: 'Biryani-Black',
        fontSize: RFPercentage(3.9),
    },

    startButtonSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 20,
        position: 'absolute',
        width: '100%'
    },

    startCircle: {
        width: 75,
        height: 75,
        borderRadius: 75 / 2,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    startCircleNoPair: {
        width: 75,
        height: 75,
        borderRadius: 75 / 2,
        backgroundColor: '#9e9e9e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    pauseImage: {
        width: 17,
        height: 17,
        resizeMode: 'contain',
    },

    startText: {
        color: 'black',
        // fontSize: 10,
        fontFamily: 'Biryani-Black',
        fontSize: RFPercentage(1.33)
    },

    startTextNoPair: {
        color: 'black',
        // fontSize: 10,
        fontFamily: 'Biryani-ExtraBold',
        fontSize: RFPercentage(1.28),
        opacity: .75
    },

    endWorkoutText: {
        color: 'white',
        // fontSize: 10,
        fontFamily: 'Biryani-Bold',
        fontSize: RFPercentage(1.10),
        marginTop: '2%',
        textDecorationLine: 'underline',
        opacity: .55
    }

});

export default Homescreen;