import './App.css'
import { useState } from 'react'
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

  // useState é um Hook do React que permite adicionar estado a componentes funcionais
  // useState retorna um array com dois elementos: o estado atual e uma função para atualizá-lo
  const [eventos, setEventos] = useState([
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      id: 1,
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no front'
    },

  ])

  function adicionarEvento(evento) {
    eventos.push(evento)
    setEventos([...eventos, evento]) // Atualiza o estado com o novo evento
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>

      <Banner />

      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />

      <section className='container'>
        {temas.map(function (tema) {
          if (!eventos.some(function (evento) {
            return evento.tema.id === tema.id
          })) {
            return null
          }
          return (
            <section key={tema.id} className="tema">
              <Tema tema={tema} />
              <div className='eventos'>
                {eventos
                  .filter(function (evento) {
                    return evento.tema.id === tema.id
                  })
                  .map(function (item, index) {

                    return <CardEvento evento={item} key={index} />

                  })}
              </div>
            </section>
          )
        })}
      </section>


    </main >
  )
}

export default App
