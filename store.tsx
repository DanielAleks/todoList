import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import todosReducer, { todoObjT } from './src/reducers/todosReducer'
import roomsReducer, { roomObjT } from './src/reducers/roomsReducer'
import listsReducer, { listObjT } from './src/reducers/listsReducer'

export interface rootStoreT {
  todos: todoObjT[]
  rooms: roomObjT[]
  lists: listObjT[]
}

const rootReducer = combineReducers({
  todos: todosReducer,
  rooms: roomsReducer,
  lists: listsReducer
})


const initialState = {}

const middleware = [thunk] 

const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default configureStore
