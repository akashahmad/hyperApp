import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    id: null,
    user: null,
    loader: false,
    loggedIn: false,
    hrm:'',
    connectDevice:"CONNECT SHIRT",
    deviceId:"",
    mainScreen: "home"
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
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
    function setConnectDevice(connectDevice) {
        dispatch({
            type: 'SET_CONNECT_DEVICE',
            payload: connectDevice
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
        hrm:state.hrm,
        connectDevice:state.connectDevice,
        deviceId:state.deviceId,
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