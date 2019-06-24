import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(participante => (
            <tr key={participante.participanteID}>
                <td>
                    {participante.participanteID}
                </td>
                <td>
                    {participante.valorContribuicao}
                </td>
                <td>{participante.pago ? "Sim" : "Não"}</td>
                <td>{participante.comBebida ? "Sim" : "Não"}</td>
                <td>{participante.observacao}</td>
                <td className="float-right">
                    &nbsp;
                    <Button outline size="sm" color="dark" onClick={() => props.handleGet(participante.participanteID)}>
                        Editar <FontAwesomeIcon icon={faPen} />
                    </Button>
                    &nbsp;
                    <Button outline size="sm" color="danger" onClick={() => props.handleRemove(participante.participanteID)}>
                        Remover <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </td>
            </tr>
        ))
    }
    return (<div>
        <h4>Participantes</h4>
        <hr />
        <table className="table table-striped table-sm">
            <thead className="thead-dark">
                <tr>
                    <th>Nome</th>
                    <th>Valor Contribuido</th>
                    <th>Pago?</th>
                    <th>Com Bebida?</th>
                    <th>Observação</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    </div>);

}
