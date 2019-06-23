import React, { Component } from 'react';
import ChurrasForm from './ChurrasForm';
import ChurrasList from './ChurrasList';
import axios from 'axios';
import { Col, Row, Card, CardTitle } from "reactstrap";

const URL = 'https://localhost:44392/api/churrascos'

export default class ChurrasContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDatePicker = this.handleChangeDatePicker.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChangeDecimal = this.handleChangeDecimal.bind(this);
    this.handleGet = this.handleGet.bind(this);
    this.state = {
      churras: this.clearFields,
      churrasList: []
    }
  }
  clearFields = {
    churrascoID: null,
    data: null,
    descricao: '',
    observacao: '',
    valorSugeridoComBebida: 0,
    valorSugeridoSemBebida: 0
  }

  componentDidMount(){
    this.refreshList();
  }

  handleChange(e) {
    let churras = { ...this.state.churras, [e.target.name]: e.target.value }
    this.setState({ churras: churras });
  }
  handleChangeDatePicker(date) {
    let churras = { ...this.state.churras, data: date }
    this.setState({ churras: churras });
  }
  handleChangeDecimal(e) {
    let churras = { ...this.state.churras, [e.target.name]: e.target.value.replace(",", ".") }
    this.setState({ churras: churras });
  }
  handleGet(churrascoID) {
    axios.get(`${URL}/${churrascoID}`).then(response => {
      let churras = response.data;
      churras.data = new Date(churras.data);

      this.setState({ churras: churras });
    })
  }
  handleSave(e) {
    e.preventDefault();
    let churras = this.state.churras;
    if(churras.churrascoID){
      axios.put(`${URL}/${churras.churrascoID}`, churras)
      .then(() => this.refreshList());
    }else{
      axios.post(URL, this.state.churras)
      .then(() => this.refreshList());
    }
  }
  handleClear() {
    let churras = this.clearFields;
    this.setState({ churras: churras });
  }
  handleRemove(churrascoID) {
    axios.delete(`${URL}/${churrascoID}`)
      .then(() => this.refreshList());
  }
  refreshList() {
    axios.get(URL).then(response => {
      this.setState({
        ...this.state,
        churrasList: response.data,
        churras: this.clearFields
      });
    });
  }
  render() {
    let title = this.state.churras.churrascoID ? "Alterar Churrasco" : "Cadastrar Churrasco";
    return (     
        <Row>
          <Col lg="6">
            <Card body>
              <ChurrasList
                list={this.state.churrasList}
                handleRemove={this.handleRemove}
                handleGet={this.handleGet}
              />
            </Card>
          </Col>
          <Col lg="6">
            <Card body>
              <CardTitle>
                {title}
              </CardTitle>
              <ChurrasForm
                handleSave={this.handleSave}
                handleClear={this.handleClear}
                handleChange={this.handleChange}
                handleChangeDatePicker={this.handleChangeDatePicker}
                handleChangeDecimal={this.handleChangeDecimal}
                churras={this.state.churras} />
            </Card>
          </Col>
        </Row>   
    );
  }
}
