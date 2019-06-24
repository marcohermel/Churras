import React from 'react';
import moment from 'moment'
import { Button, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faCoins, faBackward, faHandHoldingUsd, faBeer } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export default ({ churras }) => {

    const formatDecimalValue = (decimalValue) => decimalValue.toFixed(2).toString().replace(".", ",");
    const sumValorContribuicao = () => {

        return churras.participantes.reduce(function (soma, p) { return soma + p.valorContribuicao; }, 0);
    }
    const sumValorJaPago = () => {
        return churras.participantes.reduce(function (soma, p) { return p.pago ? soma + p.valorContribuicao : soma }, 0);
    }
    const totalBebuns = () => {
        return churras.participantes.reduce(function (soma, p) { return p.comBebida ? soma + 1 : soma; }, 0);
    }
    return (
        <Container>
            <Row>
                <Col lg="12">
                    <div className="mt-2">
                        <Link to="/" >
                            <Button outline size="sm" color="dark">
                                Voltar <FontAwesomeIcon icon={faBackward} />
                            </Button>
                        </Link>
                    </div>
                    <h2 className="mt-2">{churras.descricao + " - " + moment(churras.data).format("DD/MM/YYYY")}</h2>
                    <div>
                        <h4>Detalhes do Churrasco</h4>
                        <hr />
                        <div className="form-row">
                            <div className="col-lg-2">
                                <label className="font-weight-bold">Observação</label>
                            </div>
                            <div className="col-lg-10">
                                {churras.observacao}
                            </div>
                        </div>
                        <ul className="list-group margin">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <label className="font-weight-bold">Valor sugerido sem bebida</label>
                            R$ {formatDecimalValue(churras.valorSugeridoSemBebida)}
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <label className="font-weight-bold">Valor sugerido Com bebida</label>
                            R$ {formatDecimalValue(churras.valorSugeridoComBebida)}
                        </li>
                    </ul>
                    </div>

                    <div className="row mb-3">
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card bg-dark text-white h-100">
                                <div className="card-body bg-dark">
                                    <div className="rotate">
                                        <FontAwesomeIcon icon={faCoins} size="4x" />
                                    </div>
                                    <h6 className="text-uppercase">Valor Total R$</h6>
                                    <h1 className="display-4">{formatDecimalValue(sumValorContribuicao())}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-white bg-dark h-100">
                                <div className="card-body bg-dark">
                                    <div className="rotate">
                                        <FontAwesomeIcon icon={faHandHoldingUsd} size="4x" />
                                    </div>
                                    <h6 className="text-uppercase"> Valor já pago R$</h6>
                                    <h1 className="display-4">{formatDecimalValue(sumValorJaPago())}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-white bg-dark h-100">
                                <div className="card-body bg-dark">
                                    <div className="rotate">
                                        <FontAwesomeIcon icon={faUserFriends} size="4x" />
                                    </div>
                                    <h6 className="text-uppercase"> Total de Participantes</h6>
                                    <h1 className="display-4">{churras.participantes.length}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-white bg-dark h-100">
                                <div className="card-body">
                                    <div className="rotate">
                                        <FontAwesomeIcon icon={faBeer} size="4x" />
                                    </div>
                                    <h6 className="text-uppercase">Total de Bebuns </h6>
                                    <h1 className="display-4">{totalBebuns()}</h1>
                                </div>
                            </div>
                        </div>
                    </div>             
                </Col>
                <Col lg="4">
                 
                </Col>
            </Row>
        </Container>
    )
}
