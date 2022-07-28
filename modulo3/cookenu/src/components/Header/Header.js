import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import { StyledToolbar } from './styled'
import Button from '@mui/material/Button'
import { goToPage } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToPage(navigate, '')} color="inherit">
          Cookenu
        </Button>
        <Button onClick={() => goToPage(navigate, 'login')} color="inherit">
          Login
        </Button>
      </StyledToolbar>
    </AppBar>
  )
}
export default Header
