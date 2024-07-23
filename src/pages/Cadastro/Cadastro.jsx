import { useRef } from "react";

import Logo from "../../components/Logo/Logo";

const tcpip = "http://localhost:8080";

function Cadastro() {
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  async function handleSubmit(event) {
    event.preventDefault();

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await fetch(`${tcpip}/api/v1/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Alguma coisa deu errado");
    }
  }
  return (
    <>
      <div className="telaLogin">
        <div className="metadeForm">
          <nav id="logo">
            <Logo />
          </nav>
          <div className="infos">
            <div className="mensagem">
              <h1>Se junte ao Linktree</h1>
              <p>Faça seu cadastro no linktree!</p>
            </div>
            <div id="infoLogin">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  id="username"
                  ref={usernameRef}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  ref={emailRef}
                />
                <input
                  type="password"
                  placeholder="Senha"
                  name="password"
                  id="password"
                  ref={passwordRef}
                />
                <button type="submit">Cadastrar-se</button>
              </form>
            </div>
          </div>
        </div>
        <div id="imgLogin">
          <img src="src\assets\cadastro.png" alt="login" />
        </div>
      </div>
    </>
  );
}

export default Cadastro;
