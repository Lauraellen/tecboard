import './estilo-formulario.css'

//props é um objeto que contém as propriedades passadas para o componente
// props são passadas como atributos do componente
// Exemplo: <TituloFormulario texto="Meu título" />

export function TituloFormulario({ children }) {
    return (
        <h2 className='titulo-formulario'>
            {children}
        </h2>
    )
}