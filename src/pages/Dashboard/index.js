import React from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import {
  Container,
  Main,
  EllipseContainer,
  ProfileSection,
  Image,
  Name,
} from './styles'
import Ellipse from '../../assets/svgs/ellipse2.svg'
import { faker } from '@faker-js/faker'

function Dashboard() {
  return (
    <Container>
      <EllipseContainer>
        <Ellipse />
        <ProfileSection>
          <Image source={{ uri: faker.image.avatar() }} />
          <Name>
            {`Welcome, ${faker.name.firstName()} ${faker.name.lastName()}`}
          </Name>
        </ProfileSection>
      </EllipseContainer>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
          }}>
          <Main></Main>
        </View>
      </KeyboardAvoidingView>
    </Container>
  )
}

export default Dashboard
