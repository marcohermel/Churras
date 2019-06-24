import React from 'react';
import axios from 'axios';
import ChurrasDetails from './ChurrasDetails';
import Participante from '../../Participante'

const URL = 'https://localhost:44392/api/churrascos';

export default class ChurrasDetailsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            churras: null
        }
    }
    componentWillMount() {
        this.getChurras();
    }
    getChurras() {
        axios.get(`${URL}/${this.props.match.params.id}`).then(response => {         
            let churras = response.data;
            churras.data = new Date(churras.data);
            this.setState({ churras: churras });
        });
    }
    render() {
        if (this.state.churras) {
            return (
                <React.Fragment>
                    <ChurrasDetails churras={this.state.churras} />
                    <Participante churras={this.state.churras} />
                </React.Fragment>
            )
        }else{
            return (<p>Caregando...</p>)
        }
    }
}
