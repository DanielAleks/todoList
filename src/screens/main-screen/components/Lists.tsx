import React, { useState } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedbackComponent, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { gloStyles } from '../../../../App'
import { rootStoreT } from '../../../../store'
import { ADD_LIST, ADD_TODO, REMOVE_LIST, REMOVE_TODO } from '../../../reducers/types'
import DelAddTodos from './DelAddTodos'
import todosReducer from '../../../reducers/todosReducer'
import AddATodo from './fabGroup/AddATodo'
import { TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'

function Lists({ editMode }) {
  const lists = useSelector((state: rootStoreT) => state.lists)
  const [isDropped, setIsDropped] = useState<any>([])
  const [addTodo, setAddTodo] = useState([])
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const removeList = (payload) =>
    dispatch({ type: REMOVE_LIST, payload })
  const addList = (payload) =>
    dispatch({ type: ADD_LIST, payload })

  const createTodo = (payload) =>
    dispatch({ type: ADD_TODO, payload })
  const deleteTodo = (payload) =>
    dispatch({ type: REMOVE_TODO, payload })


  return ( 
    <View>
      {lists.map((item) =>
        <View key={item.id}>
          <TouchableWithoutFeedback style={{ ...styles.group, height: 30, borderWidth: .25 }} onPress={() => {
            isDropped === '' ? setIsDropped(item.id) : setIsDropped('')
          }}>
            <Text style={styles.text} key={item.id}>-{item.value}</Text>
          </TouchableWithoutFeedback>

          <TextInput style={gloStyles.button} value={value} onChangeText={(text) => setValue(text)} />
          <TouchableOpacity style={gloStyles.button} onPress={createTodo}>
            <Text>Add Todo</Text>
          </TouchableOpacity>
          {addTodo.map((itemTodo) =>
            <TouchableOpacity onPress={deleteTodo}>
              <Text>{itemTodo}</Text>
            </TouchableOpacity>
          )}
//TODO: Organize everything then come back when your mind is fresh
          {/* <TouchableOpacity style={{ display: editMode ? 'flex' : 'none', width: 110, backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={removeList}>
              <Text>X</Text>
            </TouchableOpacity> */}
          <View style={{ ...gloStyles.blackText, height: '80%', backgroundColor: '#afafaf', display: isDropped === item.id ? 'flex' : 'none' }}>
            <DelAddTodos />
          </View>
        </View>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  group: {
    borderColor: 'white',
    backgroundColor: '#222222',
    height: 50,
    justifyContent: 'center',
    width: '100%',
    // flexDirection: 'row',
  },
  text: {
    color: '#e9e9e9',
    marginLeft: 30
  }

})

export default Lists
