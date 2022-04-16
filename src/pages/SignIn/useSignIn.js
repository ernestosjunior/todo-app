import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { freeze } from '../../utils/freeze'

export default () => {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })
  const [visible, setVisible] = useState(false)

  const { navigate } = useNavigation()

  const handleForm = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleLogin = async () => {
    setLoading(true)
    try {
      await freeze()
      navigate('Dashboard')
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  return { loading, handleLogin, form, handleForm, visible, setVisible }
}
