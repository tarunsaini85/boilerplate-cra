import { updateAppName } from './actionCreaters';

export const mapStateToProps = (state) => {return {...state}}

export const mapDispatchToProps = (dispatch) => {
  return { 
      updateAppName : (appName) => {dispatch(updateAppName(appName))},
    }
}