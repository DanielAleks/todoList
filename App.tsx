import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Navigation from './src/Navigation';



export default function App() {
  return (
    <Navigation />
  );
}

export const gloStyles = StyleSheet.create({
  blackText: {
    color: 'black',
    fontSize: 14,
  },
  whiteText: {
    color: 'white',
    fontSize: 14,
  },
  modalBg: {
    backgroundColor: 'rgba(0,0,0, .5)',
    height: '100%'
  },
  x: {
    position: 'absolute',
    margin: 10,
    top: 0,
    right: 0
  },
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    height: 50,
    width: 100,
    backgroundColor: '#f6ffc3',
    borderRadius: 40,
    alignItems: 'center',
  },
  inputStyle: {
    width: 170,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderRadius: 4
  },
  longButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#ff6702',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#978d8d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
