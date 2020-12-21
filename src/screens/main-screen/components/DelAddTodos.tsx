import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Chip } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../../App'
import { REMOVE_TODO } from '../../../reducers/types'

const DelAddTodos = ({ item }) => {
  const dispatch = useDispatch()

  const deleteTodo = (payload) =>
    dispatch({ type: REMOVE_TODO, payload })
 
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        key={item.id}
        onPress={() => deleteTodo(item.id)}>
        <Chip
          style={styles.chippy}
          icon="information"
        >
          <Text style={gloStyles.whiteText}>
            {item.value}
          </Text>
        </Chip>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 5,
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