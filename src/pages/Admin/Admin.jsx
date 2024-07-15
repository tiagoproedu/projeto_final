import "./style.css"

function Admin() {
    return (
        <>
            <div id="aside">
                <div><button>Links</button></div>
                <div><button>Aparência</button></div>
                <div><button>Analíticos</button></div>
                <div><button>Configurações</button></div>
                <div><button>Usuário</button></div>
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
        </>
    );
}

export default Admin;