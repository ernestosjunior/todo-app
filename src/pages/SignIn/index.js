import React from 'react'
import { Pressable } from 'react-native'
import { BaseLayout } from '../../templates'
import { Input, Button } from '../../components'
import { Title, Form, RedirectButton, Text, Link, HeroSection } from './styles'
import { useNavigation } from '@react-navigation/native'
import Hero from '../../assets/svgs/signIn-hero.svg'

function SignIn() {
  const { navigate } = useNavigation()
  return (
    <BaseLayout>
      <Title>Welcome Back!</Title>
      <HeroSection>
        <Hero />
      </HeroSection>
      <Form>
        <Input placeholder="Enter your email" />
        <Input placeholder="Enter password" />
      </Form>
      <Button label="Sign In" />
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
