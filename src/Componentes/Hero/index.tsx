import Style from './index.module.css';

function Hero() {
    return (
        <>
            <div className={Style.hero}>
                <div className={Style.main}>
                    <div className={Style.secaoPai}>
                        <h1>Defendendo Seus Direitos com Excelência</h1>
                        <h2>Especialistas em Direito Civil, Trabalhista e Empresarial. 
                            <br />
                            Conte com nossa experiência para proteger o que é importante.</h2>
                        <div>
                            <button>Agende uma Consulta</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Hero;
