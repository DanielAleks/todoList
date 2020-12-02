import { ADD_ROOM, REMOVE_ROOM } from "./types"

export interface roomObjT {
  value: string
  id: number
}
const initialState = []


export default (state = initialState, { type, payload }) => {
  switch (type) {

    case ADD_ROOM:
      return [...state, { id: Math.floor(Math.random() * 10000), value: payload }]

    case REMOVE_ROOM:

      return state.filter(room => room.id !== payload)


    default:
      return state
  }
}
