import Style from "./index.module.css";

function Footer() {
  return (
    <>
      <div className={Style.main}>
        <div className={Style.menu}>
          <div className={Style.contato}>
            <h2>Contato:</h2>
            <p>CNPJ:</p>
            <p>
              {" "}
              442.077.450.001-00 <br /> Peixaria Interfish LTDA{" "}
            </p>
            <p>E-mail:</p>
            <p> mangakaivan@gmail.com </p>
          </div>
          <div>
            <h2>Endereço:</h2>
            <p>R. das Carmelitas, 3465</p>
            <p>Boqueirão</p>
            <p>Curitiba / PR</p>
            <p>81730-050</p>
          </div>
        </div>
      </div>
      <div className={Style.author}>
        development by{" "}
        <a href="https://ivan-dias-dev.github.io/Portifolio_DIO/">Ivan dias</a>
      </div>
    </>
  );
}

export default Footer;
