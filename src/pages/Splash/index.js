import React from 'react'
import { BaseLayout } from '../../templates'
import { HeroSection, Title, Subtitle } from './styles'
import { Button } from '../../components'
import Hero from '../../assets/svgs/hero.svg'
import { useNavigation } from '@react-navigation/native'

function Splash() {
  const { navigate } = useNavigation()
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
      <Button label="Get Started" onClick={() => navigate('SignUp')} />
    </BaseLayout>
  )
}

export default Splash
