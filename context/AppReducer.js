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
        case "SET_CALORIES":
            return { ...state, calories: action.payload };
        case "SET_SECONDS":
            return { ...state, seconds: action.payload };
        case "SET_MINUTES":
            return { ...state, minutes: action.payload };
        case "SET_WARMUP_MINUTES":
            return { ...state, warmUpMinutes: action.payload };

        case "SET_WARMUP_SECONDS":
            return { ...state, warmUpSeconds: action.payload };

        case "SET_FATBURNING_MINUTES":
            return { ...state, fatBurningMinutes: action.payload };

        case "SET_FATBURNING_SECONDS":
            return { ...state, fatBurningSeconds: action.payload };

        case "SET_PROATHLETE_MINUTES":
            return { ...state, proAthleteMinutes: action.payload };

        case "SET_PROATHLETE_SECONDS":
            return { ...state, proAthleteSeconds: action.payload };

        case "SET_BEAST_MINUTES":
            return { ...state, beastMinutes: action.payload };

        case "SET_BEAST_SECONDS":
            return { ...state, beastSeconds: action.payload };

        default:
            return state;
    }
}