import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native';

import LabelInput from './LabelInput';

function InputArea(thm, onChangeText=()=>console.log('no listening'), placeholder='placeholder', label='label') {
  return (
    <View style={[styles.content]}>
      <LabelInput thm={thm} label={label} />
      <TextInput style={[styles.textInput,{backgroundColor:thm.foreground}]} placeholderTextColor={thm.medium}
      placeholder={placeholder} onChangeText={onChangeText} />
    </View>
  )
}
const styles = StyleSheet.create({

})

export default InputArea
