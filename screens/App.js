import React, {useState} from 'react';
import FlashMessage  from "react-native-flash-message";
import {View} from "react-native";
import {GlobalProvider} from '../context/GlobalState';
import AuthHandler from './authHandler'

const App: () => React$Node = () => {
    return (
        <View style={{flex: 1}}>
            <GlobalProvider>
                <AuthHandler/>
            </GlobalProvider>
            <FlashMessage
                position="top"
                autoHide={true}
                hideOnPress={true}
                duration={20000}
            />
        </View>
    );
};

export default App;
