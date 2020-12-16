import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native'
import { gloStyles } from '../../../../../App'
import { Feather } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { ADD_TODO } from '../../../../reducers/types';


function AddATodo({ setTodoModal }) {
 const [input, setInput] = useState('')
 
 const dispatch = useDispatch()

const addTodo = () => {
  dispatch({ type: ADD_TODO, payload: input })

}



  return (
    <Modal
      transparent={true}
      visible={true}
    >
      <View style={gloStyles.modalBg}>
        <View style={styles.absoluteModal}>
          <View style={styles.modalArea}>
            <TouchableOpacity style={gloStyles.x} onPress={() => setTodoModal(false)}>
              <Feather name="x-circle" size={24} color="black" />
            </TouchableOpacity>

            <Text style={gloStyles.blackText}>Add A Todo:</Text>
            <TextInput style={{ ...gloStyles.inputStyle, margin: 10 }} value={input} placeholder='My Todos...' onChangeText={(text) => setInput(text)} />

            <View style={{ flexDirection: 'row' }}>

              <TouchableOpacity style={{ backgroundColor: 'black', height: 20, width: 50, margin: 1 }} onPress={() => setTodoModal(false)}>
                <Text style={gloStyles.whiteText}>Theme</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: 'black', height: 20, width: 50, margin: 1 }} onPress={() => setTodoModal(false)}>
                <Text style={gloStyles.whiteText}>Theme</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: 'black', height: 20, width: 50, margin: 1 }} onPress={() => setTodoModal(false)}>
                <Text style={gloStyles.whiteText}>Theme</Text>
              </TouchableOpacity>
            </View>


            <TouchableOpacity style={gloStyles.button}>
              <Text style={gloStyles.whiteText}>Add Tag</Text>
            </TouchableOpacity>
            <TextInput style={gloStyles.inputStyle} />

            <TouchableOpacity style={gloStyles.button} onPress={addTodo}>
              <Text style={gloStyles.whiteText}>Create Todo</Text>
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
    bottom: '30%',
    right: '20%',
  },
  modalArea: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 300,
    width: 250,
    backgroundColor: '#c43d3d',
  },
})

export default AddATodo
