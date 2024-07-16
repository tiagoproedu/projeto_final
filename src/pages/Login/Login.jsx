import Logo from "../../components/Logo/Logo";
import "./style.css"
function Login() {
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
                            <form method="post" action="/admin">
                                <input type="text" placeholder="Username" name="email" id="username" />
                                <input type="password" placeholder="Senha" name="password" id="password" />
                                <button type="submit">Log in</button>
                            </form>
                            <a href="">Log in com o número de celular</a>
                            <div className="esqueceu">
                                <a href="" className="senha">Esqueceu a senha?</a>
                                <a href="" className="usuario">Esqueceu o usuario?</a>
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