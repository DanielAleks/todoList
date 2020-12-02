import { useNavigation } from '@react-navigation/native'
import React, { Component, useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../../App'
import signUpAction from '../../../actions/signUpAction'

function SignUp() {
  const [modal, setModal] = useState(false)
  const dispatch = useDispatch()
  // onPress={() => navigation.navigate("signup")}
  const navigation = useNavigation()
  const signUp = () => {
    const inputStuff = {
      // username: 'userse',
      // password: '23456',
      // email: '2345y'
    }
    dispatch(signUpAction(inputStuff))
  }

  const modalState = () => {
    setModal(prev => !prev)
    // navigation.goBack()
  }

  return (
    <View style={styles.container}>
      {modal ?
        <Modal style={{width: 100, height: 100}}>
          <View style={{ backgroundColor: '#f1f1f1', width: '100%', height: '100%' }}>

            <TouchableOpacity style={gloStyles.button} onPress={modalState}>
              <Text>GoBack</Text>
            </TouchableOpacity>

            <View style={{width: 300, margin: 60, backgroundColor: '#4f76ca', padding: 50, borderRadius: 10 }}>
              <Text style={{ ...gloStyles.text, color: 'white' }}>
                Enter the following to make a new account.
              </Text>
              <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <Text style={{ ...gloStyles.text, color: 'white' }}>
                  Username:
                </Text>
                <TextInput style={{ ...gloStyles.inputStyle, marginBottom: 10 }} />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ ...gloStyles.text, color: 'white' }}>
                  Password:
                </Text>
                <TextInput style={gloStyles.inputStyle} />
              </View>
            </View>
          </View>
        </Modal>
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
