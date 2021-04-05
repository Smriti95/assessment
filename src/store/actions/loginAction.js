import axios from 'axios';

import * as ActionType from './ActionTypes'
import {config} from '../../config/apis'

export const loginSuccess = value => {
    return{
        type: ActionType.LOGIN_SUCCESS,
        value: value
    }
}

export const loginPopupHandler = value => {
    return{
        type: ActionType.LOGIN_POPUP_OPEN,
        value: value
    }
} 

export const setUserName = value => {
    return{
        type: ActionType.USERNAME,
        value: value
    }
}

export const login = (data, history) => {
    return dispatch => {
        axios.get(config.userInfo)
        .then(res => {
            let userDetails = res.data
            if(userDetails && userDetails.userName === data.name && userDetails.id === data.id){
                dispatch(loginSuccess(true))
                dispatch(loginPopupHandler(false))
                dispatch(setUserName(userDetails.userName))
                history.push('/dashboard')
            }
            else{
                dispatch(loginSuccess(false))
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}