import React from 'react'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setToken } from '../../Api'
import styled from 'styled-components'

const ContainerGeral = styled.div`
  padding: 0px;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Titulo = styled.h1`
  color: white;
  font-size: 50px;
`
const InputEmail = styled.input`
  width: 20%;
  height: 30px;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  border-color: gray;
  margin: 0px 0px 15px;
`

const InputPassword = styled.input`
  height: 30px;
  width: 20%;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  border-color: gray;
  margin: 0px 0px 15px;
`

const ButtonBack = styled.button`
  background-color: #14145a;
  border-radius: 0 20px;

  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  margin: 10px 20px;
`
const ButtonSubmit = styled.button`
  background-color: #14145a;
  border-radius: 0 20px;

  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  margin: 10px 20px;
`

export const LoginPage = ({ onSubmitLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const goToHomePage = () => {
    navigate('/')
  }

  const goToAdminHome = () => {
    navigate('/adminHome')
  }

  return (
    <ContainerGeral>
      <Titulo>Efetue o Login</Titulo>
      <InputEmail
        placeholder="Email"
        type="email"
        value={email}
        onChange={onChangeEmail}
      />
      <InputPassword
        placeholder="Password"
        type="password"
        value={password}
        onChange={onChangePassword}
      />

      <ButtonSubmit
        onClick={() => {
          onSubmitLogin({ email, password })
          goToAdminHome()
        }}
      >
        Enviar
      </ButtonSubmit>
      <ButtonBack onClick={goToHomePage}>Voltar</ButtonBack>
    </ContainerGeral>
  )
}
