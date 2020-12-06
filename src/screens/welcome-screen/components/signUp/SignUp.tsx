import { useNavigation } from '@react-navigation/native'
import React, { Component, useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Modal, TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../../../App'
import signUpAction from '../../../../actions/signUpAction'
// import InfoProvided from './InfoProvided'
// import signUpAction from '../../../actions/signUpAction'

function SignUp() {
  const [modal, setModal] = useState(false)
  const [username, setUsername] = useState<any>()
  const [password, setPassword] = useState<any>()
  const dispatch = useDispatch()

  const navigation = useNavigation()
  const signUp = () => {
    const inputStuff = {
      username: 'userse',
      password: '23456',
      email: '2345y'
    }
    dispatch(signUpAction(inputStuff))
  }

  const modalState = () => {
    setModal(prev => !prev)
  }

  const submitInfo = () => {
    
  }
  

  return (
    <View style={styles.container}>
      {modal ?
        <Modal style={{ width: 100, height: 100 }}>
          <View style={{ backgroundColor: '#f1f1f1', width: '100%', height: '100%' }}>
            <TouchableOpacity style={gloStyles.button} onPress={modalState}>
              <Text>GoBack</Text>
            </TouchableOpacity>

            <View style={{ width: 300, margin: 60, backgroundColor: '#4f76ca', padding: 50, borderRadius: 10 }}>
              <Text style={{ ...gloStyles.text, color: 'white' }}>
                Enter the following to make a new account.
                  </Text>

              <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <Text style={{ ...gloStyles.text, color: 'white' }}>
                  Username:
                    </Text>
                <TextInput style={{ ...gloStyles.inputStyle, marginBottom: 10 }} value={username} onChangeText={(text) => setUsername(text)} />
              </View>

              <View style={{ flexDirection: 'row' }} >
                <Text style={{ ...gloStyles.text, color: 'white' }}>
                  Password:
                    </Text>
                <TextInput style={gloStyles.inputStyle} value={password} onChange={(text) => setPassword(text)}/>
              </View>

              <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <TouchableOpacity style={{ ...gloStyles.button, alignItems: 'center', justifyContent: 'center' }} onPress={submitInfo}>
                  <Text style={{ ...gloStyles.text, marginLeft: 10 }} >Create Account</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        // <InfoProvided modalState={modalState}/>
        :
        <View>
          <TouchableOpacity style={{ ...gloStyles.button, backgroundColor: 'blue' }} onPress={modalState}>
            <Text style={gloStyles.text}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      }
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
  }
})

export default SignUp
