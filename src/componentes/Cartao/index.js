import './Cartao.css';

const Cartao = (props) => {
    return (
        <div className="card mb-3 cartao" style={{width: "100%"}}>
            <img src={props.imagem} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Engenheiro Keyni Oliveira</h5>
                <p className="card-text">CREA 5062975290</p>
                <p className="card-text">Ligue para (11) 95495-1051 ou</p>
                <a href="https://wa.me/11954951051?text=Olá%20Keyni!%20Tudo%20bem?" className="btn btn-primary btn-success">Envie uma mensagem</a>
            </div>
        </div>
    )
}

export default Cartao;