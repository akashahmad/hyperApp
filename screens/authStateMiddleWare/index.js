import React, {useState, useEffect, useContext} from "react";
import {GlobalContext} from '../../context/GlobalState';
import {View, StyleSheet} from "react-native";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function Layout(props) {
    const {setUser, setId, setLoader, setLoggedIn} = useContext(GlobalContext);
    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if (user) {
                firestore().collection('users').doc(user.uid).onSnapshot((snapshot) => {
                    let data = {...snapshot.data()};
                    setUser(data);
                    setId(user.uid);
                    setLoader(false);
                    setLoggedIn(true);
                });
            } else {
                setUser(null);
                setId(null);
                setLoggedIn(false);
            }
        });
    }, []);

    return <View style={style.main}>
        {props.children}
    </View>
}

export default Layout;

const style = StyleSheet.create({
    main: {
        flex: 1
    }
})