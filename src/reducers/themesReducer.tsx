import { THEMES } from "./types" 


const initialState = []


export default (state = initialState, { type, payload }) => {
  switch (type) {

    case THEMES:

      return state.filter(todo => todo.id !== payload)


    default:
      return state
  }
}