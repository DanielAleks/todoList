import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import todosReducer, { todoObjT } from './src/reducers/todosReducer'

export interface rootStoreT {
  todos: todoObjT[]
}

const rootReducer = combineReducers({
  todos: todosReducer
})


const initialState = {}

const middleware = [thunk] 

const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default configureStore
