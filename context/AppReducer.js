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
            return {...state, loader: action.payload};
        case "SET_LOGGEDIN":
            return {...state, loggedIn: action.payload};
        case "SET_MAIN_SCREEN":
            return {...state, mainScreen: action.payload};
        default:
            return state;
    }
}