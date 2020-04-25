import React, {Component, useState, useEffect} from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {View} from "react-native";
import Toggle from "../commonComponents/toggle";
import SideMenu from "../commonComponents/sideMenu";
import MainDashboard from "../mainDashboard";
import Example from "../example";
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
            headerLeft: () => <Toggle navigation={navigation}/>,
            headerTitle: " "
        })
    },

    Example: {
        screen: Example,
        navigationOptions: ({navigation}) => ({
            headerTitle: "Example"
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