import React from 'react'
import { InputsContainer, SignUpFormContainer } from './styled'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'

const SignUpForm = () => {
  const [form, onChange, clear] = useForm({ name: '', email: '', password: '' })

  const onSubmitForm = (event) => {
    console.log(form)
    event.preventDefault()
  }

  return (
    <form onSubmit={onSubmitForm}>
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            name={'name'}
            value={form.name}
            onChange={onChange}
            label={'Nome'}
            fullWidth
            margin={'normal'}
            required
            type={'nome'}
          />
          <TextField
            name={'email'}
            value={form.email}
            onChange={onChange}
            label={'Email'}
            fullWidth
            margin={'normal'}
            required
            type={'email'}
          />
          <TextField
            name={'password'}
            value={form.password}
            onChange={onChange}
            label={'Password'}
            fullWidth
            autoFocus
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
            Fazer Cadastro
          </Button>
        </InputsContainer>
      </SignUpFormContainer>
    </form>
  )
}
export default SignUpForm
