import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const buttonsDefault = [
  {
    title: 'uno',
    component: <Text>Boton 1</Text>,
  },
  {
    title: 'dos',
    component: <Text>Boton 2</Text>,
  },
  {
    title: 'tres',
    component: <Text>Boton 3</Text>,
  },{
    title: 'cuatro',
    component: <Text>Boton 4</Text>,
  },
]

function SubMenu({ thm, buttons=buttonsDefault, itemDefault='uno', setComponent=(e)=>console.log(e) }) {
  const [currentItem, setCurrentItem] = useState(itemDefault)
  useEffect(() => {
    setComponent((buttons.filter((item)=>item.title===itemDefault))[0].component)
  }, [])
  const handleComponent = (comp, titl) => {
    if (titl===currentItem) return
    else {
      setComponent(comp)
      setCurrentItem(titl)
    }
  }
  return (
    <View style={styles.content}>
      {buttons.map((item, i, arr)=>(
        <TouchableOpacity key={i} style={[{borderColor:thm.foreground},styles.boxItem,
        i===0?styles.boxItemStart:(i===arr.length-1?styles.boxItemEnd:styles.boxItemMiddle),
        {borderColor:thm.foreground,backgroundColor:currentItem===item.title?thm.text:thm.background,borderColor:currentItem===item.title?thm.text:thm.foreground}]}
        onPress={()=>handleComponent(item.component, item.title)}>
          <Text style={{color:currentItem===item.title?thm.inverse:thm.text}}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 8,
  },
  boxItem: {
    height: 36,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  boxItemStart: {
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    borderRightWidth: 1,
  },
  boxItemMiddle: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  boxItemEnd: {
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    borderLeftWidth: 1,
  }
})

export default SubMenu