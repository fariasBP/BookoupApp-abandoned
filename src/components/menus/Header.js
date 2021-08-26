import React, { useState, useRef } from 'react'
import { StyleSheet, Animated, View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Stl from '../../styles/Stl';

function Header({ thm, navigation }) {
  const pressAnim = useRef(new Animated.Value(1)).current
  const [menuOpen, setMenuOpen] = useState(false)
  const [user, setUser] = useState({
    title: 'Monitored Avatar (see logs)',
    label: 'FC',
    backgroundColor: thm.colors.cyan,
    source: {uri: 'https://static.altomusic.com/media/catalog/product/M/A/MAJ100SBK_0.jpg'},
    onImageLoadStart: () => console.log('AvatarScreen: Monitored avatar load STARTED...'),
    onImageLoadEnd: () => console.log('AvatarScreen: Monitored avatar load ENDED') 
  })
  const handleGoProfile = () => {
    navigation.navigate('Profile')
  }
  return (
    <>
      <View backgroundColor={thm.background} style={[styles.header,{borderBottomColor: thm.foreground}]}>
        <View style={styles.titlePart}>
          <TouchableOpacity onPress={()=>navigation.openDrawer()}>
            <Icon name="menu" style={[styles.icon, {color:thm.text,fontSize:35}]} />
          </TouchableOpacity>
          <Text style={[Stl.title, styles.title]}>Bookoup</Text>
        </View>
        <View style={styles.navPart}>
          <TouchableOpacity>
            <Icon name="date-range" style={[styles.icon,{color:thm.text}]} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="chat-bubble-outline" style={[styles.icon,{color:thm.text}]} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="notifications-none" style={[styles.icon,{color:thm.text}]} />
          </TouchableOpacity>
          <Avatar.Text size={40} label="FC" style={[{backgroundColor:thm.primary}]} />
          {/* <Avatar containerStyle={{marginVertical: 5}} {...user} onPress={handleGoProfile} size={40} /> */}
        </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  icon: {
    fontSize: 23
  },
  header: {
    borderBottomWidth: 2,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  titlePart: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 18,
  },
  navPart: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 200,
  },
  icons: {
    marginRight:8,
  },
  menuIcon: {
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Header