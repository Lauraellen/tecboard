import './App.css'

// No React, componentes são funções que retornam trechos de código HTML (JSX)
// JSX = JavaScript + XML (HTML)
// JSX é uma sintaxe que permite escrever HTML dentro do JavaScript

// Toda tag em JSX deve ser fechada
// Exemplo: <img /> , <input /> , <br />

function FormularioDeEvento() {
  return (
    <form className='form-evento'>
      <h2>Preencha para criar um evento:</h2>
      <fieldset>

        <label htmlFor="nome">Qual o nome do evento?</label>
        <input type="text" id="nome" />

      </fieldset>
    </form>
  )
}

function App() {

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>

      <section>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEvento />
    </main>
  )
}

export default App
