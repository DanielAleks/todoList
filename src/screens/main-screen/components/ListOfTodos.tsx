import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { rootStoreT } from '../../../../store'
import { ADD_TODO, REMOVE_TODO } from '../../../reducers/types'
const ListOfTodos = () => {

  const todos = useSelector((state: rootStoreT) => state.todos)
  const dispatch = useDispatch()

  const deleteTodo = (payload) => {
    dispatch({type: REMOVE_TODO, payload })
  }
  

  return (
    <View>
        {todos.map((item) =>
            <TouchableOpacity key={item.id} onPress={() => deleteTodo(item.id)}
            >
            <Text style={{ backgroundColor: 'gray' }}>{item.value}</Text></TouchableOpacity>
            )}
    </View>
  )
}

//nnfe
export default ListOfTodos