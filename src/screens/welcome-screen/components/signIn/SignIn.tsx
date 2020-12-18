import React, { useState } from 'react'
import { TextInput, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import { useDispatch } from 'react-redux'
import { signInStyles } from '../..'
import { gloStyles } from '../../../../../App'
import signInAction from '../../../../actions/signInAction'
import signUpAction from '../../../../actions/signUpAction'
import { DynamicButtons, DynamicInput } from './dynamic/dynamicStuff'

function SignIn() {
  const [createAccount, setCreateAccount] = useState(false)
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const collectedData = [
    {
      name: 'Username',
      value: username,
      onChangeText: (text) => setUsername(text)
    },
    {
      name: 'Password',
      value: password,
      onChangeText: (text) => setPassword(text)
    },
    {
      name: 'Email',
      value: email,
      onChangeText: (text) => setEmail(text)
    },
  ]

  const submitInfo = () => {
    createAccount ?
      dispatch(signUpAction({ username, password }))
      : dispatch(signInAction({ username, password }))
  }

  const buttonData = [
    {
      style: signInStyles.buttonContainer,
      innerStyle: signInStyles.button,
      textStyle: gloStyles.blackText,
      createAcc: createAccount ? 'Sign Up' : 'Sign In',
      button: submitInfo
    },
    {
      style: signInStyles.blueButtonContainer,
      innerStyle: signInStyles.blueButton,
      textStyle: gloStyles.blackText,
      createAcc: createAccount ? 'Or Sign In' : 'Or Create Account',
      button: () => setCreateAccount(prev => !prev)
    }
  ]



  return (
    <View style={{ ...signInStyles.container, ...signInStyles.bgColor }}>
      <ImageBackground
        style={signInStyles.imgBg}
        source={require('../../../../../assets/books.jpg')}
      />

      <View style={{ width: '60%' }}>
        <Text style={signInStyles.Logo}>GroupList</Text>

        <DynamicInput collectedData={collectedData[0]} />
        <DynamicInput collectedData={collectedData[1]} />
        {createAccount ?
          <DynamicInput collectedData={collectedData[2]} />
          : null}

        <DynamicButtons buttonData={buttonData[0]} />
        <DynamicButtons buttonData={buttonData[1]} />
      </View>
    </View>
  )
}

export default SignIn
