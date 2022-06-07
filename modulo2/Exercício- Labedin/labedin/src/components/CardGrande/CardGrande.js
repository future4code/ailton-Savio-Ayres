import React from "react";
import styled from "styled-components";

const ContainerGrande = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
`;

const ImagemGrande = styled.img`
  width: 70px;
  margin-right: 10px;
  border-radius: 50%;
`;

const TextoGrande = styled.h4`
margin-bottom: 15px;
`

const TextoGrande2 = styled.div`
display: flex;
    flex-direction: column;
    justify-items: flex-start;

`

function CardGrande(props) {
  return (
    <ContainerGrande className="bigcard-container">
      <ImagemGrande src={props.imagem} />
      <TextoGrande2>
        <TextoGrande>{props.nome}</TextoGrande>
        <p>{props.descricao}</p>
      </TextoGrande2>
    </ContainerGrande>
  );
}

export default CardGrande;
