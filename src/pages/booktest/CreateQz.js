import React from 'react'
import { StyleSheet } from 'react-native';

import ChipInput from '../../components/form/ChipInput';
import TextSection from '../../components/common/TextSection';
import Button from '../../components/common/Button';

function CreateQz({ thm }) {
  return (
    <>
      <TextSection thm={thm} text="Crear Pregunta" />

      <ChipInput thm={thm} label="Pregunta(s)"
      placeholder="Escriba las Preguntas" addButtons minWidth={150} />
      <ChipInput thm={thm} label="Respuesta(s)"
      placeholder="Escriba las Respuestas" isTag addButtons minWidth={150} />

      <Button thm={thm} title="Crear Pregunta" center />
    </>
  )
}
const styles = StyleSheet.create({
  icon: {
    fontSize: 24
  }
})

export default CreateQz