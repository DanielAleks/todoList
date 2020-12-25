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
    borderRadius: 10,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#dddddd',
    fontFamily: 'Nunito'
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
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgColor: {
    backgroundColor: 'linear - gradient(90deg, rgb(163, 1, 1)  %, rgba(247, 142, 142, 1) 100 %)',
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
    marginBottom: 10,
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Nunito'
  }
})

export default WelcomeScreen
