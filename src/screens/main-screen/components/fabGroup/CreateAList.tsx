import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native'
import { gloStyles } from '../../../../../App'
import { Feather } from '@expo/vector-icons'
import { ADD_LIST } from '../../../../reducers/types'
import { useDispatch, useSelector } from 'react-redux'
import { rootStoreT } from '../../../../../store'
import { DynamicFeather, PureButton } from '../../../../reusables/dynamicStuff'

function CreateAList({ setCreateListModal }) {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const addList = () => dispatch({ type: ADD_LIST, payload: value })

  const featherData = { button: () => setCreateListModal(false) }

  const pureButtonData = {
    button: addList,
    textStyle: gloStyles.whiteText,
    buttonStyle: gloStyles.button,
    text: 'Create List',
  }

  return (
    <Modal transparent={true} visible={true}>
      <View style={gloStyles.modalBg}>
        <View style={styles.absoluteModal}>
          <View style={styles.modalArea}>
            <DynamicFeather featherData={featherData} />

            <Text>Create A List:</Text>

            <TextInput
              style={gloStyles.inputStyle}
              value={value}
              onChangeText={(text) => setValue(text)}
            />
            <PureButton pureButtonData={pureButtonData} />
          </View>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  absoluteModal: {
    position: 'absolute',
    bottom: '50%',
    right: '20%',
  },
  modalArea: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 150,
    width: 250,
    backgroundColor: '#c43d3d',
  },
})

export default CreateAList
