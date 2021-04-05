import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'

import { loginPopupHandler, loginSuccess } from '../../store/actions/loginAction'
import ProfileImage from '../../assests/images/profile.png'
import './Header.css'

const Header = (props) => {

    const dispatch = useDispatch()
    const userName = useSelector(state => state.login.userName)

    const logoutHandler = () => {
        props.history.push('/')
        dispatch(loginPopupHandler(true))
        dispatch(loginSuccess(false))
    }

    return(
        <div className="headerContainer">
            <img src={ProfileImage} alt="Profile Image" />
            <div className="userName">test01</div>
            <button className="logoutButton" onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default connect()(withRouter(Header))