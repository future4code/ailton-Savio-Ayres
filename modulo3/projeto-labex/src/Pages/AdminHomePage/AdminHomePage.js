import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AdminHomePage = () => {
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate('/')
  }

  const goToAdminHome = () => {
    navigate('/adminHome')
  }

  const goToLoginPage = () => {
    navigate('/loginPage')
  }

  const goToCreateTrip = () => {
    navigate('/admin/createTrip')
  }

  const goToTripDetails = () => {
    navigate('/admin/tripDetails')
  }

  return (
    <div>
      <button onClick={goToHomePage}>voltar</button>
      <button onClick={goToCreateTrip}>Criar Viagem</button>
      <button onClick={goToLoginPage}>Logout</button>
      <button onClick={goToTripDetails}>Detalhes da Viagem</button>
    </div>
  )
}
