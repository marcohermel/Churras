import React from 'react';
import NumberFormat from 'react-number-format';
import { Container, Col, Row, FormGroup, InputGroup, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt, faEraser, faCoins, faFileSignature, faBeer, faUser, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
export default props => {
   const renderTextIcon = () => {
      if (props.participante.ParticipanteID) {
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
                     <input type="hidden" name="participanteID" value={props.participante.participanteID || ""} />
                     <input type="hidden" name="churrascoID" value={props.participante.churrascoID} />
                     <label>Nome</label>
                     <InputGroup>
                        <FontAwesomeIcon icon={faUser} /> &nbsp;
                        <input type="text" name='nome' maxLength="100" required
                           className='form-control  form-control-sm'
                           placeholder="Nome"
                           value={props.participante.nome}
                           onChange={props.handleChange} />
                     </InputGroup>
                  </FormGroup>
                  <FormGroup>
                     <InputGroup>
                        <FontAwesomeIcon icon={faBeer} /> &nbsp;
                   <div className="form-check form-check-inline">
                           <input className="form-check-input" type="radio" name="semBebida"
                              onChange={props.handleOptionChange} value="false"
                              checked={!props.participante.comBebida} />
                           <label className="form-check-label"> Sem bebida  </label>
                        </div>
                        <div className="form-check form-check-inline">
                           <input className="form-check-input" type="radio" name="comBebida"
                              onChange={props.handleOptionChange} value="true"
                              checked={props.participante.comBebida} />
                           <label className="form-check-label" >Com bebida </label>
                        </div>
                     </InputGroup>
                  </FormGroup>
                  <FormGroup>
                     <label> Valor Contribuição </label>
                     <InputGroup>
                        <FontAwesomeIcon icon={faCoins} /> &nbsp; <NumberFormat required
                           maxLength={8}
                           fixedDecimalScale
                           decimalSeparator=","
                           className='form-control form-control-sm'
                           name='valorContribuicao'
                           onChange={props.handleChangeDecimal}
                           value={props.participante.valorContribuicao.toString().replace(".", ",")}
                           decimalScale={2} />
                     </InputGroup>
                  </FormGroup>
                  <FormGroup>
                  </FormGroup>
                  <FormGroup>
                     <label>Observação</label>
                     <InputGroup>
                        <FontAwesomeIcon icon={faFileSignature} />&nbsp;
                            <textarea name="observacao" maxLength="4000"
                           className='form-control  form-control-sm'
                           placeholder="observação"
                           value={props.participante.observacao}
                           onChange={props.handleChange} />
                     </InputGroup>
                  </FormGroup>
                  <FormGroup>
                     <InputGroup>
                        <FontAwesomeIcon icon={faHandHoldingUsd} />&nbsp;
                     <div className="form-check">
                           <input className="form-check-input" type="checkbox"
                              onChange={props.handleCheckBoxChange}
                              checked={props.participante.pago} name="pago" />
                           <label className="form-check-label">Pago?</label>
                        </div>
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

