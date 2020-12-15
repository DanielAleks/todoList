import React, { useRef, useState } from 'react'
import { View, TouchableOpacity, TextInput, Text, StyleSheet, Modal } from 'react-native'
import { useDispatch } from 'react-redux'
import { gloStyles } from '../../../../App'
import { ADD_ROOM } from '../../../reducers/types'
import RemoveARoom from './RemoveARoom'
import { Feather } from '@expo/vector-icons';
import { disableExpoCliLogging } from 'expo/build/logs/Logs'
// import DropDownPicker from 'react-native-dropdown-picker';
import CardFlip from 'react-native-card-flip';
import FlipCard from 'react-native-flip-card'

function CreateRoom({ setCreateModal }) {
  const [input, setInput] = useState<any>('')
  // const [isFocused, setIsFocused] = useState(false)
  const dispatch = useDispatch()
  const textInputRef = useRef(null)
  const [theModal, setTheModal] = useState(false)
  const [name, setName] = useState('')
  const [theme, setTheme] = useState([])
  const [invite, setInvite] = useState('')
  const [isColor, setIsColor] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false);

  const themes = [
    { label: 'Default', value: '#ff6702' },
    { label: 'Aqua Menthe', value: '#7fffd4' },
    { label: 'Proton Purple', value: '#8a2be2' },
    { label: 'Office Green', value: '#008000' },
    { label: 'Just Blue', value: '#0000ff' },
    { label: 'Blush Pink', value: '#ffc0cb' },
    { label: 'Chartreuse Yellow', value: '#dfff00' },
    { label: 'Cosmic Latte', value: '#fff9e3' },
  ]

  const addTodo = () => {
    if (input.length > 0) {
      dispatch({ type: ADD_ROOM, payload: input })
    } else return
    setInput('')
  }

  return (

    
<FlipCard style={{backgroundColor: 'red', height: 100, width: 100, position: 'absolute', top: 300, left: 200}}
  friction={6}
  perspective={1000}
  flipHorizontal={true}
  flipVertical={false}
  flip={false}
  clickable={true}
  onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}>
  {/* Face Side */}
  <View style={styles.face}>
    <Text>The Face</Text>
  </View>
  {/* Back Side */}
  <View style={styles.back}>
    <Text>The Back</Text>
  </View>
</FlipCard>
    // <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
    //   <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><Text>AB</Text></TouchableOpacity>
    //   <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><Text>CD</Text></TouchableOpacity>
    // </CardFlip>


    // <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
    //   <Modal
    //     transparent={true}
    //     visible={true}
    //   >
    //     <View style={gloStyles.modalBg}>
    //       <View style={styles.absoluteModal}>
    //         <View style={styles.modalArea}>
    //           <TouchableOpacity style={gloStyles.x} onPress={() => setCreateModal(false)}>
    //             <Feather name="x-circle" size={24} color="black" />
    //           </TouchableOpacity>

    //           <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><Text>AB</Text></TouchableOpacity>
    //           <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><Text>CD</Text></TouchableOpacity>
    //           <View>
    //             <Text>Name</Text>
    //             <TextInput style={gloStyles.inputStyle} value={name} onChangeText={(text) => setName(text)} />
    //           </View>

    //           <View>
    //             <Text>Invite</Text>
    //             <TextInput style={gloStyles.inputStyle} value={invite} onChangeText={(text) => setInvite(text)} />
    //           </View>

    //           <View>
    //             <TouchableOpacity style={gloStyles.button} >
    //               <Text>Change Theme</Text>
    //             </TouchableOpacity>
    //           </View>


    //           <TouchableOpacity style={gloStyles.button} onPress={addTodo}>
    //             <Text>Create Room</Text>
    //           </TouchableOpacity>

    //           <View style={styles.inputContainer}>
    //             <TextInput ref={ref => textInputRef.current = ref} style={gloStyles.inputStyle} value={input} onChangeText={(text) => setInput(text)} />
    //           </View>
    //         </View>
    //       </View>
    //     </View>
    //   </Modal>
    // </CardFlip>
  );
};
const styles = StyleSheet.create({
  back: {
    height: 100,
    width: 100
  },
  face: {
    height: 100,
    width: 100
  },
  absoluteModal: {
    position: 'absolute',
    bottom: '30%',
    right: '15%',
  },
  cardContainer: {
    padding: 20,
    margin: 20,
    width: 200,
    height: 300
  },
  card: {
    height: 100,
    width: 100
  },
  modalArea: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 400,
    width: 300,
    backgroundColor: 'pink'
  },
  modalContainer: {
    backgroundColor: '#b90600',
    width: '80%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  buttonAlign: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  longStyles: {
    backgroundColor: 'red',
    marginBottom: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default CreateRoom
