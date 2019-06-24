import React from 'react';
import NumberFormat from 'react-number-format';
import DatePicker from "react-datepicker";
import { Container, Col, Row, FormGroup, InputGroup, Button } from 'reactstrap';
import InputMask from 'react-input-mask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt, faEraser, faCalendar, faCoins, faFileSignature } from '@fortawesome/free-solid-svg-icons';

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
                            <InputGroup>
                                <FontAwesomeIcon icon={faCalendar} />&nbsp;
                                <DatePicker required className='form-control  form-control-sm'
                                    customInput={<InputMask mask="99/99/9999"
                                        onChange={props.handleChangeDatePicker} />}
                                    selected={props.churras.data}
                                    onChange={props.handleChangeDatePicker}
                                    dateFormat="dd/MM/yyyy" />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <label>Descrição</label>
                            <InputGroup>
                                <FontAwesomeIcon icon={faFileSignature} />&nbsp;
                            <textarea name='descricao' maxLength="4000" required
                                    className='form-control  form-control-sm'
                                    placeholder="descrição"
                                    value={props.churras.descricao}
                                    onChange={props.handleChange} />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <label>Observação</label>
                            <InputGroup>
                                <FontAwesomeIcon icon={faFileSignature} />&nbsp;
                            <textarea name="observacao" maxLength="4000"
                                    className='form-control  form-control-sm'
                                    placeholder="observação"
                                    value={props.churras.observacao}
                                    onChange={props.handleChange} />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <label> Valor sugerido com bebida </label>
                            <InputGroup>
                                <FontAwesomeIcon icon={faCoins} /> &nbsp; <NumberFormat required
                                    maxLength={8}
                                    fixedDecimalScale
                                    decimalSeparator=","
                                    className='form-control form-control-sm'
                                    name='valorSugeridoComBebida'
                                    onChange={props.handleChangeDecimal}
                                    value={props.churras.valorSugeridoComBebida.toString().replace(".", ",")}
                                    decimalScale={2} />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <label>Valor sugerido sem bebida  </label>
                            <InputGroup>
                                <FontAwesomeIcon icon={faCoins} /> &nbsp;
                            <NumberFormat required
                                    maxLength={8}
                                    fixedDecimalScale
                                    decimalSeparator=","
                                    className='form-control form-control-sm'
                                    name='valorSugeridoSemBebida'
                                    onChange={props.handleChangeDecimal}
                                    value={props.churras.valorSugeridoSemBebida.toString().replace(".", ",")}
                                    decimalScale={2} />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <Button outline color="dark" type="submit">
                                {renderTextIcon()}
                            </Button>
                            &nbsp;
                            <Button outline color="danger" onClick={props.handleClear}>
                                Cancelar <FontAwesomeIcon icon={faEraser} />
                            </Button>
                        </FormGroup>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

