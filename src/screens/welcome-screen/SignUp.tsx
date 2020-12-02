import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../App'
import signUpAction from '../../actions/signUpAction'

function SignUp() {
  const dispatch = useDispatch()

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
      <View>
        <TouchableOpacity style={{ ...gloStyles.button, backgroundColor: 'red' }} onPress={signUp}>
          <Text style={gloStyles.text}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={{ ...gloStyles.button, backgroundColor: 'red' }} onPress={signUp}>
          <Text style={gloStyles.text}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  }
})

export default SignUp
