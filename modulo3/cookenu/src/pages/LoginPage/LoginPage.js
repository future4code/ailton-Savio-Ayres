import React from 'react'
import { ScreenContainer, LogoImage, SignUpButtonContainer } from './styled'
import logo from '../../assets/logo.png'
import { Button } from '@mui/material'
import LoginForm from './LoginForm'
import { useNavigate } from 'react-router-dom'
import { goToPage } from '../../routes/Coordinator'

const LoginPage = () => {
  const navigate = useNavigate()

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <LoginForm />
      <SignUpButtonContainer>
        <Button
          onClick={() => goToPage(navigate, 'cadastro')}
          type={'submit'}
          fullWidth
          margin={'normal'}
          variant="text"
        >
          Não tem uma conta? Cadastre-se já!
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}
export default LoginPage
