import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { gloStyles } from '../../../../App'
import { rootStoreT } from '../../../../store'
import { ADD_LIST, REMOVE_LIST } from '../../../reducers/types'
import { TextInput, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'

function Lists({editMode}) {
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

const dropList = (item) => {
  editMode ? setIsDropped(item.id) : null
}


  return (
    <View>
      {lists.map((item) =>
        <View>
          <View style={{ display: 'flex', backgroundColor: 'pink', flexDirection: 'row', borderWidth: .25 }}>
            <TouchableOpacity style={styles.group} onPress={dropList}>
              <View>
                <Text style={styles.text} key={item.id}>-{item.value}</Text>
              </View>
            </TouchableOpacity>

          <TouchableOpacity style={gloStyles.button} onPress={() => setIsDropped('')}>
            <Text style={gloStyles.whiteText}>Remove items under</Text>
          </TouchableOpacity>

            <TouchableOpacity style={{ display: editMode ? 'flex' : 'none', width: 110, backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={removeList}>
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
    width: '100%',
    flexDirection: 'row',
  },
  text: {
    color: '#e9e9e9',
    marginLeft: 30
  }

})

export default Lists
