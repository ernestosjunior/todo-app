import { useState } from 'react'
import { freeze } from '../../utils/freeze'

export default () => {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [visible, setVisible] = useState(false)

  const handleForm = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleRegister = async () => {
    try {
      setLoading(true)
      await freeze()
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    form,
    visible,
    setVisible,
    handleForm,
    handleRegister,
  }
}
