import React from 'react'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onSubmitLogin = () => {
    const body = {
      email: email,
      password: password
    }
    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/savio-ayres-ailton/login',
        body
      )
      .then((response) => {
        // goToAdminHome()
        console.log('Sucess', response.data)
        localStorage.setItem('token', response.data.token)

        goToAdminHome()
      })
      .catch((error) => {
        console.log('Failed', error.response)
      })
  }

  const goToHomePage = () => {
    navigate('/')
  }

  const goToAdminHome = () => {
    navigate('/adminHome')
  }

  return (
    <div>
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={onChangeEmail}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={onChangePassword}
      />

      {/* <button onClick={goToAdminHome}>Enviar</button> */}
      <button onClick={onSubmitLogin}>Enviar</button>
      <button onClick={goToHomePage}>Voltar</button>
    </div>
  )
}
