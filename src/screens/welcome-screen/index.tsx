import React from 'react'
import { StyleSheet, View } from 'react-native'
import SignIn from './components/signIn/SignIn'


const WelcomeScreen = () => {
  
  return (
    <View>
      <SignIn />
    </View>
  )
}
export const signInStyles = StyleSheet.create({
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

export default WelcomeScreen
