import React from "react";
import "./CardPequeno.css";

function CardPequeno(props) {
  return (
    <div className="smallcard-container">
      <img src={props.imagem} />
      <div>
        <h4>{props.email}</h4>
        <h4>{props.endereco}</h4>
        <p>{props.descricao}</p>
      </div>
    </div>
  );
}


export default CardPequeno;
