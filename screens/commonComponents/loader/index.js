import React from "react";
import { View, Image, StyleSheet } from "react-native";

function Loader() {
    return <View style={styles.mainWrapper}>
        <Image style={styles.loader} source={require("../../../assets/images/loader.gif")}/>
    </View>
}

export default Loader;

const styles = StyleSheet.create({
    mainWrapper:{
        height:"100%",
        width:"100%",
        position: "absolute",
        zIndex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    loader: {
        width: 100,
        height: 100
    }
});