import Style from "./index.module.css";

function Servicos() {
  return (
    <div className={Style.main} id="produtos">
      <div className={Style.menu}>
        <div className={Style.secaoPai}>
          <h1 className={Style.title}>Produtos</h1>
          <ul className={Style.itemList}>
            <li className={Style.item}>
              <img
                className={Style.imgItem}
                src="../../../public/tilapia.jpg"
                alt="Filé de tilápia"
              />
              <div className={Style.p}>
                <strong>Filé de Tilápia</strong>
                <p>
                  Leve, macio e fresco, perfeito para grelhar, assar ou fritar.
                  Uma escolha prática e saudável para suas refeições.
                </p>
              </div>
            </li>
            <li className={Style.item}>
              <img
                className={Style.imgItem}
                src="../../../public/tilapia.jpg"
                alt="Filé de tilápia"
              />
              <div className={Style.p}>
                <strong>Filé de Tilápia</strong>
                <p>
                  Leve, macio e fresco, perfeito para grelhar, assar ou fritar.
                  Uma escolha prática e saudável para suas refeições.
                </p>
              </div>
            </li>
            <li className={Style.item}>
              <img
                className={Style.imgItem}
                src="../../../public/tilapia.jpg"
                alt="Filé de tilápia"
              />
              <div className={Style.p}>
                <strong>Filé de Tilápia</strong>
                <p>
                  Leve, macio e fresco, perfeito para grelhar, assar ou fritar.
                  Uma escolha prática e saudável para suas refeições.
                </p>
              </div>
            </li>
            <li className={Style.item}>
              <img
                className={Style.imgItem}
                src="../../../public/tilapia.jpg"
                alt="Filé de tilápia"
              />
              <div className={Style.p}>
                <strong>Filé de Tilápia</strong>
                <p>
                  Leve, macio e fresco, perfeito para grelhar, assar ou fritar.
                  Uma escolha prática e saudável para suas refeições.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Servicos;
