import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SelectStyled } from './styled'

const ButtonSelect = () => {
  const navigate = useNavigate()

  const onChangeButtonSelect = (event) => {
    navigate(event.target.value)
  }
  return (
    <div>
      <SelectStyled onChange={onChangeButtonSelect}>
        <option>Acessar Jogos</option>
        <option value="/quina">Quina</option>
        <option value="/timemania">Timemania</option>
        <option value="/lotomania">Lotomania</option>
        <option value="/sorte">Dia de Sorte</option>
        <option value="/lotofacil">Lotofacil</option>
      </SelectStyled>
    </div>
  )
}

export default ButtonSelect
