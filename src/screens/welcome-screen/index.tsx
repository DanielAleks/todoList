import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { gloStyles } from '../../../App'
import SignUp from './SignUp'

const WelcomeScreen = () => {
  const navigation = useNavigation()
  
  return (
    <View>

      <TouchableOpacity style={gloStyles.button} onPress={() => navigation.navigate("main")}>
        <Text></Text>
      </TouchableOpacity>
      <SignUp />
    </View>
  )
}

export default WelcomeScreen
