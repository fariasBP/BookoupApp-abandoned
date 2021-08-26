import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';

import Input from '../../components/form/Input'
import Select from '../../components/form/Select';
import ChipInput from '../../components/form/ChipInput';
import TextSection from '../../components/common/TextSection';
import Button from '../../components/common/Button';

function CreateBank({ thm }) {
  const [difficultItems, setDifficultItems] = useState([
    {
      label: 'Muy Fácil',
      value: 1,
    },{
      label: 'Facil',
      value: 2,
    },{
      label: 'Normal',
      value: 3,
    },{
      label: 'Dificil',
      value: 4,
    },{
      label: 'Muy Dificil',
      value: 5,
    }
  ])
  const [categoryItems, setCategoryItems] = useState([
    {
      label: 'Matemática',
      value: 'math'
    },{
      label: 'Algebra',
      value: 'math'
    },{
      label: 'Física',
      value: 'math'
    },{
      label: 'Química',
      value: 'math'
    },{
      label: 'Informática',
      value: 'math'
    },{
      label: 'Programación',
      value: 'math'
    },{
      label: 'Tecnologia',
      value: 'math'
    },{
      label: 'Electrónica',
      value: 'math'
    },
  ])
  const [name, setName] = useState('')
  const [difficult, setDifficult] = useState('')
  const [description, setDescription] = useState('')

  const handleCreateBank = () => {
    console.log(name, difficult, description)
  }

  return (
    <>
      <TextSection thm={thm} text="Crear Banco" />
      <Input thm={thm} label="Nombre:" placeholder="Escriba el nombre del banco"
      onChangeText={setName} />
      <Select thm={thm} placeholder="Selecione la categoria" label="Categoria"
      items={categoryItems} isCheckbox />
      <ChipInput thm={thm} placeholder="Ej. Javascript, " label="Etiquetas" isTag />
      <Select thm={thm} placeholder="Selecione la dificultad" label="Dificultad"
      items={difficultItems} onChange={setDifficult} />
      <Input thm={thm} styleInput={{height: 100, justifyContent: 'flex-start'}}
      multiline={true} label="Descripción" placeholder="Describa su Banco"
      onChangeText={setDescription} />
      <Button thm={thm} center title="Crear Banco" onPress={handleCreateBank} />
    </>
  )
}
const styles = StyleSheet.create({

})

export default CreateBank