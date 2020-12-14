import React, { Component, useState } from 'react'
import { TextInput, Text, View, TouchableOpacity, StyleSheet, Image, ImageBackground, Modal } from 'react-native'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../../App'
import signInAction from '../../../actions/signInAction'
import signUpAction from '../../../actions/signUpAction'



function SignIn() {
  const [createAccount, setCreateAccount] = useState(false)
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')


  const submitInfo = () => {
    {createAccount ? dispatch(signUpAction({ username, password })) : dispatch(signInAction({ username, password }))}
  }


  return (
    <View style={{ ...styles.container, ...styles.bgColor }}>

      <ImageBackground style={styles.imgBg} source={require('../../../../assets/books.jpg')} />
      <View style={{ width: '60%' }}>
        <Text style={styles.Logo}>
          GroupList
                  </Text>

        <View style={styles.flexColumn}>
          <Text style={{ ...gloStyles.blackText, marginBottom: 10 }}>
            Username
                    </Text>
          <TextInput style={gloStyles.inputStyle} value={username} onChangeText={(text) => setUsername(text)} />
        </View>

        <View style={styles.flexColumn} >
          <Text style={{ ...gloStyles.blackText, ...styles.textAlign }}>
            Password
                    </Text>
          <TextInput style={gloStyles.inputStyle} value={password} onChangeText={(text) => setPassword(text)} />
        </View>

        {createAccount ?
          <View style={styles.flexColumn} >
            <Text style={{ ...gloStyles.blackText, ...styles.textAlign }}>
              Email
                    </Text>
            <TextInput style={gloStyles.inputStyle} value={email} onChangeText={(text) => setEmail(text)} />
          </View>
          : null}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={submitInfo}>
            <Text style={{ ...gloStyles.blackText, }}>{createAccount ? 'Sign Up' : 'Sign In'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.blueButtonContainer}>
          <TouchableOpacity style={styles.blueButton} onPress={() => setCreateAccount(prev => !prev)}>
            <Text style={{ ...gloStyles.blackText, color: '#0077ff', }}>{!createAccount ? 'Or Create Account' : 'Or Sign In'}</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  button: {
    backgroundColor: '#ffe607',
    marginTop: 50,
    borderRadius: 10,
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  blueButton: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  blueButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  bgColor: {
    backgroundColor: '#ff6702',
    height: '100%'
  },
  Logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffe607',
    marginBottom: 30
  },
  imgBg: {
    opacity: .05,
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  textAlign: {
    marginTop: 10,
    marginBottom: 10
  }
})


export default SignIn
