import React from 'react'
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'

import './InfoCard.css'

class InfoCard extends React.Component{

    render(){

        let completedTasks = this.props && this.props.dashboardData.tasksCompleted
        let totalTasks = this.props && this.props.dashboardData.totalTasks
        let latestTasks = this.props && this.props.dashboardData.latestTasks
       
        return(
            <div>
                <Grid container className="infoCardContainer">
                    <Grid item xs={12} sm={4} className="tasksCompletedCard">
                        <div className="tasksCompleted">Tasks Completed</div>
                        <div className="tasksNumberContainer">
                            <div><span className="completed">{completedTasks}</span></div>
                            <div className="totalTaskContainer"><span className="totalTasks">/ {totalTasks}</span></div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} className="latestTasksCard">
                        <div className="latestCreatedText">Latest Created Tasks</div>
                        <div className="list">
                        <ul>
                            {latestTasks && latestTasks.length > 0 && latestTasks.map(ele => (
                                <li style={ele.completed ? {textDecoration: "line-through"} : {}}>{ele.name}</li>
                            ))}
                        </ul>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        dashboardData: state.dashboard.dashboardData
    }
}

export default connect(mapStateToProps)(InfoCard)