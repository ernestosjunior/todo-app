import React, { useEffect } from 'react'
import { BaseLayout } from '../../templates'
import { HeroSection, Title, Subtitle } from './styles'
import { Button } from '../../components'
import Hero from '../../assets/svgs/hero.svg'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Splash() {
  const { navigate } = useNavigation()

  useEffect(() => {
    async function isFirstAccess() {
      const storage = await AsyncStorage.getItem('previouslyAccessed')

      if (storage == null) return false

      const value = Boolean(storage)

      if (value) return navigate('SignIn')

      return false
    }
    isFirstAccess()
  }, [])

  return (
    <BaseLayout>
      <HeroSection>
        <Hero />
      </HeroSection>
      <Title>Gets things done with TODO</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum dictum
        tempus, interdum at dignissim metus. Ultricies sed nunc.
      </Subtitle>
      <Button
        label="Get Started"
        onClick={async () => {
          await AsyncStorage.setItem('previouslyAccessed', '1')
          navigate('SignUp')
        }}
      />
    </BaseLayout>
  )
}

export default Splash
