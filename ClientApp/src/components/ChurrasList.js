import React from 'react';
import moment from 'moment'
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(churras => (
            <tr key={churras.churrascoID}>
                <td>
                    {moment(churras.data).format("DD/MM/YYYY")}
                </td>
                <td>{churras.descricao}</td>
                <td>{churras.observacao}</td>
                <td>{churras.valorSugeridoComBebida.toFixed(2).toString().replace(".",",")}</td>
                <td>{churras.valorSugeridoSemBebida.toFixed(2).toString().replace(".",",")}</td>
                <td>
                    <Button color="btn btn-outline-dark"
                        onClick={() => props.handleGet(churras.churrascoID)}>Alterar <FontAwesomeIcon icon={faPen} /></Button>
                </td>
                <td>
                    <Button color="btn btn-outline-danger"
                        onClick={() => props.handleRemove(churras.churrascoID)}>Remover <FontAwesomeIcon icon={faTrash} /></Button>
                </td>
            </tr>
        ))
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Observação</th>
                    <th>Valor sugerido com bebida</th>
                    <th>Valor sugerido sem bebida</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )

}
