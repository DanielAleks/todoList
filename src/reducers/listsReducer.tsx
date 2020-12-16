import { ADD_LIST, REMOVE_LIST } from "./types" 

export interface listObjT {
  value: string
  id: number
}
const initialState = []


export default (state = initialState, { type, payload }) => {
  switch (type) {

    case ADD_LIST:
      return [...state, { id: Math.floor(Math.random() * 10000), value: payload }]

    case REMOVE_LIST:

      return state.filter(todo => todo.id !== payload)


    default:
      return state
  }
}
