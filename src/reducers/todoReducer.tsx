import { ADD_TODO } from "./types"

const initialState = {

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD_TODO:
    return { ...state, ...payload }

  default:
    return state
  }
}
