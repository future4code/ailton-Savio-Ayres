import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { MainBodyStyled } from '../Pages/Mega/mainBodyStyled'
import Quina from '../Pages/Quina/Quina'
import TimeMania from '../Pages/TimeMania/TimeMania'
import DiaDeSorte from '../Pages/DiaDeSorte/DiaDeSorte'
import Mega from '../Pages/Mega/Mega'
import LotoFacil from '../Pages/LotoFacil/LotoFacil'
import LotoMania from '../Pages/LotoMania/LotoMania'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import { MainBodyStyled } from '../Pages/Mega/styled'

const Router = () => {
  const [concursoLoterias, setConcursoLoterias] = useState([])

  useEffect(() => {
    const getConcursos = async () => {
      try {
        const response = await axios(
          `https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos`
        )
        setConcursoLoterias(response.data)
        console.log(response.data)
      } catch {}
    }
    getConcursos()
  }, [])

  function getId(item) {
    let filtrarLoteriaId = concursoLoterias.filter(
      (Id) => Id.loteriaId === item
    )
    let mapLoteriaId = filtrarLoteriaId.map((Id) => Id.concursoId)
    let loteriaId = mapLoteriaId.toString()
    return loteriaId
  }

  return (
    <MainBodyStyled>
      <BrowserRouter>
        <Routes>
          <Route index element={<Mega loterias={getId(0)} />} />
          <Route path="/sorte" element={<DiaDeSorte loterias={getId(5)} />} />
          <Route path="/quina" element={<Quina loterias={getId(1)} />} />
          <Route
            path="/timeMania"
            element={<TimeMania loterias={getId(3)} />}
          />
          <Route
            path="/lotoFacil"
            element={<LotoFacil loterias={getId(2)} />}
          />
          <Route
            path="/lotoMania"
            element={<LotoMania loterias={getId(3)} />}
          />

          <Route path="*" exact={true} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </MainBodyStyled>
  )
}
export default Router
