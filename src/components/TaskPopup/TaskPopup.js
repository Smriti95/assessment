import React from 'react'
import Modal from '@material-ui/core/Modal';
import { connect, useSelector, useDispatch } from 'react-redux'

import './TaskPopup.css'
import { setNewTask, openNewTaskPopup, getAllTasks } from '../../store/actions/dashboardAction'

const TaskPopup = (props) => {

    const [taskName, setTaskName] = React.useState("")
    const dispatch = useDispatch()

    const onClickHandler = event => {
        event.preventDefault()
        let data = { name: taskName, completed: false}
        dispatch(setNewTask(data))
        dispatch(openNewTaskPopup(false))
        dispatch(getAllTasks())
        setTaskName("")
    }

    const onChangeHandler = event => {
        setTaskName(event.target.value)
    }

    return (
        <Modal
            open={props.open}
        >
            <div className="TaskModalContainer">
                <div className="taskTitle">+ New Task</div>
                <form className="formContainer" onSubmit={onClickHandler}>
                    <input className="taskField" name="taskName" type="text" placeholder="Task Name" value={taskName} onChange={onChangeHandler} />
                    <input className="newTaskButton" type="submit" value="+ New Task"/>
                </form>
            </div>
        </Modal>
    )
}

export default connect()(TaskPopup)