import Style from './index.module.css';

function Sobre() {
    return (
        <div className={Style.main}>
            <div className={Style.menu}>
                <div className={Style.secaoPai}>
                    <h1 className={Style.title}>Sobre Nós</h1>
                    <p className={Style.aboutText}>
                        No <strong>Escritório Rosiane AM advocacia</strong>, nossa missão é defender seus direitos com ética, excelência e comprometimento. 
                        Somos especialistas em fornecer soluções jurídicas personalizadas que atendam às necessidades únicas de cada cliente.
                    </p>
                    <p className={Style.aboutText}>
                        Com mais de 10 anos de experiência, oferecemos suporte em áreas como Direito Civil, Trabalhista, Empresarial e Mediação, 
                        combinando conhecimento técnico com um atendimento humanizado.
                    </p>
                    <p className={Style.aboutHighlight}>
                        Confie em nossa equipe para proteger o que realmente importa. Juntos, construiremos um futuro mais justo e seguro.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Sobre;
