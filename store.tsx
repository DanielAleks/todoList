import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import roomsReducer, { roomObjT } from './src/reducers/roomsReducer'
import todosReducer, { todoObjT } from './src/reducers/todosReducer'

export interface rootStoreT {
  todos: todoObjT[]
  rooms: roomObjT[]
}

const rootReducer = combineReducers({
  todos: todosReducer,
  rooms: roomsReducer,
})


const initialState = {}

const middleware = [thunk] 

const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default configureStore
