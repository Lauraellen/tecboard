import './App.css'
import { Banner } from './components/Banner'
import { CardEvento } from './components/CardEvento'
import { FormularioDeEvento } from './components/FormularioDeEvento'
import { Tema } from './components/Tema'

// No React, componentes são funções que retornam trechos de código HTML (JSX)
// JSX = JavaScript + XML (HTML)
// JSX é uma sintaxe que permite escrever HTML dentro do JavaScript
function App() {

  const temas = [
    { id: 1, nome: 'front-end' },
    { id: 2, nome: 'back-end' },
    { id: 3, nome: 'devops' },
    { id: 4, nome: 'inteligência artificial' },
    { id: 5, nome: 'data science' },
    { id: 6, nome: 'cloud' },
  ]

  const eventos = [
    { capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png', id: 1, tema: temas[0], data: new Date(), titulo: 'Mulheres no front' },
  ]

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>

      <Banner />

      <FormularioDeEvento temas={temas} />

      {temas.map(function (tema) {
        return (
          <section key={tema.id} className="tema">
            <Tema tema={tema} />
            <CardEvento evento={eventos[0]}></CardEvento>
          </section>
        )
      })}
    </main >
  )
}

export default App
