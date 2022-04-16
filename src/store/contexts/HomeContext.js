import React, { createContext, useReducer } from 'react'
import { initialState, HomeReducer } from '../reducers/HomeReducer'

export const HomeContext = createContext()

export default ({ children }) => {
  const [state, dispatch] = useReducer(HomeReducer, initialState)

  return (
    <HomeContext.Provider value={{ state, dispatch }}>
      {children}
    </HomeContext.Provider>
  )
}
