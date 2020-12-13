import React, { Component, useState } from 'react'
import { TextInput, Text, View, TouchableOpacity, StyleSheet, Image, ImageBackground, Modal } from 'react-native'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../../App'
import SignUp from './signUp/SignUp'
import signInAction from '../../../actions/signInAction'


function SignIn() {
  const [modal, setModal] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()


  const submitInfo = () => {
    dispatch(signInAction({ username, password }))
  }
  

  return (
    <View style={{ ...styles.container, backgroundColor: '#ff6702', height: '100%' }}>

      <ImageBackground style={{ opacity: .05, position: 'absolute', width: '100%', height: '100%' }} source={require('../../../../assets/books.jpg')} />
      {modal ?
        <View style={{ width: '60%' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#ffe607' }}>
            GroupList
                  </Text>

          <View style={{ flexDirection: 'column', marginTop: 30 }}>
            <Text style={{ ...gloStyles.text, color: 'black', marginBottom: 10 }}>
              Username
                    </Text> 
            <TextInput style={{ borderBottomColor: '#5a5151', borderBottomWidth: 1 }} value={username} onChangeText={(text) => setUsername(text)}/>
          </View>

          <View style={{ flexDirection: 'column' }} >
            <Text style={{ ...gloStyles.text, color: 'black', marginTop: 10, marginBottom: 10 }}>
              Password
                    </Text>
            <TextInput style={{ borderBottomColor: '#5a5151', borderBottomWidth: 1 }} value={password} onChangeText={(text) => setPassword(text)} />
          </View>

          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <TouchableOpacity style={{ backgroundColor: '#ffe607', marginTop: 50, borderRadius: 10, height: 50, width: 150, alignItems: 'center', justifyContent: 'center' }} onPress={submitInfo}>
              <Text style={{ ...gloStyles.text, }}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 0 }}>
            <TouchableOpacity style={{ marginTop: 10, alignItems: 'center', justifyContent: 'center' }} onPress={() => setModal(prev => !prev)}>
              <Text style={{ ...gloStyles.text, color: '#0077ff', }}>Or Create Account</Text>
            </TouchableOpacity>

          </View>


          {/* <View>
          <TouchableOpacity>
          <Text style={{ color: 'red' }}>Create Account</Text>
          </TouchableOpacity>
        </View> */}
        </View>
        :
        <SignUp setModal={setModal} />

      }

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
  }
})


export default SignIn
