import { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import { AppContext } from '../../context/AppContext';

function Game({ navigation, route }) {
  const handleBack = () => {
    navigation.goBack()
  }
  return (
    <View style={[styles.game, {flex:1}]}>
      <Text>Game</Text>
      <Button onPress={handleBack}>Atras</Button>
    </View>
  )
}
const styles = StyleSheet.create({
  game: {
    position: 'absolute',
    height: '100%',
  }
})

export default Game