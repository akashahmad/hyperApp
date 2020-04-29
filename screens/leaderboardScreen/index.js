import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Menu from '../../assets/images/menu.png';
import ProfileAvatar from '../../assets/images/profile-avatar.png';
import FlashMessage  from "react-native-flash-message";
import {GlobalProvider} from '../context/GlobalState';
import AuthHandler from './authHandler'

const Leaderboard: () => React$Node = () => {
    return (
        
        <View style={ styles.fullScreenView }>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <View style={ styles.viewContainer }>
                <Image source={ Menu } style={ styles.menuImage }/>
                <View style={ styles.liveStatsTitleSection }>
                    <Text style={ styles.liveStatsText }>
                        LEADERBOARD
                    </Text>
                </View>
                <View style={ styles.searchFilterButtonsSection }>
                    <TouchableOpacity style={ styles.spaceAround }>
                        <LinearGradient 
                            colors={['#55CBFF', '#63FFCF']} 
                            style={ styles.gradient }
                            start={{x: 0.0, y: 0.5}} end={{x: 1.0, y: 0.5}}
                        >
                            <View style={ styles.searchButton }>
                                <Text style={ styles.searchText }>SEARCH</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.spaceAround }>
                        <LinearGradient 
                            colors={['#55CBFF', '#63FFCF']} 
                            style={ styles.gradient }
                            start={{x: 0.0, y: 0.5}} end={{x: 1.0, y: 0.5}}
                        >
                            <View style={ styles.searchButton }>
                                <Text style={ styles.searchText }>FILTER</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={ styles.dateAndLabelSection }>
                    <Text style={ styles.dateTitle }>
                        1/1/20
                    </Text>
                    <Text style={ styles.labelTitle }>
                        INTENSITY LEVEL
                    </Text>
                </View>
                <View style={ styles.oLineSection }>
                    <View style={ styles.oLine }></View>
                </View>
                <View style={ styles.leaderboardRowInfo }>
                    <View style={ styles.firstArea }>
                        <Text style={ styles.rankingText }>
                            1
                        </Text>
                        <View style={ styles.imageNameContainer }>
                            <Image source={ ProfileAvatar } style={ styles.avatarImage }/>
                            <View style={ styles.nameCityContainer }>
                                <Text style={ styles.userNameText }>
                                    DANNY M.
                                </Text>
                                <Text style={ styles.userCityText }>
                                    SAN DIEGO, CA
                                </Text>
                            </View>
                        </View>
                    </View>
                    <Text style={ styles.categoryText }>
                        550
                    </Text>
                </View> 
                <View style={ styles.oLineSectionTwo }>
                    <View style={ styles.oLineTwo }></View>
                </View>    
                <View style={ styles.leaderboardRowInfo }>
                    <View style={ styles.firstArea }>
                        <Text style={ styles.rankingText }>
                            1
                        </Text>
                        <View style={ styles.imageNameContainer }>
                            <Image source={ ProfileAvatar } style={ styles.avatarImage }/>
                            <View style={ styles.nameCityContainer }>
                                <Text style={ styles.userNameText }>
                                    DANNY M.
                                </Text>
                                <Text style={ styles.userCityText }>
                                    SAN DIEGO, CA
                                </Text>
                            </View>
                        </View>
                    </View>
                    <Text style={ styles.categoryText }>
                        550
                    </Text>
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
        width: '84%',
        height: '90%'
    },

    menuImage: {
        width: 19,
        height: 17,
        resizeMode: 'contain',
        marginTop: 20
    },

    liveStatsTitleSection: {
        marginTop: 20,
        marginLeft: 2,
    },

    liveStatsText: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Biryani-Black'
    },

    searchFilterButtonsSection: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 3
    },

    searchButton: {
        backgroundColor: 'black',
        borderRadius: 5,
        margin: 1
    },

    searchText: {
        color: 'white',
        fontSize: 8,
        fontFamily: 'Biryani-Bold',
        margin: 4,
        paddingHorizontal: 7,
        textAlign: 'center',
    },

    gradient: {
        borderRadius: 5
    },

    spaceAround: {
        marginLeft: 3,
        marginRight: 3
    },

    dateAndLabelSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20
    },

    dateTitle: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'Biryani-Bold',
        marginLeft: 5
    },

    labelTitle: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'Biryani-Bold',
    },

    oLineSection: {
        marginTop: 10
    },

    oLine: {
        borderBottomColor: '#979797',
        borderBottomWidth: 1,
        opacity: .35
    },

    leaderboardRowInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 15
    },

    firstArea: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },

    rankingText: {
        color: 'white',
        fontSize: 22,
        fontFamily: 'Biryani-ExtraBold',
    },

    imageNameContainer: {
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 45
    },

    nameCityContainer: {
        marginLeft: 12,
        marginTop: 3
    },

    userNameText: {
        color: 'white',
        fontSize: 9,
        fontFamily: 'Biryani-ExtraBold',
    },

    userCityText: {
        color: 'white',
        fontSize: 9,
        fontFamily: 'Biryani-ExtraBold',
        opacity: .55
    },

    categoryText: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Biryani-ExtraBold'
    },
    
    avatarImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        opacity: .30
    },

    oLineSectionTwo: {
        marginTop: 20
    },

    oLineTwo: {
        borderBottomColor: '#979797',
        borderBottomWidth: 1,
        opacity: .15
    },

});

export default Leaderboard;
