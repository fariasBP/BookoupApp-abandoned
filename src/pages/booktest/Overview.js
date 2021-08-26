import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

function Overview({ route, navigation }) {
  const { thm } = route.params
  const handleOnGame = () => {
    console.log('ir a game')
    navigation.navigate('Game',{
      text: 'hola'
    })
  }
  return (
    <ScrollView>
      <View style={[styles.overview, {backgroundColor:thm.background}]}>
        <Text>En Test-Overview</Text>
        <Button onPress={handleOnGame}>Adios</Button>

      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  overview: {
    backgroundColor: '#000',
    height: 1000,
  }
})

export default Overview