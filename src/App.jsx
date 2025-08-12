import './App.css'
import { FormularioDeEvento } from './components/FormularioDeEvento'

// No React, componentes são funções que retornam trechos de código HTML (JSX)
// JSX = JavaScript + XML (HTML)
// JSX é uma sintaxe que permite escrever HTML dentro do JavaScript
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
