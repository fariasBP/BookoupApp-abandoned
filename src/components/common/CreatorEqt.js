import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, Modal, View } from 'react-native';
import MathJax from 'react-native-mathjax';
import Icon from 'react-native-vector-icons/MaterialIcons';

import stl from '../../styles/Stl';
import Input from '../form/Input';

function CreatorEqt({ thm, visible, setVisible, setEqtValue=(e)=>console.log('eqVal',e) }) {
  const [equation, setEquation] = useState('')

  const handleSetValue = () => {
    setEqtValue(equation)
    setVisible(false)
  }

  return (
    <Modal animationType="slide" transparent={true}
    visible={visible}>
      <View style={[styles.modal,{backgroundColor:thm.background}]}>
        <View style={[styles.modalTitleBox]}>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Icon style={[stl.iconCommon, {color:thm.medium}]} name="close" />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Crear Ecuación</Text>
          <TouchableOpacity onPress={handleSetValue}>
            <Icon style={[stl.iconCommon, {color:thm.medium}]} name="check" />
          </TouchableOpacity>
        </View>
        <View style={styles.modalView}>

          {/* view live */}
          <View style={styles.paragraph}>
            <Text style={styles.txt}>paddingHorizontal</Text>
          </View>
          <MathJax html={`${equation}`}
          mathJaxOptions={{
            messageStyle: 'none',
            extensions: [ 'tex2jax.js' ],
            jax: [ 'input/TeX', 'output/HTML-CSS' ],
            tex2jax: {
              inlineMath: [ ['$','$'], ['\\(','\\)'] ],
              displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
              processEscapes: true,
              scale: .2,
            },
            TeX: {
              extensions: ['AMSmath.js','AMSsymbols.js','noErrors.js','noUndefined.js']
            },
          }} style={{margin:0,padding:0}} textZoom={93} />
          {/* input */}
          <Input thm={thm} value={equation} onChangeText={setEquation} withLabel={false}
          placeholder="Escriba Aquí" showSoftInputOnFocus={true} multiline />
          {/* teclado */}
          <View style={[styles.keyboard,{backgroundColor:thm.foreground}]}>
            <View style={styles.rowKeyboard}>
              <TouchableOpacity>
                <View style={[styles.key,{backgroundColor:thm.background}]}>
                  <Text style={{color: thm.text}}>1</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  modalTitleBox: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt: {
    // borderWidth: 1,
    textAlignVertical: 'center',
  },
  eqt: {
    // borderWidth: 1,
    alignItems: 'center',
    paddingBottom: 2,
  },
  paragraph: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  keyboard: {
    padding: 5,
    flex: 1,
  },
  rowKeyboard: {
    flexDirection: 'row',
  },
  key: {
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
  }
})

export default CreatorEqt
