import "./style.css";

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
            <button>Usuário</button>
          </div>
        </div>

        <div id="main">
          <div className="linksMain">
            <button>+ Adicionar link</button>
            <div className="cardLink">
              <div className="cardLinkUp">
                <div>
                  <p>titulo</p>
                  <a href="">link</a>
                </div>
                <div className="cardShare">
                  <p>compartilhar</p>
                  <p>button on/off</p>
                </div>
              </div>
              <div className="cardLinkDown">
                <div className="icones">
                  <p>icones</p>
                </div>
                <div className="lixeira">
                  <p>lixeira</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="viewer"></div>
      </div>
    </>
  );
}

export default Admin;
