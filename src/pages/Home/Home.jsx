import Duvidas from "../../components/Duvidas";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

function Home() {
    return (
        <>
            <header>
                <div className="header">
                    <div className="logo">
                        <h1>Linktree</h1>
                        <img src="src/assets/linktree.svg" alt="icon" />
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#sobrenos">Sobre Nós</a></li>
                            <li><a href="#duvidas">Dúvidas</a></li>
                            <li><a href="#contatos">Contatos</a></li>
                        </ul>
                    </nav>
                    <div className="buttons">
                        <button className="login">Log in</button>
                        <button className="signup">Sign Up</button>
                    </div>
                </div>
            </header>

            <main>
                <section id="sobrenos">
                    <div className="principal">
                        <div className="conteudoHome">
                            <div>
                                <h1>Tudo que você é. Em um simples link na bio.</h1>
                                <p>Use o linktree no seu instagram, facebook, X, tiktok e muito mais.</p>
                            </div>
                            <div className="miniForm">
                                <input type="text" placeholder="username" name="username" id="username" />
                                <button>Pegue seu Linktree</button>
                            </div>
                        </div>
                        <div id="imgHome">
                            <img src="src\assets\home.png" alt="imgHome" />
                        </div>
                    </div>
                </section>
                <section id="duvidas">
                    <div className="questions">
                        <div className="conteudoQuestions">
                            <h2>Dúvidas Frequentes</h2>
                            <Duvidas />
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div className="buttons">
                    <button className="login">Log in</button>
                    <button className="signup">Sign Up</button>
                </div>
                <section id="contatos">
                    <div className="socialMedias">
                        <ul>
                            <li><a href="https://www.instagram.com/linktr.ee/">Instagram</a></li>
                            <li><a href="https://www.facebook.com/LinktreeBrasil">Facebook</a></li>
                            <li><a href="https://x.com/linktreebrasil">X</a></li>
                            <li><a href="https://tiktok.com/@linktr.ee">Tiktok</a></li>
                        </ul>
                    </div>
                </section>
            </footer>
        </>
    );
}

export default Home;