import React from 'react'
import { Pressable } from 'react-native'
import { BaseLayout } from '../../templates'
import { Input, Button } from '../../components'
import { Title, Subtitle, Form, RedirectButton, Text, Link } from './styles'
import { useNavigation } from '@react-navigation/native'

function SignUp() {
  const { navigate } = useNavigation()

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
        <Pressable
          style={{ flexDirection: 'row', justifyContent: 'center' }}
          onPress={() => navigate('SignIn')}>
          <Text>Already have an account ?</Text>
          <Link>Sign In</Link>
        </Pressable>
      </RedirectButton>
    </BaseLayout>
  )
}

export default SignUp
