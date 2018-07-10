import * as actionTypes from '../../redux/actionTypes'

const updateAppNameReducer = (state="Default App Name", action) => {
    switch(action.type){
        case actionTypes.UPDATE_APP_NAME : {
            return action.payload
        }
        default : {
            return state
        }
    }
}

export default updateAppNameReducer