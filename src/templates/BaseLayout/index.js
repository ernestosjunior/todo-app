import React from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import { Container, Main } from './styles'
import Ellipse from '../../assets/svgs/ellipse.svg'

function BaseLayout({ children }) {
  return (
    <Container>
      <Ellipse />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
          }}>
          <Main>{children}</Main>
        </View>
      </KeyboardAvoidingView>
    </Container>
  )
}

export default BaseLayout
