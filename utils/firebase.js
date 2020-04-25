import React from "react";
import firebase from "@react-native-firebase/app";
import { Platform } from "react-native";


const iosConfig =  {
    clientId: "292266379540-io182eqmrnrjp3s5nhoslctkavbf4hip.apps.googleusercontent.com",
    apiKey: "AIzaSyBQxVCCC55UPbs5TcZXj0i2OebTuykIPvM",
    authDomain: "hyper-7dc73.firebaseapp.com",
    databaseURL: "https://hyper-7dc73.firebaseio.com",
    projectId: "hyper-7dc73",
    storageBucket: "hyper-7dc73.appspot.com",
    messagingSenderId: "292266379540",
    appId: "1:292266379540:ios:9ab55b3120688931755a01"
}
const androidConfig = {
    clientId: "292266379540-8pjlrq1bkt3os0tvs396ii2qjkl60i9t.apps.googleusercontent.com",
    apiKey: "AIzaSyB4tKRtBjwAXxzVmV93wciO2Ccmd0JRS8s",
    authDomain: "hyper-7dc73.firebaseapp.com",
    databaseURL: "https://hyper-7dc73.firebaseio.com",
    projectId: "hyper-7dc73",
    storageBucket: "hyper-7dc73.appspot.com",
    messagingSenderId: "292266379540",
    appId: "1:292266379540:android:e2619f51371a4f24755a01"
}

firebase.initializeApp(
    Platform.OS === "ios" ? iosConfig: androidConfig
);

export default firebase;