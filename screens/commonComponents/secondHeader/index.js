import React from "react";
import {Image, View, StatusBar, TouchableOpacity, StyleSheet, Text} from "react-native";
import Menu from '../../../assets/images/menu.png';

function Toggle(props) {
    let {navigation} = props;
    return <View style={ styles.fullScreenView }>
        <StatusBar backgroundColor="black" barStyle="light-content"/>
        <View style={ styles.viewContainer }>
            <View style={ styles.headerSection }>
                <TouchableOpacity
                    onPress={() => navigation.toggleDrawer()}
                    style={styles.menuImage}
                >
                    <Image
                        source={Menu}
                    />
                </TouchableOpacity>
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
        width: '84%'
    },

    headerSection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    menuImage: {
        width: 19,
        height: 17,
        resizeMode: 'contain',
        marginTop: 20
    },



});
