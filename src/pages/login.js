import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'

import LoginPopup from '../components/LoginPopup/LoginPopup'
import { loginPopupHandler } from '../store/actions/loginAction'

const Login = () => {

    const dispatch = useDispatch()
    const openPopup = useSelector(state => state.login.openLoginPopup)
    const loginSuccess = useSelector(state => state.login.loginSuccess)

    return(
        <div>
            <LoginPopup open={openPopup}/>
        </div>
    )
}

export default connect()(Login)