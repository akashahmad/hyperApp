import React, {useContext} from "react";
import {GlobalContext} from '../../../context/GlobalState';
import {ScrollView, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import MenuLogo from '../../../assets/images/menu-logo.png';
import Muscle from '../../../assets/images/muscle-two.png';
import Leaderboard from '../../../assets/images/leaderboard.png';
import Dumbell from '../../../assets/images/dumbell.png';
import Guide from '../../../assets/images/guide.png';
import Bluetooth from '../../../assets/images/bluetooth.png';
import Edit from '../../../assets/images/edit.png';
import Logout from '../../../assets/images/logout.png';
import auth from '@react-native-firebase/auth';
export default({navigation}) => {
    const {setUser, setId, setLoggedIn,user} = useContext(GlobalContext);
//console.log(user)
    const signOut = () => {
        auth().signOut();
        setUser(null);
        setId(null);
        setLoggedIn(false);
    };
    let Name=user.firstName+' '+user.lastName
    return (
        <View style={ styles.fullScreenView }>
            <View style={ styles.viewContainer }>
                <View style={ styles.headerSection }>
                    <Image source={ MenuLogo }  style={ styles.menuLogo }/>
                    <View style={ styles.namePlusIntensityContainer }>
                        <Text style={ styles.nameText }>
                           {Name}
                        </Text>
                        <View style={ styles.intensityContainer }>
                            <Image source={ Muscle }  style={ styles.muscleImage }/>
                            <Text style={ styles.intensityText }>
                                524
                            </Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('LeaderBoard')} style={ styles.menuItemSection }>
                    <Image source={ Leaderboard }  style={ styles.menuImage }/>
                    <Text style={ styles.menuText }>
                        LEADERBOARD
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('WorkoutHistory')} style={ styles.menuItemSection }>
                    <Image source={ Dumbell }  style={ styles.menuImageTwo }/>
                    <Text style={ styles.menuTextTwo }>
                        WORKOUT HISTORY
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('HRGuide')} style={ styles.menuItemSection }>
                    <Image source={ Guide }  style={ styles.menuImageThree }/>
                    <Text style={ styles.menuTextThree }>
                        HEART RATE GUIDE
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('PairShirt')} style={ styles.menuItemSection }>
                    <Image source={ Bluetooth }  style={ styles.menuImageFour }/>
                    <Text style={ styles.menuTextFour }>
                        PAIR SHIRT
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')} style={ styles.menuItemSection }>
                    <Image source={ Edit }  style={ styles.menuImageFive }/>
                    <Text style={ styles.menuTextFive }>
                        EDIT PROFILE
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>signOut()} style={ styles.menuItemSection }>
                    <Image source={ Logout }  style={ styles.menuImageSix }/>
                    <Text style={ styles.menuTextSix }>
                        LOGOUT
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    fullScreenView: {
        flex: 1,
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    viewContainer: {
        width: '80%',
        height: '90%'
    },

    headerSection: {
        marginTop: 15,
        // marginTop: '5%',
        display: 'flex',
        // justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },

    menuLogo: {
        // marginTop: '10%',
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },

    namePlusIntensityContainer: {
        // marginTop: '10%',
        marginLeft: '7%'
    },

    nameText: {
        color: 'white',
        // fontSize: 12,
        fontFamily: 'Biryani-Bold',
        fontSize: RFPercentage(1.75),
    },

    intensityContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 1
    },

    muscleImage: {
        width: 14,
        height: 14,
        resizeMode: 'contain'
    },

    intensityText: {
        color: 'white',
        // fontSize: 12,
        fontFamily: 'Biryani-Light',
        fontSize: RFPercentage(1.6),
        opacity: .72,
        marginLeft: 8
    },

    menuItemSection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: '5%'
    },

    menuImage: {
        width: 17,
        height: 17,
        resizeMode: 'contain',
        marginTop: '40%',
        marginLeft: '2%',
    },

    menuText: {
        color: 'white',
        // fontSize: 12,
        fontFamily: 'Biryani-Bold',
        fontSize: RFPercentage(1.4),
        marginLeft: '11%',
        marginTop: '42%'
    },

    menuImageTwo: {
        width: 24,
        height: 20,
        resizeMode: 'contain',
        marginTop: '12%',
        marginLeft: '2%',
    },

    menuTextTwo: {
        color: 'white',
        // fontSize: 12,
        fontFamily: 'Biryani-Bold',
        fontSize: RFPercentage(1.4),
        marginLeft: '7%',
        marginTop: '12%'
    },

    menuImageThree: {
        width: 19,
        height: 19,
        resizeMode: 'contain',
        marginTop: '12%',
        marginLeft: '2%',
    },

    menuTextThree: {
        color: 'white',
        // fontSize: 12,
        fontFamily: 'Biryani-Bold',
        fontSize: RFPercentage(1.4),
        marginLeft: '10%',
        marginTop: '12%'
    },

    menuImageFour: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
        marginTop: '12%',
        marginLeft: '2%',
    },

    menuTextFour: {
        color: 'white',
        // fontSize: 12,
        fontFamily: 'Biryani-Bold',
        fontSize: RFPercentage(1.4),
        marginLeft: '11%',
        marginTop: '12%'
    },

    menuImageFive: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
        marginTop: '12%',
        marginLeft: '2%',
    },

    menuTextFive: {
        color: 'white',
        // fontSize: 12,
        fontFamily: 'Biryani-Bold',
        fontSize: RFPercentage(1.4),
        marginLeft: '11%',
        marginTop: '12%'
    },

    menuImageSix: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
        marginTop: '12%',
        marginLeft: '2%',
    },

    menuTextSix: {
        color: 'white',
        // fontSize: 12,
        fontFamily: 'Biryani-Bold',
        fontSize: RFPercentage(1.4),
        marginLeft: '11%',
        marginTop: '12%'
    },

})
