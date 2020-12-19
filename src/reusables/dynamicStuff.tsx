import React from 'react'
import { Text, View } from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import { signInStyles } from "../screens/welcome-screen"
import { gloStyles } from "../../App"
import { styles } from '../screens/main-screen'

export const DynamicButtons = ({ buttonData }) => {
  return (

    <View style={buttonData.style}>
      <TouchableOpacity
        style={buttonData.innerStyle}
        onPress={buttonData.button}
      >
        <Text style={buttonData.textStyle}>
          {buttonData.createAcc}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export const DynamicInput = ({ collectedData }) => {
  return (
    <View style={signInStyles.flexColumn} >
      <Text style={{ ...gloStyles.blackText, ...signInStyles.textAlign }}>
        {collectedData.name}
      </Text>
      <TextInput
        style={gloStyles.inputStyle}
        value={collectedData.value}
        onChangeText={collectedData.onChangeText}
      />
    </View>
  )
}

