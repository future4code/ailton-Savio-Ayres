import React from 'react'
import { HomePage } from '../HomePage/HomePage'
import { useNavigate } from 'react-router-dom'

export const ListTripsPage = () => {
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate('/')
  }

  const goToForm = () => {
    navigate('/trips/applicationForm')
  }

  return (
    <div>
      <button onClick={goToHomePage}>Voltar</button>
      <button onClick={goToForm}>Inscrever-se</button>
    </div>
  )
}
