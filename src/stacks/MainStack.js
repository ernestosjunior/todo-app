import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Splash, SignIn, SignUp, Dashboard } from '../pages'

const Stack = createStackNavigator()

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  )
}

export default MainStack
