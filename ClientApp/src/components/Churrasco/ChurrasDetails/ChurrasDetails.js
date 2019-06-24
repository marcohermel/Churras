import React from 'react';
import moment from 'moment'
import { Button, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faBackward } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export default ({ churras }) => {

    const formatDecimalValue = (decimalValue) => decimalValue.toFixed(2).toString().replace(".", ",");
    const sumValorContribuicao = () => {
        return churras.participantes.reduce(function (soma, p) { return soma + p.valorContribuicao; }, 0);
    }
    const sumValorJaPago = () => {
        return churras.participantes.reduce(function (soma, p) { return p.pago ? soma + p.valorContribuicao : 0; }, 0);
    }
    const totalBebuns = () => {
        return churras.participantes.reduce(function (soma, p) { return p.comBebida ? soma + 1 : 0; }, 0);
    }
    const totalSaudaveis = () => {
        return churras.participantes.reduce(function (soma, p) { return !p.comBebida ? soma + 1 : 0; }, 0);
    }

    return (
        <Container>
            <h2 className="pt-2">{churras.descricao + " - " + moment(churras.data).format("DD/MM/YYYY")}</h2>
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
            </div>
            <ul className="list-group margin">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <label className="font-weight-bold">Valor Sugerido Sem Bebida</label>
                    R$ {formatDecimalValue(churras.valorSugeridoSemBebida)}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <label className="font-weight-bold">Valor Sugerido Com Bebida</label>
                    R$ {formatDecimalValue(churras.valorSugeridoComBebida)}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <label className="font-weight-bold"> Valor a ser arrecadado</label>
                    R$ {sumValorContribuicao()}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <label className="font-weight-bold"> Valor já pago </label>
                    R$ {sumValorJaPago()}
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <label className="font-weight-bold">  Total Participantes</label>
                    <span className="badge badge-dark badge-pill"> {churras.participantes.length} </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <label className="font-weight-bold">Total de Bebuns  </label>
                    <span className="badge badge-dark badge-pill"> {totalBebuns()}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <label className="font-weight-bold">Total de Saudáveis </label>
                    <span className="badge badge-dark badge-pill"> {totalSaudaveis()}</span>
                </li>
            </ul>
            <div className="pt-2">
                <Link to="/" >
                    <Button outline size="sm" color="dark">
                        Voltar <FontAwesomeIcon icon={faBackward} />
                    </Button>
                </Link>
                &nbsp;
                    <Button outline size="sm" color="dark">
                    Adicionar Participante + <FontAwesomeIcon icon={faUserFriends} />
                </Button>
            </div>
        </Container>     
    )
}
