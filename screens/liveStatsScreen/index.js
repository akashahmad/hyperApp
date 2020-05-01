import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import React, {useState} from 'react';
import BackTwo from '../../assets/images/back-two.png';
import CircleOne from '../../assets/images/full-circle.png';
import CircleTwo from '../../assets/images/circle-two.png';
import CircleThree from '../../assets/images/circle-three.png';
import CircleFour from '../../assets/images/circle-four.png';
import GradientFire from '../../assets/images/gradient-fire.png';
import GradientMuscle from '../../assets/images/gradient-muscle.png';
// import FlashMessage  from "react-native-flash-message";
// import {GlobalProvider} from '../../context/GlobalState';
// import AuthHandler from '../authHandler'

const LiveStatsScreen: () => React$Node = () => {
    return (
        <View style={ styles.fullScreenView }>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <View style={ styles.viewContainer }>
                <Image source={ BackTwo } style={ styles.backImage }/>
                <View style={ styles.liveStatsTitleSection }>
                    <Text style={ styles.liveStatsText }>
                        LIVE STATS
                    </Text>
                </View>
                <View style={ styles.zoneInfoSection }>
                    <View style={ styles.zoneNamePlusTimeSection }>
                        <Text style={ styles.zoneTitle }>
                            WARM UP ZONE
                        </Text>
                        <Text style={ styles.zoneTime }>
                            10:05
                        </Text>
                    </View>
                    <View style={ styles.zoneCircleSection }>
                        <Image source={ CircleTwo } style={ styles.circleOneImage }/>
                        <Text style={ styles.zonePercentageTitle }>
                            0%-60%
                        </Text>
                    </View>
                </View>
                <View style={ styles.zoneInfoSectionNext }>
                    <View style={ styles.zoneNamePlusTimeSection }>
                        <Text style={ styles.zoneTitle }>
                            FAT BURNING ZONE
                        </Text>
                        <Text style={ styles.zoneTime }>
                            8:27
                        </Text>
                    </View>
                    <View style={ styles.zoneCircleSection }>
                        <Image source={ CircleThree } style={ styles.circleOneImage }/>
                        <Text style={ styles.zonePercentageTitle }>
                            61%-75%
                        </Text>
                    </View>
                </View>
                <View style={ styles.zoneInfoSectionNext }>
                    <View style={ styles.zoneNamePlusTimeSection }>
                        <Text style={ styles.zoneTitle }>
                            PRO ATHLETE ZONE
                        </Text>
                        <Text style={ styles.zoneTime }>
                            4:54
                        </Text>
                    </View>
                    <View style={ styles.zoneCircleSection }>
                        <Image source={ CircleFour } style={ styles.circleOneImage }/>
                        <Text style={ styles.zonePercentageTitle }>
                            76%-90%
                        </Text>
                    </View>
                </View>
                <View style={ styles.zoneInfoSectionNext }>
                    <View style={ styles.zoneNamePlusTimeSection }>
                        <Text style={ styles.zoneTitle }>
                            BEAST MODE
                        </Text>
                        <Text style={ styles.zoneTime }>
                            2:03
                        </Text>
                    </View>
                    <View style={ styles.zoneCircleSection }>
                        <Image source={ CircleOne } style={ styles.circleOneImage }/>
                        <Text style={ styles.zonePercentageTitle }>
                            91%-100%
                        </Text>
                    </View>
                </View>
                <View style={ styles.zoneInfoSectionNext }>
                    <View style={ styles.zoneNamePlusTimeSection }>
                        <Text style={ styles.zoneTitle }>
                            CALORIES BURNED
                        </Text>
                        <Text style={ styles.zoneTime }>
                            72
                        </Text>
                    </View>
                    <View style={ styles.zoneCircleSection }>
                        <Image source={ GradientFire } style={ styles.gradientFireImage }/>
                    </View>
                </View>
                <View style={ styles.zoneInfoSectionNext }>
                    <View style={ styles.zoneNamePlusTimeSection }>
                        <Text style={ styles.zoneTitle }>
                            INTENSITY LEVEL
                        </Text>
                        <Text style={ styles.zoneTime }>
                            154
                        </Text>
                    </View>
                    <View style={ styles.zoneCircleSection }>
                        <Image source={ GradientMuscle } style={ styles.gradientFireImage }/>
                    </View>
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
        width: '84%',
        height: '90%'
    },

    backImage: {
        width: 17,
        height: 17,
        resizeMode: 'contain',
        marginTop: 20
    },

    liveStatsTitleSection: {
        marginTop: 20,
        marginLeft: 2
    },

    liveStatsText: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Biryani-Black'
    },

    zoneInfoSection: {
        marginTop: 40,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },

    zoneNamePlusTimeSection: {
        marginTop: 6
    },

    zoneInfoSectionNext: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },

    zoneTitle: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Biryani-Light'
    },

    zoneTime: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Biryani-Bold',
        marginTop: 1
    },

    zoneCircleSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    circleOneImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },

    gradientFireImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginRight: 3
    },

    zonePercentageTitle: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'Biryani-SemiBold',
        opacity: .49,
        marginTop: 5,
        marginLeft: 5
    },

    timeSubtitle: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Biryani-Bold',
        marginTop: 5
    },

});

export default LiveStatsScreen;
