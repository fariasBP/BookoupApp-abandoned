import React from 'react'
import { StyleSheet, Text } from 'react-native';

function Section({ thm, text='no text', style={}}) {
  return (
    <Text style={[styles.section, style, {color:thm.text}]}>{text}</Text>
  )
}
const styles = StyleSheet.create({
  section: {
    fontWeight: 'bold',
    marginBottom: 15,
    marginHorizontal: 12,
  }
})

export default Section