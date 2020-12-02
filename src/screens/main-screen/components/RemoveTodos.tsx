import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { gloStyles } from '../../../../App'
import { rootStoreT } from '../../../../store'
import { REMOVE_TODO } from '../../../reducers/types'
const RemoveTodos = () => {

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
            <Text style={{...gloStyles.text, color: 'black'}}> -{item.value}</Text></TouchableOpacity>
            )}
    </View>
  )
}

//nnfe
export default RemoveTodos