import Header from '../../components/header';
import Product from '../../components/products/list';

import './styles.css';

export default function Checkout() {
    return (
        <div className="h-100">
            <Header hideCart />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-6">
                        <span className="section-title">Dados de Entrega</span>
                        <div className="row mb-3">
                            <div className="col-12">
                                <input
                                    type="text"
                                    placeholder="CEP"
                                    className="form-control form-control-lg"
                                    onChange={() => { }}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-6">
                                <input
                                    type="text"
                                    placeholder="Cidade"
                                    className="form-control form-control-lg"
                                    onChange={() => { }}
                                />
                            </div>
                            <div className="col-6 pl-0">
                                <input
                                    type="text"
                                    placeholder="Logradouro"
                                    className="form-control form-control-lg"
                                    onChange={() => { }}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-5">
                                <input
                                    type="text"
                                    placeholder="Número"
                                    className="form-control form-control-lg"
                                    onChange={() => { }}
                                />
                            </div>
                            <div className="col-5 pl-0">
                                <input
                                    type="text"
                                    placeholder="Bairro"
                                    className="form-control form-control-lg"
                                    onChange={() => { }}
                                />
                            </div>
                            <div className="col-2 pl-0">
                                <input
                                    type="text"
                                    placeholder="UF"
                                    className="form-control form-control-lg"
                                    onChange={() => { }}
                                />
                            </div>
                        </div>

                        <span className="section-title">Dados de Pagamento</span>
                        <div className="row mb-3">
                            <div className="col-6">
                                <input
                                    type="text"
                                    placeholder="Número do Cartão"
                                    className="form-control form-control-lg"
                                    onChange={() => { }}
                                />
                            </div>
                            <div className="col-6 pl-0">
                                <input
                                    type="text"
                                    placeholder="Nome no Cartão"
                                    className="form-control form-control-lg"
                                    onChange={() => { }}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-6">
                                <input
                                    type="text"
                                    placeholder="Validade"
                                    className="form-control form-control-lg"
                                    onChange={() => { }}
                                />
                            </div>
                            <div className="col-6 pl-0">
                                <input
                                    type="text"
                                    placeholder="CVV"
                                    className="form-control form-control-lg"
                                    onChange={() => { }}
                                />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12 d-flex justify-content-between align-items-center">
                                <b>Total</b>
                                <h3>R$ 500,00</h3>
                            </div>
                            <div className="col-12">
                                <button
                                    onClick={() => { }}
                                    className="btn btn-block btn-lg btn-primary"
                                >
                                    Finalizar Compra
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="box col mb-4 box-sidebar">
                            <h4>Minha Sacola (5)</h4>
                            <div className="row products">
                                <div className="row products">
                                    {[1,2,3,4,5,6,7,8,9].map(product => <Product />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
