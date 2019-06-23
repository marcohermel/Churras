import React from 'react';
import moment from 'moment'
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

export default props => {
    //const formatDecimalValue = (decimalValue) => decimalValue.toFixed(2).toString().replace(".",",");
    const renderRows = () => {
        const list = props.list || []
        return list.map(churras => (
            <tr key={churras.churrascoID}>
                <td>
                    {churras.churrascoID}
                </td>
                <td>
                    {moment(churras.data).format("DD/MM/YYYY")}
                </td>
                <td>{churras.descricao}</td>
                {/* <td>{churras.observacao}</td>
                <td>{formatDecimalValue(churras.valorSugeridoComBebida)}</td>
                <td>{formatDecimalValue(churras.valorSugeridoSemBebida)}</td> */}
                <td className="float-right">
                    <Button color="btn btn-outline-dark btn-sm" onClick={() => props.handleGet(churras.churrascoID)}>
                        Alterar <FontAwesomeIcon icon={faPen} />
                    </Button>
                    &nbsp;
                    <Button color="btn btn-outline-danger btn-sm" onClick={() => props.handleRemove(churras.churrascoID)}>
                        Remover <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </td>


            </tr>
        ))
    }
    return (
        <table className="table table-sm table-hover table-striped">
            <thead>
                <tr className="thead-dark">
                    <th>ID</th>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th></th>

                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )

}
