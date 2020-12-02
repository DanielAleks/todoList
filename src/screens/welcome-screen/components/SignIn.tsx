import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { gloStyles } from '../../../../App'

function SignIn() {

  return (
    <View style={styles.container}>
          <TouchableOpacity style={{ ...gloStyles.button, backgroundColor: 'red' }}>
            <Text style={gloStyles.text}>Sign In</Text>
          </TouchableOpacity>
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
