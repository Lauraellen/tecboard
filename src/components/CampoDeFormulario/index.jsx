import './campo-formulario.css'

export function CampoDeFormulario({ children }) {
    return (
        <fieldset className='campo-formulario'>
            {children}
        </fieldset>
    )
}
