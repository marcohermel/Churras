import React from 'react';
import NumberFormat from 'react-number-format';
import DatePicker from "react-datepicker";
import { Container, Col, Row, FormGroup, Button } from 'reactstrap';
import InputMask from 'react-input-mask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt, faEraser } from '@fortawesome/free-solid-svg-icons';

export default props => {
    const renderTextIcon = () => {
        if (props.churras.churrascoID) {
            return <React.Fragment>Salvar <FontAwesomeIcon icon={faPencilAlt} /></React.Fragment>
        } else {
            return <React.Fragment> Cadastrar <FontAwesomeIcon icon={faPlus} /></React.Fragment>
        }
    }
    return (
        <Container>
            <Row>
                <Col>
                    <form onSubmit={props.handleSave} >
                        <FormGroup>
                            <input type="hidden" name="churrascoID" value={props.churras.churrascoID || ""} />
                            <label>Data</label>
                            <div>
                                <DatePicker className="form-control" required
                                    customInput={<InputMask mask="99/99/9999"
                                        onChange={props.handleChangeDatePicker} />}
                                    selected={props.churras.data}
                                    onChange={props.handleChangeDatePicker}
                                    dateFormat="dd/MM/yyyy" />
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <label>Descrição</label>
                            <textarea name='descricao' maxLength="4000" required
                                className='form-control'
                                placeholder="descrição"
                                value={props.churras.descricao}
                                onChange={props.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Observação</label>
                            <textarea name="observacao" maxLength="4000"
                                className='form-control'
                                placeholder="observação"
                                value={props.churras.observacao}
                                onChange={props.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label> Valor sugerido com bebida </label>
                            <NumberFormat required
                                maxLength={8}
                                fixedDecimalScale
                                decimalSeparator=","
                                className='form-control'
                                name='valorSugeridoComBebida'
                                onChange={props.handleChangeDecimal}
                                value={props.churras.valorSugeridoComBebida.toString().replace(".", ",")}
                                decimalScale={2} />
                        </FormGroup>
                        <FormGroup>
                            <label>Valor sugerido sem bebida  </label>
                            <NumberFormat required
                                maxLength={8}
                                fixedDecimalScale
                                decimalSeparator=","
                                className='form-control'
                                name='valorSugeridoSemBebida'
                                onChange={props.handleChangeDecimal}
                                value={props.churras.valorSugeridoSemBebida.toString().replace(".", ",")}
                                decimalScale={2} />
                        </FormGroup>
                        <FormGroup>
                            <Button color="btn btn-outline-dark" type="submit">
                                {renderTextIcon()}
                            </Button>
                            &nbsp;
                            <Button color="btn btn-outline-danger" onClick={props.handleClear}>
                                Cancelar <FontAwesomeIcon icon={faEraser} />
                            </Button>
                        </FormGroup>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

