import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Label({ thm, label }) {
  return (
    <View style={styles.labelBox}>
      <Text style={[styles.label, {color:thm.text}]}>{label}</Text>
      <Icon style={[styles.iconCommon, {color:thm.medium}]} name="help-outline" />
    </View>
  )
}
const styles = StyleSheet.create({
  labelBox: {
    marginBottom: 8,
    flexDirection:'row',
    alignItems: 'center'
  },
  label: {
    marginRight: 12
  },
})

export default Label
