import Style from "./index.module.css";

function Sobre() {
  return (
    <div className={Style.main}>
      <div className={Style.menu}>
        <div className={Style.secaoPai}>
          <div className={Style.contato}>
            <h2>Para recalamações:</h2>
            <p>CNPJ: 442.077.450.001-00 Peixaria Interfish LTDA</p>
            <p>E-mail: mangakaivan@gmail.com </p>
            <a href="wa.me/41984204961" type="button">
              <strong>WhatsApp:</strong> 41 98420-4961
            </a>
          </div>
          <div>
            <h2>Endereço:</h2>
            <p> R. das Carmelitas, 3465 - Boqueirão Curitiba / PR</p>
            <p>81730-050</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
