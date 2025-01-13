import Style from "./index.module.css";

function Servicos() {
  return (
    <div className={Style.main} id="produtos">
      <div className={Style.menu}>
        <div className={Style.secaoPai}>
          <h1 className={Style.title}>Produtos</h1>
          <ul className={Style.itemList}>
            <li className={Style.item}>
              <strong>Filé de Tilápia</strong>
              <img
                className={Style.imgItem}
                src="../../../public/tilapia.jpg"
                alt="Balança representando consultoria jurídica"
              />
              <strong>39,90</strong>
            </li>
            <li className={Style.item}>
              <strong>Filé de Tilápia</strong>
              <img
                className={Style.imgItem}
                src="../../../public/tilapia.jpg"
                alt="Balança representando consultoria jurídica"
              />
              <strong>R$39,90</strong>
            </li>
            <li className={Style.item}>
              <strong>Filé de Tilápia</strong>
              <img
                className={Style.imgItem}
                src="../../../public/tilapia.jpg"
                alt="Balança representando consultoria jurídica"
              />
              <strong>R$39,90</strong>
            </li>
            <li className={Style.item}>
              <strong>Filé de Tilápia</strong>
              <img
                className={Style.imgItem}
                src="../../../public/tilapia.jpg"
                alt="Balança representando consultoria jurídica"
              />
              <strong>R$39,90</strong>
            </li>
            <li className={Style.item}>
              <strong>Filé de Tilápia</strong>
              <img
                className={Style.imgItem}
                src="../../../public/tilapia.jpg"
                alt="Balança representando consultoria jurídica"
              />
              <strong>R$39,90</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Servicos;
