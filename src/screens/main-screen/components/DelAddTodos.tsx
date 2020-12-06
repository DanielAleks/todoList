import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Chip } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { gloStyles } from '../../../../App'
import { rootStoreT } from '../../../../store'
import { REMOVE_TODO } from '../../../reducers/types'
const DelAddTodos = () => {
  const todos = useSelector((state: rootStoreT) => state.todos)
  const dispatch = useDispatch()

  const deleteTodo = (payload) => {
    dispatch({ type: REMOVE_TODO, payload })
  }

  return (
    <View style={{position: 'absolute', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: 100}}>
      {todos.map((item) =>
        <TouchableOpacity key={item.id} onPress={() => deleteTodo(item.id)}>
          <Chip icon="information" style={{ backgroundColor: 'red', width: 135, height: 50, margin: 10 }} onPress={() => deleteTodo(item.id)}> -{item.value} </Chip>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default DelAddTodos