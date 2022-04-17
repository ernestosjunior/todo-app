import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { login } from '../../services/api'
import { useHome } from '../../store'

export default () => {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })
  const [visible, setVisible] = useState(false)

  const { navigate } = useNavigation()
  const { homeDispatch } = useHome()

  const handleForm = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleLogin = async () => {
    setLoading(true)
    try {
      const response = await login(form.email, form.password)
      if (!response.ok) return

      homeDispatch({ type: 'setUser', payload: { user: response.data } })

      navigate('Dashboard')
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  return { loading, handleLogin, form, handleForm, visible, setVisible }
}
