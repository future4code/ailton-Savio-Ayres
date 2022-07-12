import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CreateTripPage = () => {
  const navigate = useNavigate()

  const goToAdminHome = () => {
    navigate('/adminHome')
  }

  return (
    <div>
      <button onClick={goToAdminHome}>Voltar</button>
      <button>Criar</button>
    </div>
  )
}
