import Style from './index.module.css';

function Footer() {
    return (
        <>
            <div className={Style.main}>

                <div className={Style.menu}>

                    <div className={Style.contato}>
                        <h2>Contato:</h2>
                        <p>CNPJ:</p>
                        <p> 27.885.850/0001-70 <br /> ROSIANE APARECIDA MARTINEZ - SOCIEDADE INDIVIDUAL DE ADVOCACIA </p>
                        <p>E-mail:</p>
                        <p> contato@rosianeamadvocacia.com </p>
                    </div>
                    <div>
                        <h2>Endereço:</h2>
                        <p>Avenida Visconde de Guarapuava, 4241 - APT 32 Andar 03</p>
                        <p>Centro</p>
                        <p>Curitiba / PR</p>
                        <p>80250-220</p>
                    </div>
                </div>

            </div>
            <div className={Style.author}>
                development by <a href="https://ivan-dias-dev.github.io/Portifolio_DIO/">Ivan dias</a>
            </div>
        </>
    );
}

export default Footer;
