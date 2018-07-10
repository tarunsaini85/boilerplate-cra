import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import rootReducer from './reducer'

const history = createBrowserHistory()

const initialState = {}

const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      // ... other middlewares ...
    ),
  ),
)

window.store = store;
/* eslint-disable*/
store.subscribe(()=>{lfStore.setItem("cra_app_2_STORE",store.getState())})
// lfStore.getItem("cra_app_2_STORE").then(v=>console.log(123,v)).catch(e=>console.log(456,e))
/* eslint-enable*/

export default store;