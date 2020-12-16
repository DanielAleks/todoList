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
    height: 30,
    width: 100,
    backgroundColor: '#383838',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  inputStyle: {
    width: 170,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderRadius: 4
  },
  editingMode: {
    height: 40,
    width: 200,
    backgroundColor: '#cccccc',
    borderRadius: 5,
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
