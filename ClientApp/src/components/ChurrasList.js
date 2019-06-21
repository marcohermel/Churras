import React from 'react';
import moment from 'moment'
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(churras => (
            <tr key={churras.churrascoID}>
                <td>{churras.churrascoID}</td>
                <td>
                    {moment(churras.data).format("DD/MM/YYYY")}
                </td>
                <td>{churras.descricao}</td>
                <td>{churras.observacao}</td>
                <td>{churras.valorSugeridoComBebida}</td>
                <td>{churras.valorSugeridoSemBebida}</td>
                <td>
                  
                    <Button color="btn btn-outline-danger"
                        onClick={() => props.handleRemove(churras)}>Remover   <FontAwesomeIcon  icon={faTrash} /></Button>
                </td>

            </tr>
        ))
    }
    return (

        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Observação</th>
                    <th>Valor sugerido com bebida</th>
                    <th>Valor sugerido sem bebida</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )

}
