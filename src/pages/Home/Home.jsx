import "./style.css"

function Home() {
    return (
        <>
            <div id="mae">
                <header>
                    <div className="header">
                        <h1>Linktree</h1>
                        <nav>
                            <ul>
                                <li>Sobre Nós</li>
                                <li>Dúvidas</li>
                                <li>Contatos</li>
                            </ul>
                        </nav>
                        <div id="buttons">
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
                                <input type="text" name="username" id="username" />
                                <button>Pegue seu Linktree</button>
                            </div>
                        </div>
                        <div id="imgHome">
                            <img src="src\assets\home.png" alt="" />
                        </div>
                    </div>
                    <div className="questions">
                        <h2>Dúvidas Frequentes</h2>
                        <ul>
                            <li>Accordion</li>
                            <li>Accordion</li>
                            <li>Accordion</li>
                            <li>Accordion</li>
                            <li>Accordion</li>
                            <li>Accordion</li>
                        </ul>
                    </div>
                </main>

                <footer>
                    <div>
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
            </div>
        </>
    );
}

export default Home;