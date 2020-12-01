import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {todoObjT} from './TodoList'

interface ite {
  todos: todoObjT[]
  setTodos
}

const ListOfTodos = ({todos, setTodos}: ite) => {
  
  return (
    <View>
        {todos.map((item) =>
            <TouchableOpacity key={item.id} onPress={() =>
              setTodos(prev => prev.filter(newItem => newItem !== item))
            }><Text style={{ backgroundColor: 'gray' }}>{item.input}</Text></TouchableOpacity>
            )}
    </View>
  )
}

//nnfe
export default ListOfTodos