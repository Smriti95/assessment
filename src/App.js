import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Login from './pages/login'
import Dashboard from './pages/dashboard'
import LoginReducer from './store/reducers/loginReducer'
import DashboardReducer from './store/reducers/dashboardReducer'
import './App.css'

const rootReducer = combineReducers({
    login : LoginReducer,
    dashboard : DashboardReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <div>
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route exact path="/dashboard" component={Dashboard}/>
                    </Switch>
                </div>
            </Provider>
        )
    }
}

export default App