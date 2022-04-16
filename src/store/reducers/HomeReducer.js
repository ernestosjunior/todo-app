import { useContext } from 'react'
import { HomeContext } from '../contexts/HomeContext'

export const initialState = {
  user: {
    name: '',
    photo: '',
  },
  tasks: [],
}

export const HomeReducer = (state, action) => {
  switch (action.type) {
    case 'setUser':
      return {
        ...state,
        user: { ...state.user, [action.payload.field]: action.payload.value },
      }
      break
    default:
      return state
      break
  }
}

export default function useHome() {
  const { dispatch: homeDispatch, state: homeState } = useContext(HomeContext)

  return {
    homeDispatch,
    homeState,
  }
}
