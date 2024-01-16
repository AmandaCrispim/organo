import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba'
<<<<<<< HEAD
import { v4 as uuidv4 } from 'uuid';
=======
>>>>>>> e198ff12fc4fd4223dd782552a9f58ff1bca5bb8

const Time = (props) => {

    const aoDeletar = () => {
        console.log("teste");
    };

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={{backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(props.cor, '0.6')}}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.id)} value={props.cor} type='color' className='input-cor' />
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => {
                return <Colaborador 
                    corDeFundo={props.cor}
                    key={colaborador.nome}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                    aoDeletar={aoDeletar}
                />;
                })}
            </div>
        </section>
        : ''
    )
}

export default  Time 