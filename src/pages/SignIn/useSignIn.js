import { useState } from 'react'
import { freeze } from '../../utils/freeze'

export default () => {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })
  const [visible, setVisible] = useState(false)

  const handleForm = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleLogin = async () => {
    setLoading(true)
    try {
      await freeze()
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  return { loading, handleLogin, form, handleForm, visible, setVisible }
}
