import React from 'react'
import { Pressable } from 'react-native'
import { Container, StyledText } from './styles'

function Button({ label, onClick, children, disabled }) {
  return (
    <Pressable
      onPress={onClick}
      style={{ alignItems: 'center' }}
      disabled={disabled}>
      <Container>
        {!children ? <StyledText>{label}</StyledText> : children}
      </Container>
    </Pressable>
  )
}

export default Button
