import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { gloStyles } from '../../../../../../App'
import { rootStoreT } from '../../../../../../store'
import { REMOVE_ROOM, REMOVE_TODO } from '../../../../../reducers/types'
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
          <TouchableOpacity style={styles.group} key={item.id} onPress={() => deleteTodo(item.id)}
          >
            <Text style={{ ...gloStyles.text, color: 'black' }}> -{item.value} Group</Text>
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  group: {
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
    backgroundColor: '#a7a7a7'
  },
})
  export default RemoveARoom