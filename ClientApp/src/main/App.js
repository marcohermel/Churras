import React, { Component } from 'react';
import { Layout } from './Layout';
import { Route } from 'react-router';
import Churrasco from '../components/Churrasco';
import ChurrascoDetais from '../components/Churrasco/ChurrasDetails';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path='/' component={Churrasco} />
        <Route path='/Details/:id' component={ChurrascoDetais} />
      </Layout >
    );
  }
}
