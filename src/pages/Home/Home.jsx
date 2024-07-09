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
                            <li>Sobre Nós</li>
                            <li>Dúvidas</li>
                            <li>Contatos</li>
                        </ul>
                    </nav>
                    <div className="buttons">
                        <button className="login">Log in</button>
                        <button className="signup">Sign Up</button>
                    </div>
                </div>
            </header>

            <main>
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
                        <img src="src\assets\home.png" alt="" />
                    </div>
                </div>
                <div className="questions">
                    <div className="conteudoQuestions">
                        <h2>Dúvidas Frequentes</h2>
                        <Duvidas />
                    </div>
                </div>
            </main>

            <footer>
                <div className="buttons">
                    <button className="login">Log in</button>
                    <button className="signup">Sign Up</button>
                </div>
                <div className="socialMedias">
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>X</li>
                        <li>TikTok</li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Home;