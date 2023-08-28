import './Lista.css';

const Lista = (props) => {
    return (
        <div className={`lista-personalizada ${props.nomeDaClasse}`}>
            <ul>
                {props.lista.map(servico => <li key={servico}>{servico}</li>)}
            </ul>
        </div>
    )
}

export default Lista;