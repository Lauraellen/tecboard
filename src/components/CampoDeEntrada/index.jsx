import './campo-entrada.css'

export function CampoDeEntrada({ props }) {
    return (
        <input className='campo-entrada' {...props} placeholder='summer dev hits' />
    )
}