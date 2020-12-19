import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { signInStyles } from '../screens/welcome-screen'
import { gloStyles } from '../../App'
import { mainStyles } from '../screens/main-screen'
import { Feather } from '@expo/vector-icons'

export const PureButton = ({ pureButtonData }) => {
  <TouchableOpacity style={gloStyles.button} onPress={pureButtonData.button}>
    <Text style={pureButtonData.text}>Search</Text>
  </TouchableOpacity>
}

export const DynamicFeather = ({ featherData }) => {
  return (
    <TouchableOpacity style={gloStyles.x} onPress={featherData.button}>
      <Feather name="x-circle" size={24} color="black" />
    </TouchableOpacity>
  )
}

export const DynamicButtons = ({ buttonData }) => {
  return (
    <View style={buttonData.style}>
      <TouchableOpacity style={buttonData.innerStyle} onPress={buttonData.button}>
        <Text style={buttonData.textStyle}>{buttonData.createAcc}</Text>
      </TouchableOpacity>
    </View>
  )
}

export const DynamicInput = ({ collectedData }) => {
  return (
    <View style={collectedData.viewStyle}>
      <Text style={collectedData.textStyle}>{collectedData.name}</Text>
      <TextInput
        style={gloStyles.inputStyle}
        value={collectedData.value}
        onChangeText={collectedData.onChangeText}
      />
    </View>
  )
}
