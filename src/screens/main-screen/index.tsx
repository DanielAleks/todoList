import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Navbar from './navbar/Navbar'
import { StatusBar } from 'expo-status-bar'
import { FAB, Portal, Provider } from 'react-native-paper'
import AddATodo from './components/fabGroup/AddATodo'
import CreateAList from './components/fabGroup/CreateAList'
import Lists from './components/Lists'
import { useSelector } from 'react-redux'
import { rootStoreT } from '../../../store'
import { LinearGradient } from 'expo-linear-gradient'

const MainScreen = () => {
  const lists = useSelector((state: rootStoreT) => state.lists)
  const [editMode, setEditMode] = useState(false)
  const [CreateListModal, setCreateListModal] = useState(false)
  const [todoModal, setTodoModal] = useState(false)
  const [state, setState] = useState({ open: false })
  const onStateChange = ({ open }) => setState({ open })
  const { open } = state
  const [listOpenById, setListOpenById] = useState<number>(null)

  const nowEditing = () =>
    setEditMode((prev) => !prev)

  return (
    <View style={mainStyles.container}>
      <Navbar />
      <StatusBar backgroundColor="black" style="light" />
      {todoModal ? <AddATodo setTodoModal={setTodoModal} /> : null}
      {CreateListModal ? <CreateAList setCreateListModal={setCreateListModal} /> : null}

      {lists.map((listItem) =>
        <Lists
          listItem={listItem}
          listOpenById={listOpenById}
          setListOpenById={setListOpenById}
          editMode={editMode}
          key={listItem.id}
        />
      )}

      <Provider>
        <Portal>
          <FAB.Group

            fabStyle={{ backgroundColor: '#a30101' }}
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
    flex: 1,
    backgroundColor: '#4d4c4c'
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
