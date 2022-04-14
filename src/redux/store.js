import thunk from 'redux-thunk'
import { applyMiddleware, createStore, combineReducers } from "redux"
import rootReducer from "./reducers/rootReducer"

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk))
}
export default configureStore