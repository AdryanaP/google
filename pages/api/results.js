const data = {
  resultados: [
    {
      link: "https://mzl.la/2Y035b8",
      url: "https://developer.mozilla.org",
      titulo: "Começando com React - Aprendendo desenvolvimento web",
      descricao:
        "Olá, React ... Segundo seu slogan oficial, React é uma biblioteca para construção de interfaces de usuário. React não é um framework – nem mesmo é exclusivo para ...",
    },
    {
      link: "https://github.com/facebook/react",
      url: "https://github.com",
      titulo:
        "facebook/react: A declarative, efficient, and flexible ... - GitHub",
      descricao:
        "React is a JavaScript library for building user interfaces. Declarative: React makes it painless to create interactive UIs. Design simple views for each state ...",
    },
    {
      link: "https://pt.wikipedia.org/wiki/React_(JavaScript)",
      url: "https://pt.wikipedia.org",
      titulo: "React (JavaScript) – Wikipédia, a enciclopédia livre",
      descricao:
        "O React (também denominado React.js ou ReactJS) é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário (frontend) em páginas ...",
    },
    {
      link: "https://www.hostinger.com.br/tutoriais/o-que-e-react-javascript",
      url: "https://www.hostinger.com.br",
      titulo: "O Que é React e Como Funciona? - Guia para Iniciantes",
      descricao:
        "15 de jul. de 2021 — O React é uma biblioteca de código aberto para interfaces gráficas (GUI) que tem como foco uma só coisa: tornar a experiência do usuário com a ...",
    },
  ],
  topicos: [
    {
      titulo: "Tutorial: Introdução ao React",
      descricao: "O que é React? ... O React é uma biblioteca JavaScript ...",
    },
    {
      titulo: "Crie um novo React App",
      descricao:
        "Use uma toolchain integrada para uma melhor experiência de ...",
    },
    {
      titulo: "Introdução",
      descricao: "Crie um novo React App - Hello World - Introdução aos Hooks",
    },
    {
      titulo: "Hello World",
      descricao:
        "Isso mostra um header dizendo “Hello, world!” na página. Try it ...",
    },
  ],
  acordeons: [
    {
      pergunta: "O que significa a palavra React?",
      resposta:
        "O React é uma biblioteca de código aberto para interfaces gráficas (GUI) que tem como foco uma só coisa: tornar a experiência do usuário com a interface mais eficiente. Ela pode ser categorizada como o “V” no padrão MVC (Model-View-Controller). 15 de jul. de 2021",
      link: "https://www.hostinger.com.br/tutoriais/o-que-e-react-javascript",
      url: "https://www.hostinger.com",
      titulo: "O Que é o React e Como Funciona? - Guia para Iniciantes",
      link2: "https://bityli.com/lUzSE",
    },
    {
      pergunta: "Quais os tipos de React",
      resposta:
        "Dito isso, os componentes React podem ser divididos em duas categorias: Presentational e Container. Outra nomenclatura usada na comunidade para esses dois é: Stateless (sem estado) e Stateful (com estado). 18 de jul. de 2017",
      link: "https://tableless.com.br/guia-completo-react-ecossistema/",
      url: "https://tableless.com.br",
      titulo: "O Guia Completo do React e o seu Ecossistema - Tableless",
      link2: "https://bityli.com/BZOHr",
    },
    {
      pergunta: "Para que serve o React",
      resposta:
        "React. js é, portanto, uma biblioteca de JavaScript, open source, utilizada para construir user interfaces, nomeadas para aplicações de página única. ... Assim, possibilita aos desenvolvedores criarem aplicações web, tendo a facilidade de alterar elementos ou os dados exibidos, sem recarregar a página. 2 de jul. de 2020",
      link: "https://www.digitalhouse.com/br/blog/o-que-e-react-no-javascript-e-para-que-serve",
      url: "https://www.digitalhouse.com",
      titulo:
        "Conceitos básicos do React no Javascript: o que é e para que serve",
      link2: "https://bityli.com/cZ0uF",
    },
  ],
};

export default function handler(req, res) {
  res.status(200).json(data)
}
