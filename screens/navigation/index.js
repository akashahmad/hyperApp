import React, {Component, useState, useEffect} from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {View} from "react-native";
import FirstHeader from "../commonComponents/toggle";
import SecondHeader from "../commonComponents/secondHeader";
import SideMenu from "../commonComponents/sideMenu";
import MainDashboard from "../homeScreen";
import EditProfile from "../editProfileScreen";
import LeaderBoard from "../leaderboardScreen";
import LeaderBoardSearch from "../leaderboardSearchPopUp";
import LiveStats from "../liveStatsScreen";
import WorkOutSummary from "../workoutSummary";
// import firebase from "../../utils/firebase";



function Navgation() {

    return <View style={{flex: 1}}>
        <AppContainer/>
    </View>
}


const AppStack = createStackNavigator({

    Home: {
        screen: MainDashboard,
        navigationOptions: ({navigation}) => ({
            // header: () => <FirstHeader navigation={navigation}/>,
            headerTitle: " "
        })
    },

    EditProfile: {
        screen: EditProfile,
        navigationOptions: ({navigation}) => ({
            headerTitle: " "
        })
    },

    LeaderBoard: {
        screen: LeaderBoard,
        navigationOptions: ({navigation}) => ({
            header: () => <SecondHeader navigation={navigation}/>,
            headerTitle: " "
        })
    },

    LeaderBoardSearch: {
        screen: LeaderBoardSearch,
        navigationOptions: ({navigation}) => ({
            headerTitle: " "
        })
    },

    LiveStats: {
        screen: LiveStats,
        navigationOptions: ({navigation}) => ({
            headerTitle: " "
        })
    },

    WorkOutSummary: {
        screen: WorkOutSummary,
        navigationOptions: ({navigation}) => ({
            headerTitle: " "
        })
    },


    

}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'black',
            height: 80,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            textAlign: "center",
            flex: 1,
            fontSize: 16
        }
    },
});

const AppNavigator = createDrawerNavigator({
    Home: AppStack
}, {
    drawerBackgroundColor: "black",
    unmountInactiveRoutes: true,
    drawerPosition: "left",
    contentComponent: SideMenu,
    defaultNavigationOptions: {}
});

const AppContainer = createAppContainer(AppNavigator);


export default Navgation;