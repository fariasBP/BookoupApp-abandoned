import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Modal,Pressable, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import stl from '../../styles/Stl';

const dataDefault = [
  {
    label: 'item 1',
    value: 'valor 1'
  },
  {
    label: 'item 2',
    value: 'valor 2'
  },
  {
    label: 'item 3',
    value: 'valor 3'
  },
  {
    label: 'item 4',
    value: 'valor 4'
  },
  {
    label: 'item 5',
    value: 'valor 5'
  },
  {
    label: 'item 6',
    value: 'valor 6'
  },
  {
    label: 'item 7',
    value: 'valor 7'
  },
  {
    label: 'item 8',
    value: 'valor 8'
  },
  {
    label: 'item 9',
    value: 'valor 9'
  },
  {
    label: 'item 10',
    value: 'valor 10'
  },
  {
    label: 'item 11',
    value: 'valor 11'
  },
  {
    label: 'item 12',
    value: 'valor 12'
  },
  {
    label: 'item 13',
    value: 'valor 13'
  },
  {
    label: 'item 14',
    value: 'valor 14'
  },
  {
    label: 'item 15',
    value: 'valor 15'
  },
]

function Select({ thm, placeholder='placeholder', label='label', isCheckbox=false,
search=false, items=dataDefault, onChange=(e)=>console.log('selected',e) }) {
  const [value, setValue] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [checkboxes, setCheckboxes] = useState([])
  const [indexesValues, setIndexesValues] = useState([])

  const closeModal = () => {
    setModalVisible(false)
    setIndexesValues([])
  }

  const handleSelected = (val) => {
    setValue(val)
    setModalVisible(false)
    onChange(val)
  }
  const handleIndexSelected = index => {

    if(indexesValues.filter((item) => item===index).length===0)
      setIndexesValues([...indexesValues, index])
    else 
      setIndexesValues(indexesValues.filter(item=>item!==index))
  }

  return (
    <View style={styles.content}>
      <View style={stl.labelBox}>
        <Text style={[stl.label, {color:thm.text}]}>{label}</Text>
        <Icon style={[stl.iconCommon, {color:thm.medium}]} name="help-outline" />
      </View>
      <TouchableOpacity style={[styles.select, {backgroundColor:thm.foreground}]}
      onPress={()=>setModalVisible(true)}>
        <Text style={[{color:value===''?thm.medium:thm.text}]}>
          {value===''?placeholder:items.filter((key) => key.value===value)[0].label}
        </Text>
        <Icon name="keyboard-arrow-down" size={22} />
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <Pressable style={[styles.modalHide]}
        onPress={() => setModalVisible(false)}></Pressable>
        <View style={styles.modal}>
          <View style={[styles.modalView, {backgroundColor:thm.background}]}>
            <View style={[styles.modalTitleBox]}>
              <TouchableOpacity onPress={closeModal}>
                <Icon style={[stl.iconCommon, {color:thm.medium}]} name="close" />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>{label}</Text>
              <TouchableOpacity onPress={() => console.log('he')}>
                <Icon style={[stl.iconCommon, {color: isCheckbox?thm.medium:thm.background}]} name="check" />
              </TouchableOpacity>
            </View>
            <ScrollView>
              {items.map((item, index) => (
                <TouchableHighlight onPress={isCheckbox?()=>handleIndexSelected(index):()=>handleSelected(item.value)}
                key={index} underlayColor={thm.foreground}>
                  <View style={[styles.itemBox,{borderBottomColor:thm.foreground}]}>
                    <Text style={styles.textStyle}>{item.label}</Text>
                    {isCheckbox?(
                      indexesValues.map((i,indexI)=>(
                        i===index&&<Icon key={indexI} style={[stl.iconCommon, {color:thm.primary}]} name="check-circle" />
                      ))
                    ):<View></View>}
                  </View>
                </TouchableHighlight>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
  content: {
    marginBottom:15,
    marginHorizontal: 12,
  },
  select: {
    minHeight: 44,
    borderRadius: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 15,
  },
  modalHide: {
    height: '25%',
    
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  modalView: {
    flex: 1,
    elevation: 20,
    shadowOpacity: 1,
    // borderRadius: 15,
  },
  modalTitleBox: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalTitle: {
  },
  itemBox: {
    marginHorizontal: 8,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    minHeight: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export default Select
