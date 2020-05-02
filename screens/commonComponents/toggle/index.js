import React from "react";
import {Image, View, StatusBar, TouchableOpacity, StyleSheet} from "react-native";
import SwitchToStats from '../../../assets/images/switch-to-stats.png';

function Toggle(props) {
    let {navigation} = props;
    return <View style={ styles.fullScreenView }>
        <StatusBar backgroundColor="black" barStyle="light-content"/>
        <View style={ styles.viewContainer }>
            <View style={ styles.headerSection }>
                <TouchableOpacity
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
                <Image source={ SwitchToStats } style={ styles.switchToStatsImage }/>
            </View>
        </View>
    </View>
}

export default Toggle;

const styles = StyleSheet.create({

    fullScreenView: {
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    viewContainer: {
        width: '84%',
    },

    headerSection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20
    },

    opacity: {
        backgroundColor: "orange",
    },

    menuImage: {
        width: 19,
        height: 17,
        resizeMode: 'contain',
        marginTop: 20
    },

    switchToStatsImage: {
        width: 19,
        height: 19,
        resizeMode: 'contain',
        marginTop: 20
    }

});
