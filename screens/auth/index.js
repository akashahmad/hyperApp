import React, { useState, useContext } from 'react';
import { View } from "react-native";
import MainAuthScreen from '../mainAuthScreen';
import GetStartedScreen from '../getStartedScreen';
import AddNameScreen from '../addNameScreen';
import SignUpSuccessScreen from '../signUpSuccessScreen';
import LogInScreen from '../logInScreen';
import LogInSuccessScreen from '../logInSuccessScreen';
import OnBoardingOne from '../onboardingOneScreen';
import OnBoardingTwo from '../onboardingTwoScreen';
import OnBoardingThree from '../onboardingThreeScreen';


const App = () => {
    const [show, setShow] = useState(null);
    const [email, setEmail] = useState("");
    const [emailValidator, setEmailValidator] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordValidator, setPasswordValidator] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setdob] = useState("");
    const [gender, setGender] = useState("");
    const [genderValidator, setGenderValidator] = useState(false)
    const [dobValidator, setdobValidator] = useState(false)
    const [weight, setWeight] = useState()
    const [weightValidator,setWeightValidator]=useState()
    const showComponent = () => {
        switch (show) {
            case "login":
                return <LogInScreen
                    setShow={setShow}
                />;
            case "signup":
                return <GetStartedScreen
                    setShow={setShow}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    emailValidator={emailValidator}
                    setEmailValidator={setEmailValidator}
                    passwordValidator={passwordValidator}
                    setPasswordValidator={setPasswordValidator}
                />;
            case "addName":
                return <AddNameScreen
                    setShow={setShow}
                    email={email}
                    firstName={firstName}
                    setFirstName={setFirstName}
                    lastName={lastName}
                    setLastName={setLastName}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    password={password}
                />;
            case "onBoardingOne":
                return <OnBoardingOne
                    setShow={setShow}
                />;
            case "onBoardingTwo":
                return <OnBoardingTwo
                    setShow={setShow}
                    gender={gender}
                    setGender={setGender}
                    dob={dob}
                    setdob={setdob}
                    genderValidator={genderValidator}
                    setGenderValidator={setGenderValidator}
                    dobValidator={dobValidator}
                    setdobValidator={setdobValidator}
                    setWeight={setWeight}
                    weight={weight}
                    setWeightValidator={setWeightValidator}
                    weightValidator={weightValidator}
                />;
            case "onBoardingThree":
                return <OnBoardingThree
                    setShow={setShow}
                    email={email}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    password={password}
                    setFirstName={setFirstName}
                    firstName={firstName}
                    setLastName={setLastName}
                    lastName={lastName}
                    setGender={setGender}
                    gender={gender}
                    setdob={setdob}
                    dob={dob}
                    setWeight={setWeight}
                    weight={weight}
                />;
            case "logInSuccess":
                return <LogInSuccessScreen
                    setShow={setShow}
                />;
            case "signUpSuccess":
                return <SignUpSuccessScreen
                    setShow={setShow}
                />;

            default:
                return <MainAuthScreen setShow={setShow} />
        }
    };
    return (
        <View style={{ flex: 1 }}>
            {showComponent()}
        </View>
    );
};

export default App;
