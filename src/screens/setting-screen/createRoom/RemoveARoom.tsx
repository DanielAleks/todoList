import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Item } from 'react-native-paper/lib/typescript/src/components/Drawer/Drawer'
import { useDispatch, useSelector } from 'react-redux'
import { gloStyles } from '../../../../App'
import { rootStoreT } from '../../../../store'
import { REMOVE_ROOM } from '../../../reducers/types'
import { DynamicFeather, PureButton } from '../../../reusables/dynamicStuff'
const RemoveARoom = ({ item }) => {
  const dispatch = useDispatch()

  const deleteRoom = (payload) => {
    dispatch({ type: REMOVE_ROOM, payload })
  }

  const pureButtonData = {
    key: item.id,
    button: () => deleteRoom(item.id),
    buttonStyle: styles.group,
    textStyle: styles.text,
    text: item.value,
  }

  return (
    <View>
      <View style={{ height: '90%' }}>
        <PureButton pureButtonData={pureButtonData} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  group: {
    borderWidth: 0.25,
    borderColor: 'white',
    backgroundColor: '#222222',
    height: 50,
    justifyContent: 'center',
  },
  text: {
    color: '#e9e9e9',
    marginLeft: 30,
  },
})
export default RemoveARoom
