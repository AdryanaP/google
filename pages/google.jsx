import Resultado from "../components/Resultado";
import Barra from "../components/BarraResultado";
import Topico from "../components/Topico";
import Acordeon from "../components/Acordeon";

export default function exibir() {
    return (
        <>
            <Barra
                pesquisa = "React"
            />
            <Resultado
                link = "https://pt-br.reactjs.org/"
                url = "https://pt-br.reactjs.org"
                titulo = "React - Uma biblioteca JavaScript para criar interfaces de ..."
                descricao = "React · Declarativo. React faz com que a criação de UIs interativas seja uma tarefa fácil. ·  Baseado em componentes. Crie componentes encapsulados que gerenciam ..."
            />
            <div className="topicos">
                <Topico
                    propriedade = "Tutorial: Introdução ao React"
                    descricaoTopico = "O que é React? ... O React é uma biblioteca JavaScript ..."
                />
                <Topico
                    propriedade = "Crie um novo React App"
                    descricaoTopico = "Use uma toolchain integrada para uma melhor experiência de ..."
                />
                <Topico
                    propriedade = "Introdução"
                    descricaoTopico = "Crie um novo React App - Hello World - Introdução aos Hooks"
                />
                 <Topico
                    propriedade = "Hello World"
                    descricaoTopico = "Isso mostra um header dizendo “Hello, world!” na página. Try it ..."
                />
            </div>
            <Acordeon 
                pergunta = "O que significa a palavra React?"
                resposta = "O React é uma biblioteca de código aberto para interfaces gráficas (GUI) que tem como foco uma só coisa: tornar a experiência do usuário com a interface mais eficiente. Ela pode ser categorizada como o “V” no padrão MVC (Model-View-Controller).15 de jul. de 2021"
                link = "https://www.digitalhouse.com/br/blog/o-que-e-react-no-javascript-e-para-que-serve"
                url = "https://www.digitalhouse.com" 
                titulo = "Conceitos básicos do React no Javascript: o que é e para que serve"
                link2 = "https://bit.ly/3DsaoZa"
            />
            <Resultado 
                link = "https://mzl.la/2Y035b8"
                url = "https://developer.mozilla.org"
                titulo = "Começando com React - Aprendendo desenvolvimento web"
                descricao = "Olá, React ... Segundo seu slogan oficial, React é uma biblioteca para construção de interfaces de usuário. React não é um framework – nem mesmo é exclusivo para ..."
            />
            <Resultado 
                link = "https://github.com/facebook/react"
                url = "https://github.com"
                titulo = "facebook/react: A declarative, efficient, and flexible ... - GitHub"
                descricao = "React is a JavaScript library for building user interfaces. Declarative: React makes it painless to create interactive UIs. Design simple views for each state ..."
            />
            <Resultado 
                link = "https://pt.wikipedia.org/wiki/React_(JavaScript)"
                url = "https://pt.wikipedia.org"
                titulo = "React (JavaScript) – Wikipédia, a enciclopédia livre"
                descricao = "O React (também denominado React.js ou ReactJS) é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário (frontend) em páginas ..."
            />
            <Resultado 
                link = "https://www.hostinger.com.br/tutoriais/o-que-e-react-javascript"
                url = "https://www.hostinger.com.br"
                titulo = "O Que é React e Como Funciona? - Guia para Iniciantes"
                descricao = "15 de jul. de 2021 — O React é uma biblioteca de código aberto para interfaces gráficas (GUI) que tem como foco uma só coisa: tornar a experiência do usuário com a ..."
            />
        </>
    )
}
