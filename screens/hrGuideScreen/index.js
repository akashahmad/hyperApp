import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import React, {useState} from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import BackTwo from '../../assets/images/back-two.png';
import CircleOne from '../../assets/images/clear-circle-one.png';
import CircleTwo from '../../assets/images/clear-circle-two.png';
import CircleThree from '../../assets/images/clear-circle-three.png';
import CircleFour from '../../assets/images/clear-circle-four.png';

const HRGuide = (props) => {
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
                <ScrollView>
                    <View style={ styles.liveStatsTitleSection }>
                        <Text style={ styles.liveStatsText }>
                            HEART RATE ZONES EXPLAINED
                        </Text>
                    </View>
                    <View style={ styles.subtitleSection }>
                        <Text style={ styles.subtitleText }>
                            Your heart rate zone is the best indicator of how hard your body is working during a workout
                        </Text> 
                    </View>
                    <View style={ styles.cardSection }>
                        <View style={ styles.card }>
                            <View style={ styles.titleTextContainer }>
                                <View style={ styles.titleSubtitleContainer }>
                                    <Text style={ styles.cardTitleText }>
                                        WARM UP ZONE
                                    </Text>
                                    <Text style={ styles.cardSubtitleText }>
                                        0%-60% of maximum heart rate
                                    </Text>
                                </View>
                                <Image source={CircleOne} style={ styles.cardCircleImage } />
                            </View>
                            <Text style={ styles.cardparagraphText }>
                                This is the lowest intensity zone and the zone you should be in when doing your warm up and cool
                                down.
                            </Text>
                        </View>
                    </View>  
                    <View style={ styles.cardSection }>
                        <View style={ styles.secondCard }>
                            <View style={ styles.titleTextContainer }>
                                <View style={ styles.titleSubtitleContainer }>
                                    <Text style={ styles.cardTitleText }>
                                        FAT BURNING ZONE
                                    </Text>
                                    <Text style={ styles.cardSubtitleText }>
                                        61%-75% of maximum heart rate
                                    </Text>
                                </View>
                                <Image source={CircleTwo} style={ styles.cardCircleImage } />
                            </View>
                            <Text style={ styles.cardparagraphText }>
                                Most of the energy your body needs is coming from fats in this zone. Exercising in this zone helps your
                                body become more efficient in breaking down fat. 
                            </Text>
                        </View>
                    </View>
                    <View style={ styles.cardSection }>
                        <View style={ styles.secondCard }>
                            <View style={ styles.titleTextContainer }>
                                <View style={ styles.titleSubtitleContainer }>
                                    <Text style={ styles.cardTitleText }>
                                        PRO ATHLETE ZONE
                                    </Text>
                                    <Text style={ styles.cardSubtitleText }>
                                        76%-90% of maximum heart rate
                                    </Text>
                                </View>
                                <Image source={CircleThree} style={ styles.cardCircleImage } />
                            </View>
                            <Text style={ styles.cardparagraphText }>
                                This is the zone that will make you feel uncomfortable. Your breathing will become labored and 
                                your body will start feeling a burn. This is the zone that most athletes are in during sporting 
                                activities. 
                            </Text>
                        </View>
                    </View>  
                    <View style={ styles.cardSection }>
                        <View style={ styles.secondCard }>
                            <View style={ styles.titleTextContainer }>
                                <View style={ styles.titleSubtitleContainer }>
                                    <Text style={ styles.cardTitleText }>
                                        BEAST MODE
                                    </Text>
                                    <Text style={ styles.cardSubtitleText }>
                                        91%-100% of maximum heart rate
                                    </Text>
                                </View>
                                <Image source={CircleFour} style={ styles.cardCircleImage } />
                            </View>
                            <Text style={ styles.cardparagraphText }>
                                This is the zone where you max and go all out. In this zone, your body’s demand for oxygen is high and
                                immediate. Most people can only stay in this zone for about 45-60 seconds at a time.  
                            </Text>
                        </View>
                    </View> 
                </ScrollView> 
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
        resizeMode: 'contain',
        marginBottom: '5%'
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
        // marginTop: '5%',
        lineHeight: 36
    },

    subtitleSection: {
        
    },

    subtitleText: {
        color: 'white',
        // fontSize: 25,
        fontSize: RFPercentage(1.2),
        fontFamily: 'Biryani-Bold',
        marginTop: '5%',
        textAlign: 'center'
    },

    cardSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    card: {
        backgroundColor: 'white',
        width: '98%',
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingLeft: '10%',
        paddingRight: '10%',
        borderRadius: 9,
        marginTop: '8%'
    },

    titleTextContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },

    cardTitleText: {
        color: 'black',
        // fontSize: 25,
        fontSize: RFPercentage(2.2),
        fontFamily: 'Biryani-Black',
    },

    cardSubtitleText: {
        color: 'black',
        // fontSize: 25,
        fontSize: RFPercentage(1.5),
        fontFamily: 'Biryani-SemiBold',
        opacity: .49,
        marginTop: '-2%'
    },

    cardCircleImage: {
        width: 45,
        height: 45
    },

    cardparagraphText: {
        color: 'black',
        // fontSize: 25,
        fontSize: RFPercentage(1.5),
        fontFamily: 'Biryani-SemiBold',
        marginTop: '3%',
        lineHeight: 18
    },

    secondCard: {
        backgroundColor: 'white',
        width: '98%',
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingLeft: '10%',
        paddingRight: '10%',
        borderRadius: 9,
        marginTop: '5%'
    },

});

export default HRGuide;
