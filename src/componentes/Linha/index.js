const Linha = (props) => {
    return (
        <div className="row justify-content-between align-items-center">
            {props.children}
        </div>
    )
}

export default Linha;