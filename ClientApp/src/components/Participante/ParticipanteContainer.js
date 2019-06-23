import React from 'react';
import ChurrasForm from './ParticipanteForm';
import ChurrasList from './ParticipanteList';
import axios from 'axios';
export default class ParticipanteContainer extends React.Component {
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
            participante: this.clearFields,
            ParticipanteList: []
        }
    }
    clearFields = {
        participanteID: null,
        data: null,
        descricao: '',
        observacao: '',
        valorSugeridoComBebida: 0,
        valorSugeridoSemBebida: 0
    }
    componentDidMount() {
        this.refreshList();
    }
    handleChange(e) {
        let participante = { ...this.state.participante, [e.target.name]: e.target.value }
        this.setState({ participante: participante });
    }
    handleChangeDatePicker(date) {
        let participante = { ...this.state.participante, data: date }
        this.setState({ participante: participante });
    }
    handleChangeDecimal(e) {
        let participante = { ...this.state.participante, [e.target.name]: e.target.value.replace(",", ".") }
        this.setState({ participante: participante });
    }
    handleGet(participanteID) {
        axios.get(`${URL}/${participanteID}`).then(response => {
            let participante = response.data;
            participante.data = new Date(participante.data);

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
                ParticipanteList: response.data,
                participante: this.clearFields
            });
        });
    }
    render() {
        return (<h1>teste</h1>)
    }
}