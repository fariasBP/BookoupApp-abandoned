import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import useTheme from '../../hooks/useTheme';
import stl from '../../styles/Stl';
import moment from 'moment';

function Input({ onChangeText=()=>console.log('no listening'), placeholder='placeholder',
label='label', styleInput={}, multiline=false, withLabel=true, type="text" }) {
  const [propsDefault, setPropsDefault] = useState({})
  const [valueDate, setValueDate] = useState(undefined)
  const [visiblePicker, setVisiblePicker] = useState(false)
  const [ thm ] = useTheme()

  useEffect(() => {
    const vals = {
      'multiline': {multiline:true},
      'password': {secureTextEntry:true},
      'email': {keyboardType:'email-address'},
      'number': {keyboardType:'numeric'},
    }
    const valDefault = {}
    setPropsDefault(vals[type]||valDefault)

  }, [])

  const showDatePicker = () => {
    setVisiblePicker(true)
  };
  const hideDatePicker = () => {
    setVisiblePicker(false)
  };
  const handleConfirm = date => {
    // setValueDate(date)
    console.log(date.now())
    hideDatePicker()
  }

  return (
    <View style={[styles.content]}>
      { withLabel && (
        <View style={stl.labelBox}>
          <Text style={[stl.label, {color:thm.text}]}>{label}</Text>
          <Icon style={[stl.iconCommon, {color:thm.medium}]} name="help-outline" />
        </View>
      )}
      {
        type!=='date'?<>
          <TextInput style={[styles.textInput,{backgroundColor:thm.foreground, textAlignVertical: multiline?'top':'center'},styleInput]}
          placeholderTextColor={thm.medium} placeholder={placeholder} autoCorrect={false}
          onChangeText={onChangeText} {...propsDefault} />

        </> : <>
          <TouchableOpacity style={[styles.select, {backgroundColor:thm.foreground}]}
          onPress={showDatePicker}>
            <Text style={[{color:valueDate===undefined?thm.medium:thm.text}]}>
              {/* {valueDate===undefined?placeholder:valueDate} */}asdfa
            </Text>
            <Icon name="keyboard-arrow-down" size={22} />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={visiblePicker}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </>
      }
      
    </View>
  )
}
const styles = StyleSheet.create({
  content: {
    marginBottom: 16,
    marginHorizontal: 12,
  },
  textInput: {
    height: 44,
    borderRadius: 22,
    paddingHorizontal: 15,
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
})

export default Input