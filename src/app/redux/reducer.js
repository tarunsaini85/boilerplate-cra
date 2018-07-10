import {combineReducers} from 'redux'
import updateAppNameReducer from '../flows/home/UpdateAppNameReducer'

export default combineReducers({
    appName : updateAppNameReducer
})