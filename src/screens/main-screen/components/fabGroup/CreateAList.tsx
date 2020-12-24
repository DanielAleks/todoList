import React, { useState } from 'react'
import { StyleSheet, View, Modal } from 'react-native'
import { gloStyles } from '../../../../../App'
import { ADD_LIST } from '../../../../reducers/types'
import { useDispatch } from 'react-redux'
import { DynamicFeather, DynamicFeatherT, DynamicInput, DynamicInputT, PureButton, PureButtonT } from '../../../../reusables/dynamicStuff'
import signInAction from '../../../../actions/signInAction'

function CreateAList({ setCreateListModal }) {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const addList = () => {
    // dispatch(signInAction({ username, password }))
  } 

  const featherData: DynamicFeatherT = { onPress: () => setCreateListModal(false) }
  const pureButtonData: PureButtonT = {
    onPress: addList,
    textStyle: gloStyles.whiteText,
    buttonStyle: gloStyles.button,
    text: 'Create List',
  }
  const collectedData: DynamicInputT = {
    textStyle: gloStyles.blackText,
    value: value,
    onChangeText: (text) => setValue(text),
    name: 'Create a List:',
  }

  return (
    <Modal transparent={true} visible={true}>
      <View style={gloStyles.modalBg}>
        <View style={styles.absoluteModal}>
          <View style={styles.modalArea}>
            <DynamicFeather featherData={featherData} />
            <DynamicInput collectedData={collectedData} />
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
