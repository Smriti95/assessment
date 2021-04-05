import axios from 'axios';

import * as ActionType from './ActionTypes'
import {config} from '../../config/apis'

export const setDashboardData = value => {
    return{
        type: ActionType.DASHBOARD_DATA,
        value: value
    }
}

// export const getDashboardData = () => {
//     return dispatch => {
//         axios.get(config.dashboardData)
//         .then(res => {
//             console.log(res.data, "res data")
//             let data = {}
//             data.tasksCompleted = res.data.tasksCompleted
//             data.totalTasks = res.data.totalTasks
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }
// }

// export const setLatestTask = data => {
//     return dispatch => {
//         axios.post(config.updateLatestTask, data)
//         .then(res => {
//             dispatch(getDashboardData())
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }
// }

export const setAllTasks = value => {
    return{
        type: ActionType.ALL_TASKS,
        value: value
    }
}

export const getAllTasks = () => {
    return dispatch => {
        axios.get(config.getAllTasks)
            .then(res => {
                let data = res.data
                if(res.data !== null){
                    let allTasks = []
                    let tasksCompleted = 0
                    let latestTasks = []
                    Object.keys(data).map(key => {
                        allTasks.push({id: key, name: data[key].name, completed:data[key].completed})
                        if(data[key].completed === true){
                            tasksCompleted = tasksCompleted + 1
                        }
                    })
                    if(allTasks.length > 2){
                        for(let i = allTasks.length-1; i >= allTasks.length-3; i--){
                            latestTasks.push(allTasks[i])
                        }
                    }
                    
                    let dashboardData = {
                        totalTasks: allTasks.length,
                        tasksCompleted: tasksCompleted,
                        latestTasks: allTasks.length > 2 ? latestTasks : allTasks
                    }
                    console.log(dashboardData, "dash")
                    dispatch(setAllTasks(allTasks))
                    dispatch(setDashboardData(dashboardData))
                }
                else{
                    let dashboardData = {
                        totalTasks: 0,
                        tasksCompleted: 0,
                        latestTasks: []
                    }
                    dispatch(setAllTasks([]))
                    dispatch(setDashboardData(dashboardData))
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const setNewTask = (data) => {
    return dispatch => {
        axios.post(config.getAllTasks, data)
            .then(res => {
                dispatch(getAllTasks())
                dispatch(setLatestTask(data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const openNewTaskPopup = value => {
    return{
        type: ActionType.OPEN_NEW_TASK_POPUP,
        value: value
    }
}

export const editTask = data => {
    return dispatch => {
        let taskData = {name: data.name, completed: data.completed}
        axios.put(config.editTaskById.replace('{taskId}', data.id), taskData)
        .then(res => {
            dispatch(getAllTasks())
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const deleteTask = id => {
    return dispatch => {
        axios.delete(config.editTaskById.replace('{taskId}', id))
        .then(res => {
            dispatch(getAllTasks())
        })
        .catch(err => {
            console.log(err)
        })
    }
}