import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import useTheme from '../../hooks/useTheme';
import Button from '../../components/common/Button';
import Input from '../../components/form/Input'

function Login({ navigation, route }) {
  const [ thm ] = useTheme()

  const handleSignIn = () => {
    navigation.navigate('Signin')
  }

  return (
    <View style={[styles.content,{backgroundColor:thm.background}]} >
      <Text style={styles.title}>Bookoup</Text>
      <View style={styles.form}>
        <View>
          <Input label="Correo Electrónico" />
          <Input label="Contaseña" placeholder="Escriba su contraseña" />
        </View>
        <Button center />
        <View style={styles.otherContent}>
          <TouchableOpacity onPress={handleSignIn} style={{alignSelf: 'center'}}>
            <Text style={styles.otherText}>{'Crear una cuenta'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignIn} style={{alignSelf: 'center'}}>
            <Text style={styles.otherText}>{'Entrar como Invitado'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 100,
  },
  form: {
    marginTop: 16,
  },
  otherContent: {
    marginTop: 16,
    width: 'auto',
  },
  otherText: {
    width: "auto",
    textDecorationLine: 'underline',
    marginBottom: 8,
  }
})

export default Login