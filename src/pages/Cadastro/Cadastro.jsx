import { useRef } from "react";

import Logo from "../../components/Logo/Logo";

import "./style.css";

const tcpip = "localhost:8080";

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
    } catch (error) {
      alert("Alguma coisa deu errado");
    }
  }

  return (
    <div className="screen">
      <div className="half-screen--form">
        <nav className="logo">
          <Logo />
        </nav>

        <div className="info-section">
          <div className="message">
            <h1>Se junte ao Linktree</h1>
            <p>Faça seu cadastro no linktree!</p>
          </div>

          <div className="signup-form">
            <form method="post" onSubmit={handleSubmit}>
              <input type="text" placeholder="Username" name="username" id="username" ref={usernameRef} />
              <input type="text" placeholder="email" name="email" id="email" ref={emailRef} />
              <input type="password" placeholder="Senha" name="password" id="password" ref={passwordRef} />

              <button type="submit">Cadastrar-se</button>
            </form>
          </div>
        </div>
      </div>

      <div className="half-screen--image">
        <img src="src/assets/cadastro.png" alt="login" />
      </div>
    </div>
  );
}

export default Cadastro;
