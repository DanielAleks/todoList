import { ADD_TODO, REMOVE_TODO } from "./types" 

export interface todoObjT {
  value: string
  id: number
}
const initialState = []


export default (state = initialState, { type, payload }) => {
  switch (type) {
//!!!!!!!!! NOT BEING USED
    case ADD_TODO:
      return [...state, { id: Math.floor(Math.random() * 10000), value: payload }]

    case REMOVE_TODO:

      return state.filter(todo => todo.id !== payload)


    default:
      return state
  }
}
