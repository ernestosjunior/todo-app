import React from 'react'
import { Pressable } from 'react-native'
import { BaseLayout } from '../../templates'
import { Input, Button } from '../../components'
import { Title, Subtitle, Form, RedirectButton, Text, Link } from './styles'

function SignUp() {
  return (
    <BaseLayout>
      <Title>Welcome Onboard!</Title>
      <Subtitle>Let’s help you meet up your tasks</Subtitle>
      <Form>
        <Input placeholder="Enter your full name" />
        <Input placeholder="Enter your email" />
        <Input placeholder="Enter password" />
        <Input placeholder="Confirm Password" />
      </Form>
      <Button label="Register" />
      <RedirectButton>
        <Pressable style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text>Don’t have an account ?</Text>
          <Link>Sign Up</Link>
        </Pressable>
      </RedirectButton>
    </BaseLayout>
  )
}

export default SignUp
