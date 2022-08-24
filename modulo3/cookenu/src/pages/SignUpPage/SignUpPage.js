import React from 'react'
import logo from '../../assets/logo.png'
import { SignUpFormContainer } from './styled'
import { LogoImage } from './styled'
import SignUpForm from './SignUpForm'

const SignUpPage = () => {
  return (
    <SignUpFormContainer>
      <LogoImage src={logo} />
      <SignUpForm />
    </SignUpFormContainer>
  )
}
export default SignUpPage
