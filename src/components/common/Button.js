import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import useTheme from '../../hooks/useTheme';

function Button({ title="Button", onPress=()=>console.log('hi'), 
center=false }) {
  const [ thm ] = useTheme()

  function BtnComp() {
    return<TouchableOpacity onPress={onPress}>
      <View style={[styles.button, {backgroundColor:thm.btn, minWidth: center?150:'100%'}]}  >
        <Text style={[{color:thm.inverse}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  }
  return (
    <>
      {center?(
        <View style={styles.center}>
          <BtnComp />
        </View>
      ): <BtnComp /> }
    </>
  )
}
const styles = StyleSheet.create({
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  }
})

export default Button
