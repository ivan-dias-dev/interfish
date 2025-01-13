import Style from "./index.module.css";

function Header() {
  return (
    <header className={Style.main}>
      <div className={Style.secaoPai}>
        <h2>Peixaria Interfish</h2>
        <nav>
          <ul className={Style.menu}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#produtos">Produtos</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
