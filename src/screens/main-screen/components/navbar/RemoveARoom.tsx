import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { gloStyles } from '../../../../../App'
import { rootStoreT } from '../../../../../store'
import { REMOVE_ROOM, REMOVE_TODO } from '../../../../reducers/types'
const RemoveARoom = () => {

  const todos = useSelector((state: rootStoreT) => state.rooms)
  const dispatch = useDispatch()

  const deleteTodo = (payload) => {
    dispatch({ type: REMOVE_ROOM, payload })
  }


  return (
    <View>
      <View style={{height: '90%'}}>

        {todos.map((item) =>
          <TouchableOpacity key={item.id} onPress={() => deleteTodo(item.id)}
          >
            <Text style={{ ...gloStyles.text, color: 'black' }}> -{item.value}</Text></TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default RemoveARoom