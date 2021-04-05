import React from 'react'
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

import './LoginPopup.css'
import {login} from '../../store/actions/loginAction'

class LoginPopup extends React.Component{

    constructor(props){
        super(props);
        this.state={
            id:"",
            name:""
        }
    }

    onChangeHandler = event => {
        let fieldName = event.target.name
        this.setState({[fieldName]: event.target.value})
    }

    handleLogin = (event) => {
        event.preventDefault()
        let data = {
            name: this.state.name,
            id: this.state.id
        }
        this.props.dispatch(login(data, this.props.history))
    }

    render(){
        return(
            <Modal
                open={this.props.open}
            >
            <div className="loginModalContainer">
                    <div className="loginTitle">
                        Login
                    </div>
                    <div className="formContainer">
                            <label>
                                <input className="loginField" name="id" type="text" value={this.state.id} onChange={this.onChangeHandler} placeholder="Id"/>
                            </label>
                            <label>
                                <input className="loginField" name="name" type="text" value={this.state.name} onChange={this.onChangeHandler} placeholder="Name"/>
                            </label>
                            <button className="loginButton" onClick={this.handleLogin}>Login</button>
                        {this.props.loginSuccess === false ? (
                            <div className="errorText">
                                Username or password is incorrect
                            </div>
                        ) : ""}
                    </div>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return{
        loginSuccess: state.login.loginSuccess
    }
}

export default connect(mapStateToProps)(withRouter(LoginPopup))