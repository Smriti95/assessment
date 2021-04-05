import React, { useEffect } from 'react'
import Modal from '@material-ui/core/Modal';
import { connect, useSelector, useDispatch } from 'react-redux'

import './EditTask.css'
import { editTask } from '../../store/actions/dashboardAction'

const EditTask = (props) => {

    const [newTaskName, setNewTaskName] = React.useState("")
    const dispatch = useDispatch()

    const onClickHandler = event => {
        event.preventDefault()
        let data = {id: props.id, name: newTaskName, completed: props.completed}
        dispatch(editTask(data))
        props.onClose(false)
    }

    const onChangeHandler = event => {
        setNewTaskName(event.target.value)
    }

    return (
        <Modal
            open={props.open}
        >
            <div className="EditModalContainer">
                <div>Edit Task</div>
                <form onSubmit={onClickHandler}>
                    <input name="taskName" type="text" placeholder="Task Name" value={newTaskName} onChange={onChangeHandler} />
                    <input type="submit" value="OK"/>
                </form>
            </div>
        </Modal>
    )
}

export default connect()(EditTask)