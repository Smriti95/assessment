import React from 'react'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import {connect} from 'react-redux'

import {editTask,deleteTask} from '../../store/actions/dashboardAction'
import EditTask from './EditTask'
import './TaskList.css'

class TaskList extends React.Component{

    constructor(){
        super()
        this.state={
            checked: false,
            openEdit: false
        }
    }

    componentDidMount(){
        this.setState({checked: this.props.listItem.completed})
    }

    onCheckHandler = event => {
        this.setState({checked: event.target.checked})
        let data = {name: this.props.listItem.name, completed: event.target.checked, id: this.props.listItem.id }
        this.props.dispatch(editTask(data))
    }

    onEditHandler = () => {
        this.setState({openEdit: true})
    }

    onDeleteHandler = () => {
        this.props.dispatch(deleteTask(this.props.listItem.id))
    }

    onCloseEditHandler = value => {
        this.setState({openEdit: value})
    }

    render(){

        const { listLength, listItem } = this.props
        
        return(
            <div className="listItem">
                <input className="checkbox" type="checkbox" checked={this.state.checked} onChange={this.onCheckHandler}/>
                <div className="taskName" style={listItem.completed || this.state.checked ? {textDecoration: "line-through", color: "grey"} : {color: "blue"}}>{listItem.name}</div>
                <EditIcon className="editIcon" onClick={this.onEditHandler}/>
                <DeleteIcon className="deleteIcon" onClick={this.onDeleteHandler}/>
                <EditTask open={this.state.openEdit} taskName={listItem.name} id={listItem.id} completed={listItem.completed} onClose={this.onCloseEditHandler}/>
            </div>
        )
    }
}

export default connect()(TaskList)