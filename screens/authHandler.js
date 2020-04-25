import React, {useState, useEffect, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import Auth from "./auth";
import AuthMiddleWare from "./authStateMiddleWare";
import Navigations from "./navigation";
import {View, StatusBar} from "react-native";
import Loader from "./commonComponents/loader";
export default () => {
    const {loggedIn, mainScreen, loader} = useContext(GlobalContext);
    return <View style={{flex: 1}}>
        <StatusBar hidden/>
        {
            loggedIn && mainScreen === "home" ?
                <Navigations/>
                :
                <AuthMiddleWare>
                    <Auth/>
                </AuthMiddleWare>
        }
        {
            loader &&
            <Loader/>
        }
    </View>
}


