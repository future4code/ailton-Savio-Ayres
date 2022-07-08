import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import CardPequeno from "./components/CardPequeno/CardPequeno";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://uploaddeimagens.com.br/images/003/895/513/original/117349793_918410821997843_1566988980795844797_n.jpg?1654620041"
          nome="Sávio Ayres "
          descricao="Oi, eu sou o Sávio. Sou aluno da Labenu, e estou em processo de aprendizagem. Estou gostando muito do curso. Estou bem empolgado para minha evolução."
        />

        <ImagemButton
          imagem="https://cdn.icon-icons.com/icons2/936/PNG/512/chevron-arrow-down_icon-icons.com_73633.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/561/561127.png"
          email="Email:"
          descricao="savioayres@hotmail.com"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/17/17589.png"
          endereco="Endereço: "
          descricao="Rua Júlia Barreto de Melo"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Futuro programador FullStack"
        />

        <CardGrande
          imagem="https://t.ctcdn.com.br/MI3NsCA0AMn_V2CraN5kjM6TtRw=/400x400/smart/filters:format(webp)/i489946.jpeg"
          nome="Microsoft"
          descricao="Futuro funcionário da Microsoft"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
