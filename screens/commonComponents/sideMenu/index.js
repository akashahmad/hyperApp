import React, {useContext} from "react";
import {GlobalContext} from '../../../context/GlobalState';
import {ScrollView, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import NavLogoIcon from '../../../assets/images/nav-icon-logo.png';
import Login from '../../../assets/images/coffee.png';
import auth from '@react-native-firebase/auth';
export default({navigation}) => {
    const {setUser, setId, setLoggedIn} = useContext(GlobalContext);

    const signOut = () => {
        auth().signOut();
        setUser(null);
        setId(null);
        setLoggedIn(false);
    };
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.logoImageContainer}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Image
                        source={NavLogoIcon}
                        style={styles.logoImage}
                    />
                    </TouchableOpacity>
                </View>
                <View style={styles.navSectionStyle}>
                    <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')} style={styles.navRowFlex}>
                        <Image
                            source={Login}
                            style={styles.coffeeImage}
                        />
                        <Text style={styles.navItemStyle}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.navSectionStyle}>
                    <TouchableOpacity onPress={()=>navigation.navigate('LeaderBoard')} style={styles.navRowFlex}>
                        <Image
                            source={Login}
                            style={styles.coffeeImage}
                        />
                        <Text style={styles.navItemStyle}>Leader Board</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.navSectionStyle}>
                    <TouchableOpacity onPress={()=>navigation.navigate('LeaderBoardSearch')} style={styles.navRowFlex}>
                        <Image
                            source={Login}
                            style={styles.coffeeImage}
                        />
                        <Text style={styles.navItemStyle}>Leader Board Search</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.navSectionStyle}>
                    <TouchableOpacity onPress={()=>navigation.navigate('LiveStats')} style={styles.navRowFlex}>
                        <Image
                            source={Login}
                            style={styles.coffeeImage}
                        />
                        <Text style={styles.navItemStyle}>Live Stats</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.navSectionStyle}>
                    <TouchableOpacity onPress={() =>signOut()} style={styles.navRowFlexss}>
                        <Image
                            source={Login}
                            style={styles.coffeeImage}
                        />
                        <Text style={styles.navItemStyle}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({

    navRowFlexss: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -20
    },

    coffeeImage: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        marginBottom: 33
    },

    navRowFlex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    container: {
        paddingTop: 20,
        flex: 1,
    },
    navItemStyle: {
        padding: 10,
        fontSize: 15,
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomColor: "#E2E2E2",
        borderBottomWidth: 1,
        minWidth: 150,
        // textAlign: "center",
        color: "#ffffff",
        fontWeight: '600'

    },
    navSectionStyle: {
        display: "flex",
        alignItems: "center",
        paddingTop: 39
    },
    sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    logoImageContainer: {
        paddingTop: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    logoImage: {
        backgroundColor: "transparent",
        resizeMode: 'contain',
        height: 25,
        marginRight: 20
    },

})
