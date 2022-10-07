import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ButtonSelect from '../ButtonSelect/ButtonSelect.js'
import {
  MainBodyStyled,
  Header,
  Titulo,
  DivConcurso,
  BodyLoteria,
  DivResult,
  NumeroLoteria,
  Footer
} from './styled'

const LotoMania = ({ loterias }) => {
  const [resultado, setResultado] = useState(undefined)

  const resultadoLoterias = async () => {
    const response = await axios(
      `https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${loterias}`
    )
    setResultado(response.data)
  }

  useEffect(() => {
    if (loterias) resultadoLoterias()
  }, [loterias])
  // Lembrar de preencher o array vazio

  const LoteriaRender = resultado && (
    <MainBodyStyled>
      <Header>
        <ButtonSelect />
        <Titulo>LOTO-MANIA</Titulo>

        <DivConcurso>
          <p>
            CONCURSO <br />
            <b>
              {resultado.id} -{' '}
              {`${resultado.data.substring(8, 10)}/${resultado.data.substring(
                5,
                7
              )}/${resultado.data.substring(0, 4)}`}
            </b>
          </p>
        </DivConcurso>
      </Header>
      <BodyLoteria>
        <DivResult>
          {resultado.numeros.map((data) => {
            return <NumeroLoteria>{data}</NumeroLoteria>
          })}
        </DivResult>
        <Footer>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA
        </Footer>
      </BodyLoteria>
    </MainBodyStyled>
  )

  return <div>{LoteriaRender}</div>
}
export default LotoMania
