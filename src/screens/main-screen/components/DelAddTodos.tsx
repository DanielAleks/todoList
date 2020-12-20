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

      //* Can't be a Dynamic button
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
  //! May not need this
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