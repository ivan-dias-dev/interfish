import Style from "./index.module.css";

function Servicos() {
    return (
        <div className={Style.main}>
            <div className={Style.menu}>
                <div className={Style.secaoPai}>
                    <h1 className={Style.title}>Nossos Serviços</h1>
                    <ul className={Style.serviceList}>
                        <li className={Style.serviceItem}>
                            <img src="../../../public/1.svg" alt="Balança representando consultoria jurídica" />
                            <div>
                                <h2>Consultoria Jurídica</h2>
                            </div>
                        </li>
                        <li className={Style.serviceItem}>
                            <img src="../../../public/2.svg" alt="Tribunal representando defesa judicial" />
                            <div>
                                <h2>Defesa Judicial</h2>
                            </div>
                        </li>
                        <li className={Style.serviceItem}>
                            <img src="../../../public/3.svg" alt="Contrato representando elaboração de contratos" />
                            <div>
                                <h2>Elaboração de Contratos</h2>
                            </div>
                        </li>
                        <li className={Style.serviceItem}>
                            <img src="../../../public/4.svg" alt="Mediação representando resolução de conflitos" />
                            <img src="../../../public/4.svg" alt="Mediação representando resolução de conflitos" />
                            <img src="../../../public/4.svg" alt="Mediação representando resolução de conflitos" />
                            <div>
                                <h2>Mediação e Arbitragem</h2>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Servicos;
