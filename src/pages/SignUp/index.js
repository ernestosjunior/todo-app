import React from 'react'
import { Pressable, ActivityIndicator } from 'react-native'
import { BaseLayout } from '../../templates'
import { Input, Button } from '../../components'
import { Title, Subtitle, Form, RedirectButton, Text, Link } from './styles'
import { useNavigation } from '@react-navigation/native'
import useSignUp from './useSignUp'

function SignUp() {
  const { navigate } = useNavigation()
  const { form, visible, setVisible, handleForm, loading, handleRegister } =
    useSignUp()

  return (
    <BaseLayout>
      <Title>Welcome Onboard!</Title>
      <Subtitle>Let’s help you meet up your tasks</Subtitle>
      <Form>
        <Input
          placeholder="Enter your full name"
          value={form.name}
          onChange={value => handleForm('name', value)}
          capitalize="words"
        />
        <Input
          placeholder="Enter your email"
          value={form.email}
          onChange={value => handleForm('email', value)}
        />
        <Input
          placeholder="Enter password"
          value={form.password}
          type="password"
          visible={visible}
          setVisible={setVisible}
          onChange={value => handleForm('password', value)}
        />
        <Input
          placeholder="Confirm Password"
          value={form.confirmPassword}
          type="password"
          visible={visible}
          setVisible={setVisible}
          onChange={value => handleForm('confirmPassword', value)}
        />
      </Form>
      <Button
        label="Register"
        onClick={() => handleRegister()}
        disabled={loading}>
        {loading && <ActivityIndicator color="#FFFFFF" />}
      </Button>
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
