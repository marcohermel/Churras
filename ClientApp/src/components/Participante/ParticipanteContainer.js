import React from 'react';
import axios from 'axios';
import ParticipanteForm from './ParticipanteForm';
import ParticipanteList from './ParticipanteList';
import { Container, Col, Row, Card, CardTitle, CardHeader, CardBody } from "reactstrap";

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
        this.getChurras = this.getChurras.bind(this);
        this.state = {
            participante: this.clearFields
        }
    }
    clearFields = {
        participanteID: null,
        churrascoID: this.props.churras.churrascoID,
        nome: '',
        valorContribuicao: this.props.churras.valorSugeridoSemBebida,
        comBebida: false,
        observacao: '',
        pago: true
    }

    getChurras() {
        this.props.getChurras();
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
        let valorCont = value ? this.props.churras.valorSugeridoComBebida : this.props.churras.valorSugeridoSemBebida;
        this.setState({
            participante: { ...this.state.participante, comBebida: value, valorContribuicao: valorCont }
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
                .then(() => this.props.getChurras());
        } else {
            axios.post(URL, this.state.participante)
                .then(() => this.props.getChurras());
            this.setState({ participante: this.clearFields });
        }
    }
    handleClear() {
        let participante = this.clearFields;
        this.setState({ participante: participante });
    }
    handleRemove(ParticipanteID) {
        axios.delete(`${URL}/${ParticipanteID}`)
            .then(() => this.props.getChurras());
    }

    renderImg() {
        if (this.state.participante.comBebida) {
            return (<figure className="figure">
                <img src={require("../../images/vader-ceva.jpg")} className="figure-img img-fluid rounded" alt="Os melhores churras da galáxia." />
                <figcaption className="figure-caption">"Talvez só uma bebidinha."</figcaption>
            </figure>)
        } else {
            return (<figure className="figure">
                <img src={require("../../images/vader-churras2.jpeg")} className="figure-img img-fluid rounded" alt="As melhores bebidas e churras da galáxia." />
                <figcaption className="figure-caption">"Não vou beber hoje."</figcaption>
            </figure>)
        }
    }
    render() {
        if (this.state.participante) {
            let title = this.state.participante.participanteID ? "Alterar Participante" : "Cadastrar Participante";
            return (
                <Container>
                    <Row>
                        <Col>
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
                        <Col>
                            {this.renderImg()}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="border-dark mt-2 mb-2" >
                                <CardHeader> Participantes </CardHeader>
                                <CardBody>
                                    <ParticipanteList
                                        list={this.props.churras.participantes}
                                        handleRemove={this.handleRemove}
                                        handleGet={this.handleGet} />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            );
        } else {
            return (<p>Carregando...</p>)
        }
    }
}