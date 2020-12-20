import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Navbar from './navbar/Navbar'
import { StatusBar } from 'expo-status-bar'
import { FAB, Portal, Provider } from 'react-native-paper'
import AddATodo from './components/fabGroup/AddATodo'
import CreateAList from './components/fabGroup/CreateAList'
import DelAddTodos from './components/DelAddTodos'
import Lists from './components/Lists'
import { useDispatch, useSelector } from 'react-redux'
import { rootStoreT } from '../../../store'
import { ADD_LIST } from '../../reducers/types'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { gloStyles } from '../../../App'

const MainScreen = () => {
  const lists = useSelector((state: rootStoreT) => state.lists)
  const todos = useSelector((state: rootStoreT) => state.todos)
  const [editMode, setEditMode] = useState(false)
  const [CreateListModal, setCreateListModal] = useState(false)
  const [todoModal, setTodoModal] = useState(false)
  const [state, setState] = useState({ open: false })
  const dispatch = useDispatch()
  const onStateChange = ({ open }) => setState({ open })
  const { open } = state

  const addList = (payload) => dispatch({ type: ADD_LIST, payload })

  const nowEditing = () => setEditMode((prev) => !prev)


  return (
    <View style={{ flex: 1 }}>
      <Navbar />


      <StatusBar style="auto" />
      {todoModal ? <AddATodo setTodoModal={setTodoModal} /> : null}
      {CreateListModal ? <CreateAList setCreateListModal={setCreateListModal} /> : null}

      {lists.map((item) =>
        <Lists item={item} editMode={editMode} />
      )}

      {todos.map((item) =>
        <DelAddTodos item={item} />
      )}

      <Provider>
        <Portal>
          <FAB.Group
            visible={true}
            open={open}
            icon={open ? 'book-variant' : 'plus'}
            actions={[
              {
                icon: 'account-edit',
                label: editMode ? 'Turn Off Editing Mode' : 'Edit Rooms',
                onPress: nowEditing,
              },
              {
                icon: 'account-search',
                label: 'Create List',
                onPress: () => setCreateListModal((prev) => !prev),
              },
              {
                icon: 'book-plus-multiple',
                label: 'Add Todo',
                onPress: () => setTodoModal((prev) => !prev),
              },
            ]}
            onStateChange={onStateChange}
          />
        </Portal>
      </Provider>
    </View>
  )
}

export default MainScreen

export const mainStyles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 14,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  group: {
    borderColor: 'white',
    backgroundColor: '#222222',
    height: 50,
    justifyContent: 'center',
    width: 300,
    flexDirection: 'row',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    height: 50,
    width: 100,
    backgroundColor: '#5c0f58',
    borderRadius: 40,
  },
  header: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
})
