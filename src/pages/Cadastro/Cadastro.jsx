import Logo from "../../components/Logo/Logo";
function Cadastro() {
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
                            <form method="post" action="/admin">
                                <input type="text" placeholder="Username" name="email" id="username" />
                                <input type="password" placeholder="Senha" name="password" id="password" />
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