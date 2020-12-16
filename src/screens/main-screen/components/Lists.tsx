import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { gloStyles } from '../../../../App'
import { rootStoreT } from '../../../../store'
import { ADD_LIST, REMOVE_LIST } from '../../../reducers/types'
import { TextInput, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'

function Lists() {
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
      <Text style={gloStyles.blackText}>Lists:</Text>

      <TextInput style={gloStyles.inputStyle} value={value} onChangeText={(text) => setValue(text)} />

      <TouchableOpacity style={gloStyles.button} onPress={addList}>
        <Text style={gloStyles.whiteText}>Create List</Text>
      </TouchableOpacity>

      {lists.map((item) =>
        <View>
          <View style={{ display: 'flex', backgroundColor: 'pink', flexDirection: 'row', borderWidth: .25 }}>
            <TouchableOpacity style={styles.group} onPress={() => setIsDropped(item.id)}>
              <View>
                <Text style={styles.text} key={item.id}>-{item.value}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 110, backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => setIsDropped('')}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ ...gloStyles.blackText, height: 100, display: isDropped === item.id ? 'flex' : 'none' }}>INFORMATION</Text>
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
    width: 300,
    flexDirection: 'row',
  },
  text: {
    color: '#e9e9e9',
    marginLeft: 30
  }

})

export default Lists
