
// Toda tag em JSX deve ser fechada
// Exemplo: <img /> , <input /> , <br />
import { TituloFormulario } from '../TtituloFormulario'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { CampoDeEntrada } from '../CampoDeEntrada'
import { Label } from '../Label'
import { Botao } from '../Botao'
import './formulario-de-evento.css'

export function FormularioDeEvento() {
    return (
        <form className='form-evento'>
            <TituloFormulario>
                Preencha para criar um evento:
            </TituloFormulario>

            <div className='campos'>
                <CampoDeFormulario>
                    <Label htmlFor="nome"> Qual o nome do evento?</Label>
                    <CampoDeEntrada
                        type="text"
                        id="nome"
                        name="nomeEvento"
                        placeholder="Summer dev hits"
                    />
                </CampoDeFormulario>

                <CampoDeFormulario>
                    <Label htmlFor="dataEvento"> Data do evento</Label>
                    <CampoDeEntrada
                        type="date"
                        id="dataEvento"
                        name="dataEvento"
                        placeholder="XX/XX/XXXX"
                    />
                </CampoDeFormulario>
            </div>

            <div className='acoes'>
                <Botao>
                    Criar evento
                </Botao>
            </div>
        </form>
    )
}