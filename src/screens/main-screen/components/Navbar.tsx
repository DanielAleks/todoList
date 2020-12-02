import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { gloStyles } from '../../../../App';
import signUpAction from '../../../actions/signUpAction';

function Navbar() {
  const [modalVisable, setModalVisable] = useState(false)

  const dispatch = useDispatch()

  const modalToggle = () => {
    setModalVisable(prev => !prev)
  }

  const signUp = () => {

    const inputStuff = {
      username: 'userse',
      password: '23456',
      email: '2345y'
    }

    dispatch(signUpAction(inputStuff))
  }



  return (
    <View style={styles.container}>

      <TouchableOpacity style={{ ...gloStyles.button, position: 'absolute', right: 0, backgroundColor: 'black' }} onPress={modalToggle}>
        <Text style={gloStyles.text}>...</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ ...gloStyles.button, position: 'absolute', left: 0, backgroundColor: 'red' }} onPress={signUp}>
        <Text style={gloStyles.text}>Sign Up</Text>
      </TouchableOpacity>


      <View style={{ display: modalVisable ? 'flex' : 'none' }}>
        <TouchableOpacity style={gloStyles.button}>
          <Text style={gloStyles.text}>Join Room/Leave</Text>
        </TouchableOpacity>

        <TouchableOpacity style={gloStyles.button}>
          <Text style={gloStyles.text}>Create Room</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6b3b3',
    position: 'absolute',
    top: 0,
    height: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'

  },

});

export default Navbar
