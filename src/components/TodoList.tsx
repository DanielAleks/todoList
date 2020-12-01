import React, { useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { S } from '../../App'

function TodoList() {
  const [input, setInput] = useState<any>('')

  interface todoObjT {
    input: string
    id: number
  }
  const [todos, setTodos] = useState<todoObjT[]>([])






  const onPressHandler = () => {
    setTodos(prev => [...prev, { id: Math.floor(Math.random() * 10000), input: input }])

  }

  return (
    <View style={S.container}>
      {/* <View style={styles.todoBox}>
        <Text>
          
        </Text>

      </View> */}
      
      <TextInput style={styles.input} value={input} onChangeText={(text) => setInput(text)} />
      <TouchableOpacity style={styles.bottomButton} onPress={onPressHandler}>

      </TouchableOpacity>
      <View>

        {todos.map((item) =>
          <TouchableOpacity onPress={() =>
            setTodos(prev => prev.filter(newItem => newItem !== item))
          }><Text>{item.input}</Text></TouchableOpacity>
        )}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    width: 100,
  },
  todoBox: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  bottomButton: {
    backgroundColor: 'orange',
    position: 'absolute'
  }

})

export default TodoList
