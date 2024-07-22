import { useRef } from "react";

import Logo from "../../components/Logo/Logo";
import "./style.css";

const tcpip = "http://localhost:8080";

function Login() {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  async function handleSubmit(event) {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await fetch(`${tcpip}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      console.log(response);
      // TODO armazenar token
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
              <h1>Bem-vindo!</h1>
              <p>Faça login no seu linktree!</p>
            </div>
            <div id="infoLogin">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="email"
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
                <button type="submit">Log in</button>
              </form>
              <a href="">Log in com o número de celular</a>
              <div className="esqueceu">
                <a href="" className="senha">
                  Esqueceu a senha?
                </a>
                <a href="" className="usuario">
                  Esqueceu o usuario?
                </a>
              </div>
              <div className="semConta">
                <a href="/cadastro">Ainda não tem uma conta?</a>
              </div>
            </div>
          </div>
        </div>
        <div id="imgLogin">
          <img src="src\assets\login.png" alt="login" />
        </div>
      </div>
    </>
  );
}

export default Login;
