import "./style.css"

function Admin() {
    return (
        <>
            <div id="admin">
                <div id="aside">
                    <div className="linkButtons">
                        <button>Links</button>
                        <button>Aparência</button>
                        <button>Analíticos</button>
                        <button>Configurações</button>
                    </div>
                    <div className="userButton">
                        <div><button>Usuário</button></div>
                    </div>
                </div>

                <div id="main">
                    <div>
                        <button>Adicionar link</button>
                        <div className="cardLink">
                            <div>
                                <h1>titulo</h1>
                                <a href="">link</a>
                                <div>
                                    <p>compartilhar</p>
                                    <p>button on/off</p>
                                </div>
                            </div>
                            <div>
                                <div className="icones">

                                </div>
                                <div className="lixeira">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="viewer">

                </div>
            </div>
        </>
    );
}

export default Admin;