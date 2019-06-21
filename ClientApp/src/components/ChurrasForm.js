import React from 'react';
import  NumberFormat   from 'react-number-format';
import DatePicker from "react-datepicker";
import { Container, Col, Row, FormGroup, Button } from 'reactstrap';
import InputMask from 'react-input-mask';

export default props => (
    <Container>
        <Row>
            <Col>
            <form  onSubmit={props.handleAdd}>

           
                <FormGroup>
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
                    <NumberFormat  required
                    fixedDecimalScale
                    decimalSeparator=","
                    className='form-control'
                       name='valorSugeridoComBebida'
                      onBlur={props.handleChangeDecimal} 
                      value={props.churras.valorSugeridoComBebida} 
                      decimalScale={2} />
                </FormGroup>
                <FormGroup>
                    <label>Valor sugerido sem bebida  </label>
                    <NumberFormat  required
                    fixedDecimalScale
                    decimalSeparator=","
                    className='form-control' 
                       name='valorSugeridoSemBebida'
                      onBlur={props.handleChangeDecimal} 
                      value={props.churras.valorSugeridoSemBebida} 
                      decimalScale={2} />
                </FormGroup>
                <FormGroup>
                    <Button color="btn btn-outline-primary" type="submit">Cadastrar</Button>
                    &nbsp;
                    <Button color="btn btn-outline-dark" onClick={props.handleClear}>Limpar</Button>
                </FormGroup>
                </form>
            </Col>
        </Row>
    </Container>
)

