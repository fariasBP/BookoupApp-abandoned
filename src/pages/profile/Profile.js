import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Profile() {
  return (
    <View style={styles.profile}>
      <Text>En profile</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  profile: {
    backgroundColor: 'blue',
    height: 1000,
  }
})

export default Profile