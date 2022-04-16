import React from 'react'
import { Pressable, ActivityIndicator } from 'react-native'
import { BaseLayout } from '../../templates'
import { Input, Button } from '../../components'
import { Title, Form, RedirectButton, Text, Link, HeroSection } from './styles'
import { useNavigation } from '@react-navigation/native'
import Hero from '../../assets/svgs/signIn-hero.svg'
import useSignIn from './useSignIn'

function SignIn() {
  const { navigate } = useNavigation()
  const { loading, handleLogin, form, handleForm, visible, setVisible } =
    useSignIn()

  return (
    <BaseLayout>
      <Title>Welcome Back!</Title>
      <HeroSection>
        <Hero />
      </HeroSection>
      <Form>
        <Input
          placeholder="Enter your email"
          value={form.email}
          onChange={value => handleForm('email', value.toLowerCase())}
        />
        <Input
          placeholder="Enter password"
          value={form.password}
          onChange={value => handleForm('password', value.toLowerCase())}
          type="password"
          visible={visible}
          setVisible={setVisible}
        />
      </Form>
      <Button label="Sign In" onClick={() => handleLogin()}>
        {loading && <ActivityIndicator color="#FFFFFF" />}
      </Button>
      <RedirectButton>
        <Pressable
          style={{ flexDirection: 'row', justifyContent: 'center' }}
          onPress={() => navigate('SignUp')}>
          <Text>Don’t have an account ?</Text>
          <Link>Sign Up</Link>
        </Pressable>
      </RedirectButton>
    </BaseLayout>
  )
}

export default SignIn
