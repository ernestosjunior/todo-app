import React from 'react'
import { TextInput, Pressable } from 'react-native'
import { Container, ContainerIcon } from './styles'
import Eye from '../../assets/svgs/eye.svg'
import EyeOff from '../../assets/svgs/eye-off.svg'

function Input({
  placeholder,
  onChange,
  value,
  type = 'text',
  visible = false,
  setVisible = () => null,
}) {
  const isPassword = type === 'password'

  return (
    <Container>
      <TextInput
        secureTextEntry={visible}
        placeholder={placeholder}
        placeholderTextColor="black"
        onChangeText={onChange}
        value={value}
        style={{ flex: 1 }}
      />
      {isPassword && (
        <ContainerIcon>
          <Pressable onPress={() => setVisible(!visible)}>
            {!visible ? <Eye color="#000000" /> : <EyeOff color="#000000" />}
          </Pressable>
        </ContainerIcon>
      )}
    </Container>
  )
}

export default Input
