import React from 'react'
import { TextInput } from 'react-native'
import { Container } from './styles'

function Input({ placeholder, onChange }) {
  return (
    <Container>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="black"
        onChangeText={onChange}
      />
    </Container>
  )
}

export default Input
