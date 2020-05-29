import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput, Alert } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import BackTwo from '../../assets/images/back-two.png';
import Calories from '../../assets/images/gradient-fire.png';
import Clock from '../../assets/images/gradient-clock.png';
import Heart from '../../assets/images/gradient-heart.png';
import Muscle from '../../assets/images/gradient-muscle.png';
import { BleManager } from 'react-native-ble-plx';
import { Buffer } from 'buffer';
const HEAR_RATE_SERVICE_GUID = '180D';
const HEART_RATE_MEASUREMENT_CHARACTERISTIC_GUID = '2A37';
const manager = new BleManager()
const Leaderboard = (props) => {
    const { setHrm,hrm,connectDevice,setConnectDevice,deviceId,setDeviceId } = useContext(GlobalContext);
    const { navigation } = props;
    const [errorMessage, setErrorMessage] = useState('');
    const scanAndConnect = () => {
        if(connectDevice==='CONNECT SHIRT'){
            setErrorMessage('')
        setConnectDevice('CONNECTING...')
        manager.startDeviceScan([HEAR_RATE_SERVICE_GUID], null, (error, device) => {
            
            if (error) {
                setConnectDevice('CONNECT SHIRT')  
setErrorMessage("Something went wrong please make sure you have allowed all the permissions and your BLUETOOTH and LOCATION is ON")
                console.log(error)
            }
            else if (device.name) {
                
                manager.stopDeviceScan()
                device.connect().then(async (device) => {
                    return await device.discoverAllServicesAndCharacteristics()
                }).then(async (device) => {
                    if (device.isConnected()) {
                        console.log("connected")
                        setDeviceId(device.id)
                        console.log(device.id)
                        manager.monitorCharacteristicForDevice(
                            device.id,
                            HEAR_RATE_SERVICE_GUID,
                            HEART_RATE_MEASUREMENT_CHARACTERISTIC_GUID,
                            (error, characteristic) => {
                                if (error) {
                                    setErrorMessage("YOUR DEVICE IS DISSCONNECTED")
                                    console.log('HeartRateMonitor.startHeartRateMonitor ... monitorCharacteristicForDevice: error=', error);
                                }

                                if (characteristic && characteristic.value) {
                                    let heartRate = -1;
                                    let decoded = Buffer.from(characteristic.value, 'base64');
                                    let firstBitValue = decoded.readInt8(0) & 0x01;
                                    if (firstBitValue == 0) {
                                        setConnectDevice('DISCONNECT')
                                        // Heart Rate Value Format is in the 2nd byte
                                      setHrm(decoded.readUInt8(1))
                                        console.log(hrm);
                                    } else {
                                        setConnectDevice('DISCONNECT')
                                        setHrm((decoded.readInt8(1) << 8) + decoded.readInt8(2))
                                        // Heart Rate Value Format is in the 2nd and 3rd bytes
                                        console.log((decoded.readInt8(1) << 8) + decoded.readInt8(2));
                                    }
                                    // console.log(characteristic)
                                }
                            })
                    }
                })
                // console.log(device)

            }
            else {
               setErrorMessage("No Device Found Make Sure your device is connected with strip and try agin if you face the same problem then put out the battery of device and ")
            }
        })
     }
    else{
     
               
              manager.cancelDeviceConnection(deviceId);
               
          setHrm('') 
          
          setConnectDevice("CONNECT SHIRT")
          setErrorMessage('')
    }
    }

    return (

        <View style={styles.fullScreenView}>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <View style={styles.viewContainer}>
                <View style={styles.backButtonContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={ BackTwo } style={ styles.backImage }/>
                    </TouchableOpacity>
                </View>
                <View style={styles.liveStatsTitleSection}>
                    <Text style={styles.liveStatsText}>
                        PAIR SHIRT
                    </Text>
                    
                </View>

                <Text style={{ color: "red" }}>{errorMessage}</Text>

                <View style={styles.pairButtonSection}>
                    <TouchableOpacity style={styles.signUpButton} onPress={scanAndConnect}>
                        <LinearGradient
                            colors={['#55CBFF', '#63FFCF']}
                            style={styles.gradient}
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.signUpButtonText}>{connectDevice ? connectDevice : "CONNECT SHIRT"}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
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
        marginTop: '5%',
    },

    pairButtonSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
        // backgroundColor: 'blue'
    },

    signUpButton: {
        width: '70%'
    },

    gradient: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingTop: 14,
        paddingBottom: 14,
        marginTop: 12
    },

    signUpButtonText: {
        color: 'white',
        // fontSize: 14,
        fontSize: RFPercentage(1.75),
        fontFamily: 'Biryani-ExtraBold'
    },

});

export default Leaderboard;
