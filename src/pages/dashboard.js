import React, { useEffect } from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import Modal from '@material-ui/core/Modal';

import Header from '../components/Header/Header'
import TaskPopup from '../components/TaskPopup/TaskPopup'
import { getAllTasks, openNewTaskPopup } from '../store/actions/dashboardAction'
import DashboardComponent from '../components/Dashboard/Dashboard'
import './dashboard.css'

class Dashboard extends React.Component {

    constructor(){
        super()
        this.state={
            noTask: true
        }
    }

    componentDidMount(){
        this.props.dispatch(getAllTasks())
    }

    // componentDidUpdate(prevProps){
    //     if(prevProps.allTasks !== this.props.allTasks){
    //         this.props.dispatch(getAllTasks())
    //     }
    // }

    onClickHandler = () => {
        this.setState({noTask: false})
        this.props.dispatch(openNewTaskPopup(true))
    }

    render(){
        const { allTasks, openNewTaskPopup } = this.props
        const { noTask } = this.state
    return(
        <div>
            <Header/>
            {allTasks.length === 0 ? 
                (
                    <Modal
                        open={noTask}
                    >
                        <div className="noTaskModal">
                            <div className="noTaskTitle">You have no task.</div>
                            <button className="addTaskButton" onClick={this.onClickHandler}>+ New Task</button>
                        </div>
                    </Modal>
                ) : (
                    <DashboardComponent />
                )
            }
            <TaskPopup open={openNewTaskPopup}/>
        </div>
    )}
}

const mapStateToProps = state => {
    return{
        openNewTaskPopup: state.dashboard.openNewTaskPopup,
        allTasks: state.dashboard.allTasks
    }
}

export default connect(mapStateToProps)(Dashboard)