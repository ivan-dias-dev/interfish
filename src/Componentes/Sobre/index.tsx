import Style from "./index.module.css";

function Sobre() {
  return (
    <div className={Style.main}>
      <div className={Style.menu}>
        <div className={Style.secaoPai}>
          <h1 className={Style.title}>Sobre Nós</h1>
          <p className={Style.aboutText}>
            Sob nova gestão, a <strong>Peixaria Interfish</strong>, localizada
            no coração do Boqueirão em Curitiba, renova seu compromisso com
            frescor, qualidade e excelência no atendimento. Nossa missão é
            trazer peixes e frutos do mar selecionados diretamente para sua
            mesa, garantindo o melhor sabor e uma experiência única.
          </p>
          <p className={Style.aboutText}>
            Estamos prontos para atender você com novidades, ofertas especiais e
            um serviço ainda mais dedicado.
          </p>
          <p className={Style.aboutHighlight}>
            Venha conhecer a nova Peixaria Interfish e descubra o frescor que
            faz a diferença!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
