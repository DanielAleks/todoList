import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Chip } from 'react-native-paper'
import { Item } from 'react-native-paper/lib/typescript/src/components/List/List'
import { useDispatch, useSelector } from 'react-redux'
import { gloStyles } from '../../../../App'
import { rootStoreT } from '../../../../store'
import { REMOVE_TODO } from '../../../reducers/types'
const DelAddTodos = () => {
  const todos = useSelector((state: rootStoreT) => state.todos)
  const dispatch = useDispatch()

  const deleteTodo = (payload) => {
    // if (Item.value === "")
    dispatch({ type: REMOVE_TODO, payload })
  }
  //as a man thinketh
  return (
    <View style={styles.container}>
      {todos.map((item) =>
        <TouchableOpacity key={item.id} onPress={() => deleteTodo(item.id)}>
          <Chip icon="information" style={styles.chippy}><Text style={gloStyles.whiteText}>{item.value}</Text></Chip>
        </TouchableOpacity>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 100,
    justifyContent: 'center'
  },
  chippy: {
    backgroundColor: '#02dabd',
    height: 40,
    margin: 10,
    flexWrap: 'wrap',
    display: 'flex'
  }
})

export default DelAddTodos