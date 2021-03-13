import Header from '../../components/header';

import illustration from '../../assets/illustration.png'

export default function Cadastro() {
    return (
        <div className="container-fluid h-100 bg-primary">
            <div className="col-12">
                <Header whiteVersion hideCart/>
            </div>
            <div className="row">
                <div className="col-6 text-right my-auto">
                    <img src={illustration} className="img-fluid" alt="logomarca" />
                </div>
                <div className="col-6">
                    <div className="box col-8">
                        <h2 className="text-center">Falta pouco para fazer o seu pet feliz.</h2>
                        <br/>
                        <br/>
                        <input
                            type="text"
                            className="form-control form-control-lg mb-3"
                            placeholder="Nome Completo"
                        />
                        <input
                            type="email"
                            className="form-control form-control-lg mb-3"
                            placeholder="E-Mail"
                        />
                        <input
                            type="text"
                            className="form-control form-control-lg mb-3"
                            placeholder="Telefone"
                        />
                        <input
                            type="text"
                            className="form-control form-control-lg mb-3"
                            placeholder="CPF"
                        />
                        <input
                            type="date"
                            className="form-control form-control-lg mb-3"
                            placeholder="Data de Nascimento"
                        />
                        <button className="btn btn-lg btn-block btn-secondary">Finalizar Pedido</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
