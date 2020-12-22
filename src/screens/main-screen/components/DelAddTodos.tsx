import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Chip } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../../App'
import { REMOVE_LIST, REMOVE_TODO } from '../../../reducers/types'

const DelAddTodos = ({ item, setListOfTodos }) => {

  const deleteTodo = (item) => {
    setListOfTodos(prev => prev.filter(itemTodoDel =>
      itemTodoDel === item ? null : itemTodoDel
    ))
  }

  
  return (
    <TouchableOpacity
      onPress={() => deleteTodo(item)}>
      <Chip
        style={styles.chippy}
        icon="information"
      >
        <Text style={gloStyles.whiteText}>
          {item.value}
        </Text>
      </Chip>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  chippy: {
    backgroundColor: '#02dabd',
    height: 40,
    margin: 10,
    flexWrap: 'wrap',
    display: 'flex'
  }
})

export default DelAddTodos