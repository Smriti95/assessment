import * as ActionType from '../actions/ActionTypes'

const initialState = {
    allTasks: [],
    openNewTaskPopup: false,
    dashboardData: [{
        totalTasks: 0,
        tasksCompleted: 0,
        latestTasks: []
    }]
}

const DashboardReducer = (state=initialState, action) => {
    switch(action.type){
        case ActionType.ALL_TASKS:
            return {...state, allTasks: action.value}
        case ActionType.OPEN_NEW_TASK_POPUP:
            return {...state, openNewTaskPopup: action.value}
        case ActionType.DASHBOARD_DATA:
            return {...state, dashboardData: action.value}
        default: 
            return {...state}
    }
    return state
}

export default DashboardReducer