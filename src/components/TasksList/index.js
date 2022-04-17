import React, { useState } from 'react'
import { TextInput, Pressable } from 'react-native'
import { Container, InputContainer, TaskContainer, Optin, Text } from './styles'
import Plus from '../../assets/svgs/plus.svg'

function TasksList({ tasks = [], onClick }) {
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
          <Pressable key={task.id} onPress={() => onClick(task.id)}>
            <TaskContainer>
              <Optin checked={task.checked} onPress={() => alert('alert')} />
              <Text>{task.todo}</Text>
            </TaskContainer>
          </Pressable>
        ))}
    </Container>
  )
}

export default TasksList
