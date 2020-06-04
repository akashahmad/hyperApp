import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    id: null,
    user: null,
    loader: false,
    loggedIn: false,
    hrm: '',
    connectDevice: "CONNECT SHIRT",
    deviceId: "",
    mainScreen: "home",
    calories: 0,
    seconds: 0,
    minutes: 0,
    warmUpMinutes: 0,
    warmUpSeconds: 0,
    fatBurningMinutes: 0,
    fatBurningSeconds: 0,
    proAthleteMinutes: 0,
    proAthleteSeconds: 0,
    beastMinutes: 0,
    beastSeconds: 0,

}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function setUser(user) {
        dispatch({
            type: 'SET_USER',
            payload: user
        });
    }

    function setId(id) {
        dispatch({
            type: 'SET_ID',
            payload: id
        });
    }
    function setHrm(hrm) {
        dispatch({
            type: 'SET_HRM',
            payload: hrm
        });
    }

    function setLoader(status) {
        dispatch({
            type: 'SET_LOADER',
            payload: status
        });
    }

    function setLoggedIn(status) {
        dispatch({
            type: 'SET_LOGGEDIN',
            payload: status
        });
    }

    function setMainScreen(value) {
        dispatch({
            type: 'SET_MAIN_SCREEN',
            payload: value
        });
    }
    function setCalories(calories) {
        dispatch({
            type: 'SET_CALORIES',
            payload: calories
        });
    }
    function setSeconds(seconds) {
        dispatch({
            type: 'SET_SECONDS',
            payload: seconds
        });
    }
    function setMinutes(minutes) {
        dispatch({
            type: 'SET_MINUTES',
            payload: minutes
        });
    }

    function setConnectDevice(connectDevice) {
        dispatch({
            type: 'SET_CONNECT_DEVICE',
            payload: connectDevice
        });
    }

    function setWarmUpMinutes(warmUpMinutes) {
        dispatch({
            type: 'SET_WARMUP_MINUTES',
            payload: warmUpMinutes
        });
    }
    function setWarmUpSeconds(warmUpSeconds) {
        dispatch({
            type: 'SET_WARMUP_SECONDS',
            payload: warmUpSeconds
        });
    }
    function setFatBurningMinutes(fatBurningMinutes) {
        dispatch({
            type: 'SET_FATBURNING_MINUTES',
            payload: fatBurningMinutes
        });
    }
    function setFatBurningSeconds(fatBurningSeconds) {
        dispatch({
            type: 'SET_FATBURNING_SECONDS',
            payload: fatBurningSeconds
        });
    }
    function setProAthleteMinutes(proAthleteMinutes) {
        dispatch({
            type: 'SET_PROATHLETE_MINUTES',
            payload: proAthleteMinutes
        });
    }
    function setProAthleteSeconds(proAthleteSeconds) {
        dispatch({
            type: 'SET_PROATHLETE_SECONDS',
            payload: proAthleteSeconds
        });
    }
    function setBeastMinutes(beastMinutes) {
        dispatch({
            type: 'SET_BEAST_MINUTES',
            payload: beastMinutes
        });
    }
    function setBeastSeconds(beastSeconds) {
        dispatch({
            type: 'SET_BEAST_SECONDS',
            payload: beastSeconds
        });
    }


    function setDeviceId(deviceId) {
        dispatch({
            type: 'SET_DEVICE_ID',
            payload: deviceId
        });
    }


    return (<GlobalContext.Provider value={{
        id: state.id,
        user: state.user,
        loader: state.loader,
        loggedIn: state.loggedIn,
        mainScreen: state.mainScreen,
        hrm: state.hrm,
        connectDevice: state.connectDevice,
        deviceId: state.deviceId,
        calories: state.calories,
        seconds: state.seconds,
        minutes: state.minutes,
        warmUpMinutes: state.warmUpMinutes,
        warmUpSeconds: state.warmUpSeconds,
        fatBurningMinutes: state.fatBurningMinutes,
        fatBurningSeconds: state.fatBurningSeconds,
        proAthleteMinutes: state.proAthleteMinutes,
        proAthleteSeconds: state.proAthleteSeconds,
        beastMinutes: state.beastMinutes,
        beastSeconds: state.beastSeconds,
        setCalories,
        setWarmUpMinutes,
        setWarmUpSeconds,
        setFatBurningMinutes,
        setFatBurningSeconds,
        setProAthleteMinutes,
        setProAthleteSeconds,
        setBeastMinutes,
        setBeastSeconds,
        setSeconds,
        setMinutes,
        setDeviceId,
        setConnectDevice,
        setHrm,
        setUser,
        setId,
        setLoader,
        setLoggedIn,
        setMainScreen
    }}>
        {children}
    </GlobalContext.Provider>);
}