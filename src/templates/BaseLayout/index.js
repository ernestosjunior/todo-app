import React from 'react'
import { KeyboardAvoidingView, ScrollView } from 'react-native'
import { Container, Main } from './styles'
import Ellipse from '../../assets/svgs/ellipse.svg'

function BaseLayout({ children }) {
  return (
    <Container>
      <Ellipse />
      <KeyboardAvoidingView>
        <Main>{children}</Main>
      </KeyboardAvoidingView>
    </Container>
  )
}

export default BaseLayout
