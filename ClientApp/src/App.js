import React, { Component } from 'react';
import { Layout } from './components/Layout';
import ChurrasForm from './components/ChurrasForm';
import ChurrasList from './components/ChurrasList';
import axios from 'axios';
import { Col, Row, Card , CardTitle} from "reactstrap";

const URL = 'https://localhost:44392/api/churrascos'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDatePicker = this.handleChangeDatePicker.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChangeDecimal = this.handleChangeDecimal.bind(this);
    this.state = {
      churras: this.clearFields,
      churrasList: []
    }
    this.refresh();
  }
  static displayName = App.name;
  handleChange(e) {

    let churras = { ...this.state.churras, [e.target.name]: e.target.value }
    this.setState({ churras: churras });
  }
  handleChangeDatePicker(date) {
    let churras = { ...this.state.churras, data: date }
    this.setState({ churras: churras });
  }
  handleChangeDecimal(e) {
   
    let churras = { ...this.state.churras, [e.target.name]: e.target.value.replace(",",".") }
    this.setState({ churras: churras });
  }
  handleAdd(e) {
    e.preventDefault();
    axios.post(URL, this.state.churras)
      .then(() => this.refresh());
  }
  handleClear() {
    let churras = this.clearFields;
    this.setState({ churras: churras });
  }

  handleRemove(churras) {
    axios.delete(`${URL}/${churras.churrascoID}`)
      .then(() => this.refresh());
  }
  clearFields = {
    churrascoID: null,
    data: null,
    descricao: '',
    observacao: '',
    valorSugeridoComBebida: 0,
    valorSugeridoSemBebida: 0
  }

  refresh() {
    axios.get(URL).then(response => {
      console.log(this.state);
      this.setState({
        ...this.state,
        churrasList: response.data,
        churras: this.clearFields
      })

    });
  }
  handle
  render() {
    return (
      <Layout>
        <Row>
          <Col lg="8">
            <Card body>

              <ChurrasList
                list={this.state.churrasList}
                handleRemove={this.handleRemove} />

            </Card>
          </Col>
          <Col lg="4">
            <Card body>
            <CardTitle>
              Cadastrar Churrasco
            </CardTitle>
              <ChurrasForm
                handleAdd={this.handleAdd}
                handleClear={this.handleClear}
                handleChange={this.handleChange}
                handleChangeDatePicker={this.handleChangeDatePicker}
                handleChangeDecimal={this.handleChangeDecimal}
                churras={this.state.churras} />
            </Card>
          </Col>
        </Row>
      </Layout >
    );
  }
}
