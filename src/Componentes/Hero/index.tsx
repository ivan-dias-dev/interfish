import Style from "./index.module.css";

function Hero() {
  return (
    <>
      <div className={Style.hero} id="home">
        <div className={Style.main}>
          <div className={Style.secaoPai}>
            <h1>Os melhores pescados para Curitiba e região!</h1>
            <h2>Qualidade, sabor e excelência em cada entrega.</h2>
            <div>
              <button>Faça seu pedido agora</button>
            </div>
          </div>
          <div>
            <img
              className={Style.img}
              src="./public/camarao3.png"
              alt="Balança representando consultoria jurídica"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
