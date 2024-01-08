import './rodape.css'

const Rodape = () => {
    return (
    <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://github.com/AmandaCrispim" target="_blank"></a>
                    <img src="/imagens/github.png" alt="Github de Amanda Crispim" />
                </li>
            </ul>
        </section>
        <section>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/amanda-crispim/" target="_blank"></a>
                    <img src="/imagens/linkedin.png" alt="LinkedIn de Amanda Crispim" />
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="Logo de Organo" />
        </section>
        <section>
            <p>
                Desenvolvido por Amanda Crispim.
            </p>
        </section>
    </footer>)
}

export default Rodape