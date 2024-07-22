import { useRef } from "react";

import "./style.css";

const tcpip = "http://localhost:8080";

function Admin() {
  const titleRef = useRef("");
  const urlRef = useRef("");
  const publicRef = useRef("");

  async function handleSubmitPost(event) {
    event.preventDefault();

    const title = titleRef.current.value;
    const url = urlRef.current.value;
    const publicBoolean = publicRef.current.value;

    try {
      const response = await fetch(`${tcpip}/api/v1/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // token
        },
        body: JSON.stringify({
          title: title,
          url: url,
          public: publicBoolean,
        }),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Alguma coisa deu errado");
    }
  }

  async function handleSubmitPut(event) {
    event.preventDefault();

    const title = titleRef.current.value;
    const url = urlRef.current.value;
    const publicBoolean = publicRef.current.value;

    try {
      const response = await fetch(`${tcpip}/api/v1/users`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // token
        },
        body: JSON.stringify({
          title: title,
          url: url,
          public: publicBoolean,
        }),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Alguma coisa deu errado");
    }
  }

  // TODO form para link
  // TODO fetch para os links já criados
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
