import React from 'react';
import moment from 'moment'
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(churras => (
            <tr key={churras.churrascoID}>
                <td>
                    {moment(churras.data).format("DD/MM/YYYY")}
                </td>
                <td>{churras.descricao}</td>
                <td className="float-right">
                    &nbsp;
                    <Link to={`Details/${churras.churrascoID}`} >
                        <Button outline size="sm" color="dark">
                            Detalhes/Participantes <FontAwesomeIcon icon={faFileInvoice} />
                        </Button>
                    </Link>
                    &nbsp;
                    <Button outline size="sm" color="dark" onClick={() => props.handleGet(churras.churrascoID)}>
                        Alterar <FontAwesomeIcon icon={faPen} />
                    </Button>
                    &nbsp;
                    <Button outline size="sm" color="danger" onClick={() => props.handleRemove(churras.churrascoID)}>
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
