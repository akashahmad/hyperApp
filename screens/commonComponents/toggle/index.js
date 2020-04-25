import React from "react";
import { Image, TouchableOpacity } from "react-native";

function Toggle(props) {
    let { navigation } = props;
    return <TouchableOpacity
        style={{padding: 20}}
        onPress={() => navigation.toggleDrawer()}
    >
        <Image
            source={require("../../../assets/images/toggle.png")}
            style={{
                backgroundColor: "transparent",
                width: 25,
                height: 17
            }}/>
    </TouchableOpacity>
}

export default Toggle;