import { View, Picker, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar, TextInput, MenuOption } from 'react-native';
import React, { useState } from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import BackTwo from '../../assets/images/back-two.png';
import FlashMessage from "react-native-flash-message";
import { GlobalProvider } from '../../context/GlobalState';
import AuthHandler from '../authHandler'
import Calender from '../../assets/images/calendar.png'
import DatePicker from 'react-native-datepicker'
const OnboardingTwoScreen = (props) => {
    let { setShow, setGender, gender, setdob, dob, genderValidator, setGenderValidator, dobValidator, setdobValidator } = props
    const showNext = () => {
        if (!dob || !gender) {
            if (!dob) {
                setdobValidator(true)
                setGenderValidator(false)
               
            }
            else if (!gender) {
                setGenderValidator(true)
                setdobValidator(false)
            }
        }

        else {
            setShow("onBoardingThree")
        }
    }
    return (
        <View style={styles.fullScreenView}>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <View style={styles.viewContainer}>
                <View style={ styles.backButtonContainer }>
                    <TouchableOpacity onPress={() => setShow("onBoardingOne")}>
                        <Image source={BackTwo} style={styles.backImage} />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputTextSection}>
                    <Text style={styles.inputTextTitle}>
                        To get started, we need to calculate your maximum heart rate using your age and gender.
                    </Text>
                </View>
                <View style={styles.inputSection}>
                    <DatePicker
                        // style={{width: 500}}

                        // mode="date"
                        placeholder="MM / DD / YYYY"
                        // format="YYYY-MM-DD"
                        date={dob}
                        // minDate="2016-05-01"
                        // maxDate="2016-06-01"
                        // confirmBtnText="Confirm"
                        // cancelBtnText="Cancel"
                        iconSource={Calender}
                        customStyles={{
                            dateInput: styles.whenDateInput,
                            dateIcon: styles.dateIcon
                        }}
                        style={{ width: "100%", marginTop: 20 }}
                        onDateChange={(date) => { setdob(date) }}

                    />
                    {
                        dobValidator &&
                        <Text
                            style={{ color: "red" }}>{"date of birth is required"}</Text>
                    }
                    {/* <TextInput
                        style={ styles.inputFieldBirthday }
                        placeholder='MM / DD / YYYY'
                    >
                    </TextInput> */}
                    {/* <TextInput
                        style={ styles.inputFieldGender }
                        placeholder='Gender'
                    >
                    </TextInput> */}
                    <Picker
                        selectedValue={gender ? gender : ''}
                        onValueChange={(itemValue, itemPosition) =>
                            setGender(itemValue)}
                        style={{ backgroundColor: "white", marginTop: 30 }}>
                        <Picker.Item value="" label="Select Gender" />
                        <Picker.Item value="male" label="Male" />
                        <Picker.Item value="female" label="Female" />
                    </Picker>
                    
                    {
                        genderValidator &&
                        <Text
                            style={{ color: "red" }}>{"gender is required"}</Text>
                    }
                </View>
                <View style={styles.circlePlusButtonSection}>
                    <View style={styles.circleContainer}>
                        <View style={styles.circleDark}></View>
                        <View style={styles.circleLight}></View>
                        <View style={styles.circleDark}></View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.signUpButton}
                            onPress={() => showNext()}
                        >
                            <LinearGradient
                                colors={['#55CBFF', '#63FFCF']}
                                style={styles.gradient}
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            >
                                <Text style={styles.signUpButtonText}>NEXT</Text>
                            </LinearGradient>
                        </TouchableOpacity>
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

    inputTextSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 40
    },

    inputTextTitle: {
        color: 'white',
        // fontSize: 12,
        fontSize: RFPercentage(1.5),
        fontFamily: 'Biryani-Bold',
        textAlign: 'center',
        marginTop: '10%',
        width: '95%'
    },

    inputSection: {
        // marginTop: 20,
        marginTop: '5%',
    },

    inputFieldBirthday: {
        backgroundColor: 'white',
        borderRadius: 9,
        padding: 14,
        fontFamily: 'Biryani-Regular',
        fontSize: RFPercentage(1.75)
    },

    inputFieldGender: {
        backgroundColor: 'white',
        borderRadius: 9,
        padding: 14,
        fontFamily: 'Biryani-Regular',
        marginTop: 10
    },

    circlePlusButtonSection: {
        marginTop: '5%',
        width: '100%'
    },

    circleContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10
    },

    circleLight: {
        width: 7,
        height: 7,
        borderRadius: 44 / 2,
        backgroundColor: 'white',
        marginLeft: 4,
        marginRight: 4
    },

    circleDark: {
        width: 7,
        height: 7,
        borderRadius: 44 / 2,
        backgroundColor: '#686868',
        marginLeft: 4,
        marginRight: 4
    },

    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    signUpButton: {
        width: '100%'
    },

    gradient: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 10
    },

    signUpButtonText: {
        color: 'white',
        // fontSize: 14,
        fontFamily: 'Biryani-ExtraBold',
        fontSize: RFPercentage(1.75),
    },
    whenDateInput: {
        paddingLeft: 20,
        paddingRight: 20,
        color: "rgb(109, 114, 120)",
        fontSize: 16,
        alignItems: "flex-start",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "rgb(220, 221, 223)",
        borderStyle: "solid",
        backgroundColor: "white",
        height: 56

    },
    dateIcon: {
        position: 'absolute',
        right: 0,
        top: 4,
        marginLeft: 0
    },


});

export default OnboardingTwoScreen;
