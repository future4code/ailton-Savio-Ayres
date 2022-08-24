import { useEffect, useState } from 'react'
import { labexApi, setAuthToken } from '../Api'

const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem('token') || null
  if (!token) {
    return null
  }
  return token
}

export const useToken = () => {
  const [token, setToken] = useState(getTokenFromLocalStorage)
  useEffect(() => {
    if (token) {
      setAuthToken(token)
      localStorage.setItem('token', token)
    }
  }, [token])

  const onSubmitLogin = ({ email, password }) =>
    labexApi
      .post('/login', {
        email,
        password
      })
      .then((response) => {
        setToken(response.data.token)
      })
      .catch((error) => {
        console.error('Failed', error.response)
      })

  return { onSubmitLogin }
}
