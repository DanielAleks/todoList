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
          <ModalJoin setIsModalVisable={setIsModalVisable}/>
          <TouchableOpacity style={{ ...gloStyles.longButton, marginBottom: 10, justifyContent: 'center', alignItems: 'center' }} onPress={toggleModal}>
            <Text style={gloStyles.text}>Join Room</Text>
          </TouchableOpacity>
          {/* non working up here */}
        </View>
        :
        <TouchableOpacity style={{ ...gloStyles.longButton, marginBottom: 10, justifyContent: 'center', alignItems: 'center' }} onPress={toggleModal}>
          <Text style={gloStyles.text}>Join Room</Text>
        </TouchableOpacity>
      }
    </View>
  )
}
const styles = StyleSheet.create({

})



export default JoinARoom
