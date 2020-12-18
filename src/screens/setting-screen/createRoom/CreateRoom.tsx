import React, { useRef, useState } from 'react'
import { View, TouchableOpacity, TextInput, Text, StyleSheet, Modal } from 'react-native'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../../App'
import { ADD_ROOM } from '../../../reducers/types'
import { Feather } from '@expo/vector-icons';

function CreateRoom({ setCreateModal }) {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [invite, setInvite] = useState('')

  const addTodo = (payload) =>
    dispatch({ type: ADD_ROOM, payload: name }) 


  return (
    <Modal
      transparent={true}
      visible={true}
    >
      <View style={gloStyles.modalBg}>
        <View style={styles.absoluteModal}>
          <View style={styles.modalArea}>
            <TouchableOpacity
              style={gloStyles.x}
              onPress={() => setCreateModal(false)}
            >
              <Feather
                name="x-circle"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <Text style={styles.header}>Create New Room</Text>

            <View>
              <Text>Name</Text>
              <TextInput style={gloStyles.inputStyle} value={name} onChangeText={(text) => setName(text)} />
            </View>

            <View>
              <Text>Invite</Text>
              <TextInput style={gloStyles.inputStyle} value={invite} onChangeText={(text) => setInvite(text)} />
            </View>

            <TouchableOpacity style={gloStyles.button} onPress={addTodo}>
              <Text style={gloStyles.whiteText}>Create Room</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  absoluteModal: {
    position: 'absolute',
    bottom: '30%',
    right: '15%',
  },
  header: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold'
  },
  modalArea: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 300,
    width: 300,
    backgroundColor: '#c43d3d'
  },
})
export default CreateRoom
