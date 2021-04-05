import React from 'react'
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux'

import InfoCards from './InfoCard'
import TaskList from './TaskList'
import { openNewTaskPopup, getAllTasks } from '../../store/actions/dashboardAction'
import './Dashboard.css'

class DashboardComponent extends React.Component{

    constructor(){
        super()
        this.state={
            latestTasks: [],
            searchText: "",
            filteredTasks: []
        }
    }

    componentDidMount(){
        this.setState({latestTasks: this.props && this.props.allTasks, filteredTasks: this.props && this.props.allTasks})
    }

    searchTextHandler = event => {
        event.preventDefault()
        const filteredList = this.props.allTasks
        filteredList.filter(ele => ele.name && ele.name.toLowerCase().includes(event.target.value))
        this.setState({searchText: event.target.value, filteredTasks: filteredList})
    }

    newTaskHandler = () => {
        this.props.dispatch(openNewTaskPopup(true))
    }

    render(){
        const { latestTasks, filteredTasks } = this.state

        console.log(filteredTasks, "filtered tasks")
        return(
            <div className="dashboardComponent">
                <InfoCards />
                <div className="tasksContainer">
                    <Grid container>
                        <Grid item xs={12} sm={3}>
                            <div className="tasksText">Tasks</div>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <div className="searchContainer">
                                <SearchIcon className="searchIcon"/>
                                <input className="search" type="text" name="searchText" onChange={this.searchTextHandler} placeholder="Search by task name" value={this.state.searchText}/>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3} className="buttonContainer">
                            <button className="button" onClick={this.newTaskHandler}>+ New Task</button>
                        </Grid>
                    </Grid>
                </div>
                <div className="taskList">
                    {this.props.allTasks.length > 0 && this.props.allTasks.map(ele => (
                        <TaskList id={ele.id} listLength={this.props.allTasks.length} listItem={ele}/>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        allTasks: state.dashboard.allTasks
    }
}

export default connect(mapStateToProps)(DashboardComponent)