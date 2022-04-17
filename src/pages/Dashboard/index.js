import React from 'react'
import { KeyboardAvoidingView, Platform, View, StyleSheet } from 'react-native'
import {
  Container,
  Main,
  EllipseContainer,
  ProfileSection,
  Image,
  Name,
} from './styles'
import { TasksList } from '../../components'
import Ellipse from '../../assets/svgs/ellipse2.svg'
import { faker } from '@faker-js/faker'

function Dashboard({ name = 'user', img }) {
  return (
    <Container>
      <EllipseContainer>
        <Ellipse style={styles.ellipse} />
        <ProfileSection>
          <Image source={{ uri: faker.image.avatar() }} resizeMode="cover" />
          <Name>{`Welcome, ${name}`}</Name>
        </ProfileSection>
      </EllipseContainer>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
          }}>
          <Main>
            <TasksList />
          </Main>
        </View>
      </KeyboardAvoidingView>
    </Container>
  )
}

const styles = StyleSheet.create({
  ellipse: { position: 'absolute', left: 0 },
})

export default Dashboard
