import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import React, {useState} from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import BackTwo from '../../assets/images/back-two.png';
import Calories from '../../assets/images/gradient-fire.png';
import Clock from '../../assets/images/gradient-clock.png';
import Heart from '../../assets/images/gradient-heart.png';
import Muscle from '../../assets/images/gradient-muscle.png';

const Leaderboard = (props) => {
    const {navigation} = props;
    return (
        
        <View style={ styles.fullScreenView }>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <View style={ styles.viewContainer }>
                <View style={ styles.backButtonContainer }>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={ BackTwo } style={ styles.backImage }/>
                    </TouchableOpacity> 
                </View>
                <View style={ styles.liveStatsTitleSection }>
                    <Text style={ styles.liveStatsText }>
                        WORKOUT HISTORY
                    </Text>
                </View>
                <View style={ styles.workoutHistoryRowSection }>
                    <View style={ styles.dateTimeContainer }>
                        <Text style={ styles.dateWorkoutText }>
                            1/1/20
                        </Text>
                        <Text style={ styles.timeWorkoutText }>
                            7:30 AM
                        </Text>
                    </View>
                    <View style={ styles.caloriesBurnedContainer }>
                        <View style={ styles.caloriesImageTextContainer }>
                            <Image source={ Calories } style={ styles.caloriesImage }/>
                            <Text style={ styles.caloriesText }>
                                72
                            </Text>
                        </View>
                        <View style={ styles.caloriesTitleContainer }>
                            <Text style={ styles.caloriesTitleText }>
                                CALORIES {"\n"} BURNED
                            </Text>
                        </View>
                    </View>
                    <View style={ styles.caloriesBurnedContainer }>
                        <View style={ styles.caloriesImageTextContainer }>
                            <Image source={ Clock } style={ styles.clockImage }/>
                            <Text style={ styles.caloriesText }>
                                5:04
                            </Text>
                        </View>
                        <View style={ styles.caloriesTitleContainer }>
                            <Text style={ styles.caloriesTitleText }>
                                WORKOUT {"\n"} DURATION
                            </Text>
                        </View>
                    </View>
                    <View style={ styles.caloriesBurnedContainer }>
                        <View style={ styles.caloriesImageTextContainer }>
                            <Image source={ Heart } style={ styles.heartImage }/>
                            <Text style={ styles.caloriesText }>
                                85
                            </Text>
                        </View>
                        <View style={ styles.caloriesTitleContainer }>
                            <Text style={ styles.caloriesTitleText }>
                                AVERAGE {"\n"} BPM
                            </Text>
                        </View>
                    </View>
                    <View style={ styles.caloriesBurnedContainer }>
                        <View style={ styles.caloriesImageTextContainer }>
                            <Image source={ Muscle } style={ styles.muscleImage }/>
                            <Text style={ styles.caloriesText }>
                                550
                            </Text>
                        </View>
                        <View style={ styles.caloriesTitleContainer }>
                            <Text style={ styles.caloriesTitleText }>
                                INTENSITY {"\n"} LEVEL
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={ styles.oLineSectionTwo }>
                    <View style={ styles.oLineTwo }></View>
                </View> 
                <View style={ styles.workoutHistoryRowSection }>
                    <View style={ styles.dateTimeContainer }>
                        <Text style={ styles.dateWorkoutText }>
                            1/1/20
                        </Text>
                        <Text style={ styles.timeWorkoutText }>
                            7:30 AM
                        </Text>
                    </View>
                    <View style={ styles.caloriesBurnedContainer }>
                        <View style={ styles.caloriesImageTextContainer }>
                            <Image source={ Calories } style={ styles.caloriesImage }/>
                            <Text style={ styles.caloriesText }>
                                72
                            </Text>
                        </View>
                        <View style={ styles.caloriesTitleContainer }>
                            <Text style={ styles.caloriesTitleText }>
                                CALORIES {"\n"} BURNED
                            </Text>
                        </View>
                    </View>
                    <View style={ styles.caloriesBurnedContainer }>
                        <View style={ styles.caloriesImageTextContainer }>
                            <Image source={ Clock } style={ styles.clockImage }/>
                            <Text style={ styles.caloriesText }>
                                5:04
                            </Text>
                        </View>
                        <View style={ styles.caloriesTitleContainer }>
                            <Text style={ styles.caloriesTitleText }>
                                WORKOUT {"\n"} DURATION
                            </Text>
                        </View>
                    </View>
                    <View style={ styles.caloriesBurnedContainer }>
                        <View style={ styles.caloriesImageTextContainer }>
                            <Image source={ Heart } style={ styles.heartImage }/>
                            <Text style={ styles.caloriesText }>
                                85
                            </Text>
                        </View>
                        <View style={ styles.caloriesTitleContainer }>
                            <Text style={ styles.caloriesTitleText }>
                                AVERAGE {"\n"} BPM
                            </Text>
                        </View>
                    </View>
                    <View style={ styles.caloriesBurnedContainer }>
                        <View style={ styles.caloriesImageTextContainer }>
                            <Image source={ Muscle } style={ styles.muscleImage }/>
                            <Text style={ styles.caloriesText }>
                                550
                            </Text>
                        </View>
                        <View style={ styles.caloriesTitleContainer }>
                            <Text style={ styles.caloriesTitleText }>
                                INTENSITY {"\n"} LEVEL
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={ styles.oLineSectionTwo }>
                    <View style={ styles.oLineTwo }></View>
                </View>
                <View style={ styles.workoutHistoryRowSection }>
                    <View style={ styles.dateTimeContainer }>
                        <Text style={ styles.dateWorkoutText }>
                            1/1/20
                        </Text>
                        <Text style={ styles.timeWorkoutText }>
                            7:30 AM
                        </Text>
                    </View>
                    <View style={ styles.caloriesBurnedContainer }>
                        <View style={ styles.caloriesImageTextContainer }>
                            <Image source={ Calories } style={ styles.caloriesImage }/>
                            <Text style={ styles.caloriesText }>
                                72
                            </Text>
                        </View>
                        <View style={ styles.caloriesTitleContainer }>
                            <Text style={ styles.caloriesTitleText }>
                                CALORIES {"\n"} BURNED
                            </Text>
                        </View>
                    </View>
                    <View style={ styles.caloriesBurnedContainer }>
                        <View style={ styles.caloriesImageTextContainer }>
                            <Image source={ Clock } style={ styles.clockImage }/>
                            <Text style={ styles.caloriesText }>
                                5:04
                            </Text>
                        </View>
                        <View style={ styles.caloriesTitleContainer }>
                            <Text style={ styles.caloriesTitleText }>
                                WORKOUT {"\n"} DURATION
                            </Text>
                        </View>
                    </View>
                    <View style={ styles.caloriesBurnedContainer }>
                        <View style={ styles.caloriesImageTextContainer }>
                            <Image source={ Heart } style={ styles.heartImage }/>
                            <Text style={ styles.caloriesText }>
                                85
                            </Text>
                        </View>
                        <View style={ styles.caloriesTitleContainer }>
                            <Text style={ styles.caloriesTitleText }>
                                AVERAGE {"\n"} BPM
                            </Text>
                        </View>
                    </View>
                    <View style={ styles.caloriesBurnedContainer }>
                        <View style={ styles.caloriesImageTextContainer }>
                            <Image source={ Muscle } style={ styles.muscleImage }/>
                            <Text style={ styles.caloriesText }>
                                550
                            </Text>
                        </View>
                        <View style={ styles.caloriesTitleContainer }>
                            <Text style={ styles.caloriesTitleText }>
                                INTENSITY {"\n"} LEVEL
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={ styles.oLineSectionTwo }>
                    <View style={ styles.oLineTwo }></View>
                </View>
                <View style={ styles.workoutHistoryRowSection }>
                    <View style={ styles.dateTimeContainer }>
                        <Text style={ styles.dateWorkoutText }>
                            1/1/20
                        </Text>
                        <Text style={ styles.timeWorkoutText }>
                            7:30 AM
                        </Text>
                    </View>
                    <View style={ styles.caloriesBurnedContainer }>
                        <View style={ styles.caloriesImageTextContainer }>
                            <Image source={ Calories } style={ styles.caloriesImage }/>
                            <Text style={ styles.caloriesText }>
                                72
                            </Text>
                        </View>
                        <View style={ styles.caloriesTitleContainer }>
                            <Text style={ styles.caloriesTitleText }>
                                CALORIES {"\n"} BURNED
                            </Text>
                        </View>
                    </View>
                    <View style={ styles.caloriesBurnedContainer }>
                        <View style={ styles.caloriesImageTextContainer }>
                            <Image source={ Clock } style={ styles.clockImage }/>
                            <Text style={ styles.caloriesText }>
                                5:04
                            </Text>
                        </View>
                        <View style={ styles.caloriesTitleContainer }>
                            <Text style={ styles.caloriesTitleText }>
                                WORKOUT {"\n"} DURATION
                            </Text>
                        </View>
                    </View>
                    <View style={ styles.caloriesBurnedContainer }>
                        <View style={ styles.caloriesImageTextContainer }>
                            <Image source={ Heart } style={ styles.heartImage }/>
                            <Text style={ styles.caloriesText }>
                                85
                            </Text>
                        </View>
                        <View style={ styles.caloriesTitleContainer }>
                            <Text style={ styles.caloriesTitleText }>
                                AVERAGE {"\n"} BPM
                            </Text>
                        </View>
                    </View>
                    <View style={ styles.caloriesBurnedContainer }>
                        <View style={ styles.caloriesImageTextContainer }>
                            <Image source={ Muscle } style={ styles.muscleImage }/>
                            <Text style={ styles.caloriesText }>
                                550
                            </Text>
                        </View>
                        <View style={ styles.caloriesTitleContainer }>
                            <Text style={ styles.caloriesTitleText }>
                                INTENSITY {"\n"} LEVEL
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={ styles.oLineSectionTwo }>
                    <View style={ styles.oLineTwo }></View>
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
        width: '90%',
        height: '90%'
    },

    backButtonContainer: {
        marginTop: '5%'
    },

    backImage: {
        width: 16,
        height: 16,
        resizeMode: 'contain'
    },

    liveStatsTitleSection: {
        // marginTop: 20,
        // marginLeft: 2,
    },

    liveStatsText: {
        color: 'white',
        // fontSize: 25,
        fontSize: RFPercentage(3),
        fontFamily: 'Biryani-Black',
        marginTop: '5%',
    },

    workoutHistoryRowSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '5%'
    },

    dateWorkoutText: {
        color: 'white',
        fontSize: RFPercentage(1.35),
        fontFamily: 'Biryani-Bold',
    },

    timeWorkoutText: {
        color: 'white',
        fontSize: RFPercentage(1.2),
        fontFamily: 'Biryani-Bold',
        opacity: .42
    },

    caloriesImageTextContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },

    caloriesImage: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
    },

    clockImage: {
        width: 14,
        height: 14,
        resizeMode: 'contain',
        marginRight: 5
    },

    heartImage: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        marginRight: 5
    },

    muscleImage: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        marginRight: 5,
        marginBottom: 2
    },

    caloriesText: {
        color: 'white',
        fontSize: RFPercentage(1.7),
        fontFamily: 'Biryani-Bold',
    },

    caloriesTitleText: {
        color: 'white',
        fontSize: RFPercentage(.8),
        fontFamily: 'Biryani-Bold',
        opacity: .42,
        lineHeight: 11,
        textAlign: 'center',
        marginTop: '5%'
    },

    oLineSectionTwo: {
        // marginTop: 20
        marginTop: '1%'
    },

    oLineTwo: {
        borderBottomColor: '#979797',
        borderBottomWidth: 1,
        opacity: .15
    },

});

export default Leaderboard;
