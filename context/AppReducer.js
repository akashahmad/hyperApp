export default (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'SET_ID':
            return {
                ...state,
                id: action.payload
            }
        case "SET_LOADER":
            return { ...state, loader: action.payload };
        case "SET_LOGGEDIN":
            return { ...state, loggedIn: action.payload };
        case "SET_MAIN_SCREEN":
            return { ...state, mainScreen: action.payload };
        case "SET_HRM":
            return { ...state, hrm: action.payload };
        case "SET_CONNECT_DEVICE":
            return { ...state, connectDevice: action.payload };
        case "SET_DEVICE_ID":
            return { ...state, deviceId: action.payload };
        default:
            return state;
    }
}