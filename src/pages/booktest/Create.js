import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

import SubMenu from '../../components/menus/SubMenu';
import CreateQz from './CreateQz';
import CreateBank from './CreateBank';
import CreatePath from './CreatePath';

function Create({ route, navigation }) {
  const { thm } = route.params
  const [btnsMenu, setBtnsMenu] = useState([
    {
      title: 'Pregunta',
      component: ()=><CreateQz thm={route.params.thm} />,
    },
    {
      title: 'Banco',
      component: ()=><CreateBank thm={route.params.thm} />,
    },
    {
      title: 'Camino',
      component: ()=><CreatePath thm={route.params.thm} />,
    },
  ])
  const [comp, setComp] = useState('')

  return ( 
    <ScrollView style={{ flex:1, backgroundColor:thm.background}}>
      <SubMenu thm={thm} buttons={btnsMenu} setComponent={setComp} itemDefault="Pregunta" />
      {comp===''?null:comp}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  create: {
    // height: 1000
  }
})

export default Create