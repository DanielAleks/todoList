import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { rootStoreT } from '../../../../store'
import { REMOVE_ROOM } from '../../../reducers/types'
const RemoveARoom = () => {

  const todos = useSelector((state: rootStoreT) => state.rooms)
  const dispatch = useDispatch()

  const deleteTodo = (payload) => {
    dispatch({ type: REMOVE_ROOM, payload })
  }


  return (
    <View>
      <View style={{ height: '90%' }}>

        {todos.map((item) =>
          <TouchableOpacity
            style={styles.group}
            key={item.id}
            onPress={() => deleteTodo(item.id)}
          >
            <Text style={styles.text}>
              -{item.value} Group
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  group: {
    borderWidth: .25,
    borderColor: 'white',
    backgroundColor: '#222222',
    height: 50,
    justifyContent: 'center'
  },
  text: {
    color: '#e9e9e9',
    marginLeft: 30
  }
})
export default RemoveARoom