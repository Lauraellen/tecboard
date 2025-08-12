
// Toda tag em JSX deve ser fechada
// Exemplo: <img /> , <input /> , <br />
import { TituloFormulario } from '../TtituloFormulario'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { CampoDeEntrada } from '../CampoDeEntrada'
import { Label } from '../Label'
import './formulario-de-evento.css'

export function FormularioDeEvento() {
    return (
        <form className='form-evento'>
            <TituloFormulario>
                Preencha para criar um evento:
            </TituloFormulario>

            <CampoDeFormulario>
                <Label htmlFor="nome"> Qual o nome do evento?</Label>
                <CampoDeEntrada
                    type="text"
                    id="nome"
                    name="nomeEvento"
                    placeholder="Summer dev hits"
                />
            </CampoDeFormulario>

        </form>
    )
}