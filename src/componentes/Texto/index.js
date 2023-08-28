import './Texto.css';

const Texto = (props) => {
    return (
        <div className={`texto-personalizado ${props.nomeDaClasse}`}>
            <p>{props.children}</p>
        </div>
        
    )
}

export default Texto;