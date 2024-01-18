import { FaTrashAlt, AiFillHeart, AiOutlineHeart } from "react-icons/fa";
import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo, corDeFundo, aoDeletar, aoFavoritar}) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='colaborador'>
            <FaTrashAlt 
                size={25} 
                className='deletar' 
                onClick={() =>aoDeletar()} 
            />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className="favoritar">
                {aoFavoritar.colaborador
                    ? <AiFillHeart onClick={aoFavoritar} />
                    : <AiOutlineHeart onClick={aoFavoritar} />
                } 
                </div>
            </div>
        </div>
    )
}
export default Colaborador