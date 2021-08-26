import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Menu({ thm, navigation, descriptors, state }) {
  const handlePress = ([go, focus]) => {
    if (!focus) 
      navigation.navigate(go);
  }
  return (
    <View style={[styles.menu, {backgroundColor:thm.background,borderTopColor:thm.foreground}]}>
      {state.routes.map((route, index) => {

        const isFocused = state.index === index;

        const DEFUALT_ICON = 'help-center'
        const icons = {
          testOverview: 'apps',
          testPath: 'hdr-strong',
          testBanks: 'library-books',
          testCreate: 'queue',
          testRating: 'emoji-events'
        }

        return (
          <TouchableOpacity key={route.key} onPress={()=>handlePress([route.name, isFocused])}>
            <Icon style={[styles.icon, {color: isFocused ? thm.primary : thm.text}]} 
            name={icons[route.name]||DEFUALT_ICON} />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
const styles = StyleSheet.create({
  icon: {
    fontSize: 23
  },
  menu: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 2,
  }
})

export default Menu
