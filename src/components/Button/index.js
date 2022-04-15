import React from 'react'
import { Pressable } from 'react-native'
import { Container, StyledText } from './styles'

function Button({ label, onClick }) {
  return (
    <Pressable onPress={onClick} style={{ alignItems: 'center' }}>
      <Container>
        <StyledText>{label}</StyledText>
      </Container>
    </Pressable>
  )
}

export default Button
