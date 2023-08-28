import './Imagem.css';

const Imagem = (props) => {
    return (
        <div className='imagem-personalizada'>
            <img src={props.enderecoImagem}/>
        </div>
    )
}

export default Imagem;