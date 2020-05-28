import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import React, {useState,useEffect, useContext} from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import Menu from '../../assets/images/menu.png';
import SwitchToStats from '../../assets/images/switch-to-stats.png';
import Clock from '../../assets/images/clock.png';
import Calories from '../../assets/images/calories.png';
import Muscle from '../../assets/images/muscle.png';
import CircleOne from '../../assets/images/zone-circle.png';
import FlashMessage  from "react-native-flash-message";
import {GlobalProvider} from '../../context/GlobalState';
import AuthHandler from '../authHandler'
import {GlobalContext} from '../../context/GlobalState';
import ProgressCircle from 'react-native-progress-circle';
const Homescreen =(props)=> {
    const {navigation} = props;
    const {user,hrm} = useContext(GlobalContext);
    const[heartrate,setHeartrate]=useState('')
    const[hrmPercentage,setHrmPercentage]=useState('')
    useEffect(() => {
       let year=new Date().getFullYear()
       let dob = user.DOB;
       var dobyear = dob.substring(0, 4);
       let age=year-dobyear;
       if(user.gender==="male"){
       let heartrat= 208 - (0.7 * age)
       setHeartrate(heartrat)
       }
       else if(user.gender==="female"){
        let heartrat= 206 - (0.88 * age)
        setHeartrate(heartrat)
       }
       setHrmPercentage((parseInt(hrm)/heartrate)*100)
      },[]);
    return (  
        <View style={ styles.fullScreenView }>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <View style={ styles.viewContainer }>
                <View style={ styles.headerSection }>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Image source={ Menu } style={ styles.menuImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('LiveStats')}>
                        <Image source={ SwitchToStats } style={ styles.switchToStatsImage }/>
                    </TouchableOpacity> 
                </View>
                <View style={ styles.statsSection }>
                    <View style={ styles.clockSection }>
                        <Image source={ Clock } style={ styles.clockImage }/>
                        <Text style={ styles.timeSubtitle }>
                            5:04
                        </Text>
                    </View>
                    <View style={ styles.caloriesSection }>
                        <Image source={ Calories } style={ styles.caloriesImage }/>
                        <Text style={ styles.timeSubtitle }>
                            72
                        </Text>
                    </View>
                    <View style={ styles.intensitySection }>
                        <Image source={ Muscle } style={ styles.muscleImage }/>
                        <Text style={ styles.timeSubtitle }>
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
                <View style={{ marginTop:50 ,marginLeft:16}}>
                <ProgressCircle
            percent={hrm?parseInt((parseInt(hrm)/parseInt(heartrate))*100):0}
            radius={170}
            borderWidth={20}
            color="#3399FF"
            shadowColor="white"
            bgColor="black"
        >
            <Text style={{ fontSize: 15 ,color:"white"}}>{hrm?hrm:0}</Text>
            <Text style={{ fontSize: 40 ,color:"white"}}>{hrm?parseInt((parseInt(hrm)/parseInt(heartrate))*100)+'%':"Not Connected"} </Text>
            <Text style={{ fontSize: 15 ,color:"white"}}>{heartrate?heartrate:0}</Text>
        </ProgressCircle></View>
                <View style={ styles.bigZoneTitleSection }>
                    <Text style={ styles.bigZoneTitle }>
                        WARM UP ZONE
                    </Text>
                </View>
                <View style={ styles.startButtonSection }>
                    <TouchableOpacity style={ styles.startCircle }>
                        <Text style={ styles.startText }>START</Text>
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

    headerSection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20,
        // marginTop: '5%',
    },

    menuImage: {
        width: 20,
        height: 18,
        resizeMode: 'contain',
        // marginTop: 20
        // marginTop: '20%'
    },

    switchToStatsImage: {
        width: 19,
        height: 19,
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
        width: 19,
        height: 19,
        resizeMode: 'contain'
    },

    caloriesImage: {
        width: 19,
        height: 19,
        resizeMode: 'contain'
    },

    muscleImage: {
        width: 19,
        height: 19,
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
        borderRadius: 75/2,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    startText: {
        color: 'black',
        // fontSize: 10,
        fontFamily: 'Biryani-ExtraBold',
        fontSize: RFPercentage(1.28)
    },

});

export default Homescreen;
