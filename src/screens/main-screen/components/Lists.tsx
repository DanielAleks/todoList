import React, { useState } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedbackComponent, View, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { gloStyles } from '../../../../App'
import { rootStoreT } from '../../../../store'
import { ADD_LIST, REMOVE_LIST } from '../../../reducers/types'
import DelAddTodos from './DelAddTodos'
import todosReducer from '../../../reducers/todosReducer'
import AddATodo from './fabGroup/AddATodo'

function Lists({ editMode }) {
  const lists = useSelector((state: rootStoreT) => state.lists)
  const [isDropped, setIsDropped] = useState<any>([])
  const [value, setValue] = useState('')
  const dispatch = useDispatch()



  const removeList = (payload) => {
    dispatch({ type: REMOVE_LIST, payload })
  }

  const addList = (payload) => {
    dispatch({ type: ADD_LIST, payload })

  }


  return (
    <View>
      <TouchableWithoutFeedback style={{ ...styles.group, height: 30, borderWidth: .25 }} 
      // onPress={() => {
      //       isDropped === '' ? setIsDropped(item.id) : setIsDropped('')
      //     }}
          >
            <Text style={styles.text} >-Kitchen Clean</Text>
          </TouchableWithoutFeedback>
          <DelAddTodos  />

      {lists.map((item) =>
        <View key={item.id}>
          <TouchableWithoutFeedback style={{ ...styles.group, height: 30, borderWidth: .25 }} onPress={() => {
            isDropped === '' ? setIsDropped(item.id) : setIsDropped('')
          }}>
            <Text style={styles.text} key={item.id}>-{item.value}</Text>
          </TouchableWithoutFeedback>


          {/* <TouchableOpacity style={{ display: editMode ? 'flex' : 'none', width: 110, backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={removeList}>
              <Text>X</Text>
            </TouchableOpacity> */}
          <View style={{ ...gloStyles.blackText, height: '80%', backgroundColor: '#afafaf', display: isDropped === item.id ? 'flex' : 'none' }}>
            <DelAddTodos  />
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
