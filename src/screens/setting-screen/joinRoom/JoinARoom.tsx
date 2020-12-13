import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import { gloStyles } from '../../../../App'
import ModalJoin from './ModalJoin'

function JoinARoom() {
  const [isModalVisable, setIsModalVisable] = useState(false)

  const toggleModal = () => {
    // setIsModalVisable(prev => !prev)
    setIsModalVisable(true)
  }



  return (
    <View>
      {isModalVisable ?
        <View>
          <ModalJoin setIsModalVisable={setIsModalVisable} />

          <TouchableOpacity style={gloStyles.longButton} onPress={toggleModal}>
            <Text style={gloStyles.blackText}>Join Room</Text>
          </TouchableOpacity>
        </View>
        :
        <TouchableOpacity style={gloStyles.longButton} onPress={toggleModal}>
          <Text style={gloStyles.blackText}>Join Room</Text>
        </TouchableOpacity>
      }
    </View>
  )
}
const styles = StyleSheet.create({

})



export default JoinARoom
