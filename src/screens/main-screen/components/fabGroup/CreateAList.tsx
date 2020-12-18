import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native'
import { gloStyles } from '../../../../../App'
import { Feather } from '@expo/vector-icons';
import { ADD_LIST } from '../../../../reducers/types';
import { useDispatch, useSelector } from 'react-redux';
import { rootStoreT } from '../../../../../store';


function CreateAList({ setCreateListModal }) {
  const lists = useSelector((state: rootStoreT) => state.lists)
  const [isDropped, setIsDropped] = useState<any>([])
  const [value, setValue] = useState('')
  const dispatch = useDispatch()



  const addList = (payload) => {
    dispatch({ type: ADD_LIST, payload: value })

  }


  return (
    <Modal
      transparent={true}
      visible={true}
    >
      <View style={gloStyles.modalBg}>
        <View style={styles.absoluteModal}>
          <View style={styles.modalArea}>
            <TouchableOpacity style={gloStyles.x} onPress={() => setCreateListModal(false)}>
              <Feather name="x-circle" size={24} color="black" />
            </TouchableOpacity>
            <Text>Create A New List:</Text>

            <TextInput style={gloStyles.inputStyle} value={value} onChangeText={(text) => setValue(text)} />

            <TouchableOpacity style={gloStyles.button} onPress={addList} >
              <Text style={gloStyles.whiteText}>Create List</Text>
            </TouchableOpacity>
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

