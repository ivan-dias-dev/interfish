import Style from './index.module.css';

function Impulsione() {
    return (
        <div className={Style.main}>
            <div className={Style.menu}>
                <div className={Style.secaoPai}>
                    <h1 className={Style.title}>Pronto Para Começar?</h1>
                    <form className={Style.form}>
                        <div className={Style.formGroup}>
                            <label htmlFor="name">Nome</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Digite seu nome completo"
                                required
                            />
                        </div>
                        <div className={Style.formGroup}>
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Digite seu e-mail"
                                required
                            />
                        </div>
                        <div className={Style.formGroup}>
                            <label htmlFor="phone">Telefone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="(xx) xxxxx-xxxx"
                            />
                        </div>
                        <button type="submit" className={Style.btnSubmit}>
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Impulsione;
