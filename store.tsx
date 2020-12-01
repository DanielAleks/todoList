import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import todoReducer from './src/reducers/todoReducer'

const rootReducer = combineReducers({
 todo: todoReducer
})

const initialState = {}

const middleware = [thunk] 

const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default configureStore
