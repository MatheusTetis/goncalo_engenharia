const BarraDeNavegacao = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-body-tertiary fixed-top" data-bs-theme="light" style={{width: "100vw"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="44" viewBox="0 0 37 37">
                        <g>
                            <title>Gonçalo Engenharia</title>
                            <path id="svg_1" d="m18.5,37.18349c-9.94475,0 -18,-8.30159 -18,-18.55046c0,-10.24887 8.05525,-18.55046 18,-18.55046c9.94475,0 18,8.30159 18,18.55046c0,10.24887 -8.05525,18.55046 -18,18.55046z" opacity="undefined" fill="#1d58a5" />
                            <path id="svg_3" d="m12.53721,1.06866l0.20604,26.37653l-4.77063,0l0.04613,-23.85317c1.50615,-1.18453 3.01231,-2.09433 4.51846,-2.52336z" opacity="undefined" fill="#fff"/>
                            <rect id="svg_4" height="4.58715" width="21" y="23.17889" x="8" fill="#fff"/>
                            <rect id="svg_5" height="13.0275" width="4.77063" y="14.73854" x="24.37155" fill="#fff"/>
                            <rect transform="rotate(120 24.0046 11.9633)" id="svg_6" height="15" width="4.77063" y="4.46333" x="21.61926" fill="#fff"/>
                            <rect transform="rotate(60 13.1789 11.9312)" id="svg_7" height="15" width="4.77063" y="4.4312" x="10.79359" fill="#fff"/>
                        </g>
                    </svg>
                </a>
                <a className="navbar-brand" href="#">Gonçalo Engenharia</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">Página Inicial</a>
                    <a className="nav-link active" href="#contato">Contato</a>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default BarraDeNavegacao;