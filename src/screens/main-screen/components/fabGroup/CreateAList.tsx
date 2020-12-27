import React, { useState } from 'react'
import { StyleSheet, View, Modal, Text, TouchableOpacity } from 'react-native'
import { gloStyles } from '../../../../../App'
import { ADD_LIST } from '../../../../reducers/types'
import { useDispatch } from 'react-redux'
import { PureButton, PureButtonT } from '../../../../reusables/dynamicStuff'
import { LinearGradient } from 'expo-linear-gradient'
import { TextInput } from 'react-native-gesture-handler'

function CreateAList({ setCreateListModal }) {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  // const NewList

  const addList = () =>
    dispatch({ type: ADD_LIST, payload: value })
  // dispatch(addListAction({ username, password }))

  const pureButtonData: PureButtonT = {
    onPress: addList,
    textStyle: gloStyles.blackText,
    buttonStyle: null,
    text: 'Create List',
  }

  return (
    <Modal
      transparent={true}
      visible={true}
      animationType="fade"
      onRequestClose={() => setCreateListModal(false)}>

      <TouchableOpacity
        onPress={() => { setCreateListModal(false) }}
        style={{ ...styles.overlayStyles, ...gloStyles.modalBg }}
      ></TouchableOpacity>

      <View style={styles.container}>
        <Text style={gloStyles.whiteText}>Create A List:</Text>
        <TextInput style={styles.inputStyle} />
        <LinearGradient
          style={{ borderRadius: 5, width: 100, height: 30, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}
          colors={['#e4e708',
            '#dfad08',]}
          start={[0, 0]}
        >
          <PureButton pureButtonData={pureButtonData} />
        </LinearGradient>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272727',
    width: 200,
    height: 150,
    top: 200,
    alignSelf: 'center',
    borderRadius: 5,
  },
  absoluteModal: {
    position: 'absolute',
    bottom: '50%',
    right: '20%',
  },
  overlayStyles: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  inputStyle: {
    width: 150,
    borderBottomWidth: 1,
    borderBottomColor: '#acacac',
    borderRadius: 4
  },
  modalArea: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 150,
    width: 250,
    backgroundColor: '#272727',
  },
})

export default CreateAList
