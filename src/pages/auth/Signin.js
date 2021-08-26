import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'

import useTheme from '../../hooks/useTheme'
import Input from '../../components/form/Input';
import Button from '../../components/common/Button';

function Signin({ navigation, route }) {
  const [ thm ] = useTheme()
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [user, setUser] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleGoLogIn = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={[styles.content,{backgroundColor:thm.background}]} >
      <ScrollView>
        <Text style={styles.title}>Bookoup</Text>
        <View style={styles.form}>
          <View>
            <Input label="Nombre" placeholder="Escriba su nombre(s)" />
            <Input label="Apellido" placeholder="Escriba su apellido" />
            <Input label="Usuario" placeholder="Ej: userMd98" />
            <Input label="Fecha de Nacimiento" placeholder="Dia  /  Mes  /  Año" type="date" />
            <Input label="Correo Electónico" placeholder="Ej: usuario@mail.com" type="email" />
            <Input label="Confirmar Correo Electrónico" placeholder="Ej: usuario@mail.com" type="email" />
            <Input label="Contraseña" placeholder="Escriba su contraseña" type="password" />
          </View>
          <Button title="Crear Cuenta" center />
          <View style={styles.otherContent}>
            <TouchableOpacity onPress={handleGoLogIn} style={{alignSelf: 'center'}}>
              <Text style={styles.otherText}>{'Iniciar Sesión'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleGoLogIn} style={{alignSelf: 'center'}}>
              <Text style={styles.otherText}>{'Entrar como Invitado'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    marginVertical: 25,
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

export default Signin
