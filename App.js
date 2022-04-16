import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/stacks/MainStack'
import HomeProvider from './src/store/contexts/HomeContext'

export default function App() {
  return (
    <HomeProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </HomeProvider>
  )
}
