import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Item } from 'react-native-paper/lib/typescript/src/components/Drawer/Drawer'
import { useDispatch, useSelector } from 'react-redux'
import { gloStyles } from '../../../../App'
import { rootStoreT } from '../../../../store'
import { REMOVE_ROOM } from '../../../reducers/types'
import { DynamicFeather, PureButton, PureButtonT } from '../../../reusables/dynamicStuff'
import { mainStyles } from '../../main-screen'

const RemoveARoom = ({ item }) => {
  const dispatch = useDispatch()

  const deleteRoom = (payload) => 
    dispatch({ type: REMOVE_ROOM, payload })

  const pureButtonData: PureButtonT = {
    onPress: () => deleteRoom(item.id),
    buttonStyle: mainStyles.group,
    textStyle: styles.text,
    text: item.value,
  }

  return (
    <View style={{ height: '90%' }}>
      <PureButton pureButtonData={pureButtonData} />
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    color: '#e9e9e9',
    marginLeft: 30,
  },
})
export default RemoveARoom
