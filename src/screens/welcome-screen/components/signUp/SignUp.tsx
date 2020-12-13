import { useNavigation } from '@react-navigation/native'
import React, { Component, useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Modal, TextInput } from 'react-native'
import { sub } from 'react-native-reanimated'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../../../App'
import signUpAction from '../../../../actions/signUpAction'
// import InfoProvided from './InfoProvided'
// import signUpAction from '../../../actions/signUpAction'

function SignUp({ setModal }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const navigation = useNavigation()

  const modalState = () => {
    setModal(prev => !prev)
  }

  const submitInfo = () => {
    dispatch(signUpAction({ username, password, email }))
  }

  {/* // <InfoProvided modalState={modalState}/> */ }
  return (

    <View style={styles.container}>

      <Modal
        transparent={true}
        visible={true}
      >
          <TouchableOpacity style={gloStyles.button} onPress={() => setModal(prev => !prev)}>
            <Text>Go Back</Text>
          </TouchableOpacity>

          <View style={styles.topText}>
            <Text style={{ ...gloStyles.blackText, color: 'black' }}>
              Enter the following to make a new account.
                    </Text>

            <View style={{ marginTop: 30 }}>
              <Text style={gloStyles.blackText}>Username:</Text>
              <TextInput style={{ ...gloStyles.inputStyle, marginBottom: 10 }} value={username} onChangeText={(text) => setUsername(text)} />
            </View>

            <View>
              <Text style={gloStyles.blackText}>Password:</Text>
              <TextInput style={gloStyles.inputStyle} value={password} onChangeText={(text) => setPassword(text)} />
            </View>

            <View  >
              <Text style={gloStyles.blackText}>Email:</Text>
              <TextInput style={gloStyles.inputStyle} value={email} onChangeText={(text) => setEmail(text)} />
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={submitInfo}>
                <Text style={gloStyles.blackText}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </View>
      </Modal>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: '50%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  button: {
    backgroundColor: '#ff6702',
    marginTop: 50,
    borderRadius: 10,
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topText: {
    width: 300,
    height: 600,
    margin: 60,
    backgroundColor: '#ffe607',
    padding: 50,
    borderRadius: 10
  },

})

export default SignUp
