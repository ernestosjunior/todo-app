import React, { useEffect } from 'react'
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
import { useHome } from '../../store'
import { getTasks } from '../../services/api'

function Dashboard() {
  const {
    homeState: {
      user: { name, photo },
      tasks,
    },
    homeDispatch,
  } = useHome()

  useEffect(() => {
    async function fetchTasks() {
      const res = await getTasks('id')
      homeDispatch({ type: 'setTasks', payload: { tasks: res } })
    }
    fetchTasks()
  }, [])

  const handleUpdate = id => {
    console.log(id)
  }

  return (
    <Container>
      <EllipseContainer>
        <Ellipse style={styles.ellipse} />
        <ProfileSection>
          <Image source={{ uri: photo }} resizeMode="cover" />
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
            <TasksList tasks={tasks} onClick={id => handleUpdate(id)} />
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
