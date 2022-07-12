import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate('/')
  }

  const goToAdminHome = () => {
    navigate('/adminHome')
  }

  return (
    <div>
      <button onClick={goToHomePage}>Voltar</button>
      <button onClick={goToAdminHome}>Enviar</button>
    </div>
  )
}
