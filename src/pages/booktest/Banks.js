import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Banks({ route }) {
  const { thm } = route.params
  return (
    <View style={[styles.banks, {backgroundColor:thm.background}]}>
      <Text>En Banks</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  banks: {
    flex: 1,
  }
})

export default Banks