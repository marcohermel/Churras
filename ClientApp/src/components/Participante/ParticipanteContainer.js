import React from 'react';
import axios from 'axios';
import ParticipanteForm from './ParticipanteForm';
import ParticipanteList from './ParticipanteList';
import { Col, Row, Card, CardTitle } from "reactstrap";

const URL = 'https://localhost:44392/api/participantes'

export default class ParticipanteContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChangeDecimal = this.handleChangeDecimal.bind(this);
        this.handleGet = this.handleGet.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
        this.state = {
            participante: this.clearFields,
            participanteList: []
        }
    }
    clearFields = {
        participanteID: null,
        churrascoID: this.props.churras.churrascoID,
        nome: '',
        valorContribuicao: 0.00,
        comBebida: false,
        observacao: '',
        pago: true
    }
    componentDidMount() {
        this.refreshList();
    }
    handleChange(e) {
        let participante = { ...this.state.participante, [e.target.name]: e.target.value }
        this.setState({ participante: participante });
    }

    handleCheckBoxChange(e) {
        this.setState({
            participante: { ...this.state.participante, pago: e.target.checked }
        });
    }
    handleOptionChange(e) {
        let value = (e.target.name === "comBebida" && e.target.checked);
        this.setState({
            participante: { ...this.state.participante, comBebida: value }
        });
    }
    handleChangeDecimal(e) {
        let participante = { ...this.state.participante, [e.target.name]: e.target.value.replace(",", ".") }
        this.setState({ participante: participante });
    }
    handleGet(participanteID) {
        axios.get(`${URL}/${participanteID}`).then(response => {
            let participante = response.data;
            this.setState({ participante: participante });
        })
    }
    handleSave(e) {
        e.preventDefault();
        let participante = this.state.participante;
        if (participante.participanteID) {
            axios.put(`${URL}/${participante.participanteID}`, participante)
                .then(() => this.refreshList());
        } else {
            axios.post(URL, this.state.participante)
                .then(() => this.refreshList());
        }
    }
    handleClear() {
        let participante = this.clearFields;
        this.setState({ participante: participante });
    }
    handleRemove(ParticipanteID) {
        axios.delete(`${URL}/${ParticipanteID}`)
            .then(() => this.refreshList());
    }
    refreshList() {
        axios.get(URL).then(response => {
            this.setState({
                ...this.state,
                participanteList: response.data,
                participante: this.clearFields
            });
        });
    }
    render() {
        if (this.state.participante) {
            let title = this.state.participante.participanteID ? "Alterar Participante" : "Cadastrar Participante";
            return (
                <Row>
                    <Col lg="6">
                        <Card body>
                            <ParticipanteList
                                list={this.state.participanteList}
                                handleRemove={this.handleRemove}
                                handleGet={this.handleGet} />
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card body>
                            <CardTitle>
                                {title}
                            </CardTitle>
                            <ParticipanteForm
                                handleSave={this.handleSave}
                                handleClear={this.handleClear}
                                handleChange={this.handleChange}
                                handleOptionChange={this.handleOptionChange}
                                handleCheckBoxChange={this.handleCheckBoxChange}
                                handleChangeDecimal={this.handleChangeDecimal}
                                participante={this.state.participante} />
                        </Card>
                    </Col>
                </Row>
            );
        } else {
            return (<p>Carregando...</p>)
        }
    }
}