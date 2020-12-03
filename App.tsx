import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/screens/main-screen/components/navbar/Navbar';
import TodoList from './src/screens/main-screen/components/TodoList';
import Navigation from './src/Navigation';

export default function App() {
  return (
    <Navigation />
  );
}

export const gloStyles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 14,
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
    width: 100,
    backgroundColor: 'white',
    borderRadius: 4
  },
  longButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#70b8fc'
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
