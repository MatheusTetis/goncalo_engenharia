const Linha = (props) => {
    return (
        <div className="row justify-content-between align-items-center row-cols-sm-1">
            {props.children}
        </div>
    )
}

export default Linha;