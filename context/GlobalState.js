import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    id: null,
    user: null,
    loader: false,
    loggedIn: false,
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


    return (<GlobalContext.Provider value={{
        id: state.id,
        user: state.user,
        loader: state.loader,
        loggedIn: state.loggedIn,
        mainScreen: state.mainScreen,
        setUser,
        setId,
        setLoader,
        setLoggedIn,
        setMainScreen
    }}>
        {children}
    </GlobalContext.Provider>);
}