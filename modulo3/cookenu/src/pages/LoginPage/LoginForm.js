import React from 'react'
import { InputsContainer, ScreenContainer } from './styled'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: '', password: '' })

  const onSubmitForm = (event) => {
    event.preventDefault()
    login()
  }

  const login = () => {
    axios
      .post(`${BASE_URL}/user/login`, form)
      .then((resp) => console.log(form))
      .catch((error) => alert('Erro no login'))
  }

  return (
    <form onSubmit={onSubmitForm}>
      <ScreenContainer>
        <InputsContainer>
          <TextField
            name={'email'}
            value={form.email}
            onChange={onChange}
            label={'Email'}
            fullWidth
            margin={'normal'}
            type={'email'}
          />
          <TextField
            name={'password'}
            value={form.password}
            onChange={onChange}
            label={'Password'}
            fullWidth
            margin={'normal'}
            required
            type={'password'}
          />

          <Button
            type={'submit'}
            fullWidth
            margin={'normal'}
            variant="contained"
          >
            Login
          </Button>
        </InputsContainer>
      </ScreenContainer>
    </form>
  )
}
export default LoginForm
