import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Container, InputContainer, TaskContainer, Optin, Text } from './styles'
import Plus from '../../assets/svgs/plus.svg'

function TasksList({ tasks = [] }) {
  const [visible, setVisible] = useState(false)

  return (
    <Container>
      <InputContainer>
        <Plus onPress={() => setVisible(!visible)} />
        {visible && (
          <TextInput
            placeholder="Write new todo"
            placeholderTextColor="#000000"
          />
        )}
      </InputContainer>
      {!!tasks.length &&
        tasks.map(task => (
          <TaskContainer key={task.id}>
            <Optin checked={task.checked} />
            <Text>{task.todo}</Text>
          </TaskContainer>
        ))}
    </Container>
  )
}

export default TasksList
