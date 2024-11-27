import Style from './index.module.css';

function Header() {
    return (
        <header className={Style.main}>
            <div className={Style.secaoPai}>
                <h2>Rosiane AM advocacia</h2>
                <nav>
                    <ul className={Style.menu}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Serviços</a></li>
                        <li><a href="#contact">Impulsione</a></li>
                        <li><a href="#about">Sobre</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
