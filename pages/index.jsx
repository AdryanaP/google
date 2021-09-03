import Resultado from "../components/Resultado";
import Barra from "../components/BarraResultado";
import Topico from "../components/Topico";
import Acordeon from "../components/Acordeon";
import data from "./data/data";

export default function exibir() {
  const resultadoItens = [];
  for(const resultado of data.resultados) {
    resultadoItens.push(<Resultado 
    link={resultado.link}
    url={resultado.url}
    titulo={resultado.titulo}
    descricao={resultado.descricao}
    />)
  }

  const topicosItens = [];
  for(const topico of data.topicos) {
    topicosItens.push(<Topico 
    titulo={topico.titulo}
    descricao={topico.descricao}
    />)
  }

  const acordeonItens = [];
  for(const acordeon of data.acordeons) {
    acordeonItens.push(<Acordeon 
    pergunta={acordeon.pergunta}
    resposta={acordeon.resposta}
    link={acordeon.link}
    url={acordeon.url}
    titulo={acordeon.titulo}
    link2={acordeon.link2}
    />)
  }

  return (
    <>
      <Barra pesquisa="React" />
      <Resultado
        link="https://pt-br.reactjs.org/"
        url="https://pt-br.reactjs.org"
        titulo="React - Uma biblioteca JavaScript para criar interfaces de ..."
        descricao="React · Declarativo. React faz com que a criação de UIs interativas seja uma tarefa fácil. ·  Baseado em componentes. Crie componentes encapsulados que gerenciam ..."
      />
      <div className="topicos">
        {topicosItens}
      </div>
      <div className="div-acordeon">
        <h3 className="h3-acordeon">As pessoas também perguntam</h3>
        {acordeonItens}
      </div>
      {resultadoItens}
    </>
  );
}