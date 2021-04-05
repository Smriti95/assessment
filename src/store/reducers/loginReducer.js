import * as ActionType from '../actions/ActionTypes'

const initialState = {
    openLoginPopup: true,
    loginSuccess: null,
    userName: ""
}

const LoginReducer = (state= initialState, action) => {
    switch(action.type){
        case ActionType.LOGIN_POPUP_OPEN:
            return {...state, openLoginPopup: action.value}
        case ActionType.LOGIN_SUCCESS:
            return {...state, loginSuccess: action.value}
        case ActionType.USERNAME:
            return {...state, userName: action.value}
        default:
            return {...state}
    }
    return state
}

export default LoginReducer