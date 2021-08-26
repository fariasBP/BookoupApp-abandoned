import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useTheme from '../../hooks/useTheme';

import stl from '../../styles/Stl';
import CreatorEqt from './../common/CreatorEqt';

function ChipInput({ placeholder='placeholder', label='label',onChangeTags=()=>console.log('no listening'),
addButtons=false, chipsDefault=[], isTag=false, minWidth=80 }) {
  const [ thm ] = useTheme()

  const [creatorEqtVisible, setCreatorEqtVisible] = useState(false)
  const [chips, setChips] = useState(chipsDefault)
  const [selectedChip, setSelectedChip] = useState(null)
  const [value, setValue] = useState('')

  const handleButtons = () => {
    setCreatorEqtVisible(true)
  }
  const handleSelected = index => {
    if (selectedChip===index) setSelectedChip(null)
    else setSelectedChip(index)
  }
  const handleRemoveChip = indexRemove => {
    setChips(chips.filter((item, index)=>index!==indexRemove))
    setSelectedChip(null)
  }
  const handleAddChip = () => {
    // console.log(obj.nativeEvent.key)
    if(value.trim()!=='') {
      setChips([...chips, value.trim()])
      setValue('')
    }
  }
  const handleAddChipWithSpace = e => {
    if(e.nativeEvent.key===' '&&value.trim()!=='') {
      setChips([...chips, value.trim()])
      setValue('')
    }
  }
  const algo = e=>{
    if(e.trim()!=='') {
      setChips([...chips, e.trim()])
      setValue('')
    }
  }

  return (
    <>
      <View style={styles.content}>
        <View style={stl.labelBox}>
          <Text style={[stl.label, {color:thm.text}]}>{label}</Text>
          <Icon style={[stl.iconCommon, {color:thm.medium}]} name="help-outline" />
        </View>

        <View style={[styles.chipsinput,{backgroundColor:thm.foreground}]}>
          { chips.map((item, index)=>(
            <Pressable style={[styles.chip,{backgroundColor: selectedChip===index?thm.black:thm.btn}]}
            onPress={()=>handleSelected(index)} key={index}>
              {selectedChip===index&&(
                <Pressable style={[styles.iconChip]} onPress={()=>handleRemoveChip(index)}>
                  <Icon name="close" style={[styles.iconChipClose,{fontSize:15,color:thm.inverse}]} />
                </Pressable>
              )}
              <Text style={{color:thm.inverse}}>{item}</Text>
            </Pressable>
          )) }
          
          <TextInput style={[styles.textinput,{minWidth:minWidth}]} onChangeText={setValue} value={value}
          onEndEditing={isTag?null:handleAddChip} onKeyPress={isTag?handleAddChipWithSpace:null}
          placeholder={placeholder} placeholderTextColor={thm.medium} />
        </View>

        {!addButtons?null:(
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.btn} onPress={handleButtons}>
              <Icon name="functions" style={[stl.iconCommon]} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={handleButtons}>
              <Icon name="code" style={[stl.iconCommon]} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={handleButtons}>
              <Icon name="insert-link" style={[stl.iconCommon]} />
            </TouchableOpacity>
          </View>
        )}
      </View>

      
      <CreatorEqt thm={thm} setEqtValue={algo} visible={creatorEqtVisible} setVisible={setCreatorEqtVisible} />
          

    </>
  )
}
const styles = StyleSheet.create({
  content: {
    marginBottom: 16,
    marginHorizontal: 12,
  },
  chipsinput: {
    minHeight: 44,
    borderRadius: 22,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 32,
    borderRadius: 16,
    padding: 6,
    marginRight: 5,
    marginVertical: 8
  },
  iconChip: {
    borderRadius: 40, 
  },
  textinput: {
    height: 44,
    flex: 1,
    // borderWidth: 1,
    // textAlignVertical: 'center',
    // borderRadius: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  btn: {
    marginLeft: 10,
  },
  
})

export default ChipInput