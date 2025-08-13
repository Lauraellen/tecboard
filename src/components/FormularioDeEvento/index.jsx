
// Toda tag em JSX deve ser fechada
// Exemplo: <img /> , <input /> , <br />
import { TituloFormulario } from '../TtituloFormulario'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { CampoDeEntrada } from '../CampoDeEntrada'
import { Label } from '../Label'
import { Botao } from '../Botao'
import { ListaSuspensa } from '../ListaSuspensa'
import './formulario-de-evento.css'

export function FormularioDeEvento({ temas }) {
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
                    <Label htmlFor="capa">
                        Qual a endereço da imagem de capa?
                    </Label>
                    <CampoDeEntrada
                        type="text"
                        id='capa'
                        placeholder='http://...'
                        name='capa'
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

                <CampoDeFormulario>
                    <Label htmlFor="temaEvento"> Tema do evento</Label>
                    <ListaSuspensa id="tema" name="tema" itens={temas}>
                    </ListaSuspensa>
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