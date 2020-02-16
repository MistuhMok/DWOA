import React, { Component } from 'react';
import AddressForm from './AddressForm';
import axios from 'axios';

import './App.css';
import ElectionInfo from './ElectionInfo';

export default class App extends Component {
  constructor() {
    super();
    this.state = { elections: [], noResults: false, loading: false };
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, elections: [] });

    const state = event.target.state.value;
    const city = event.target.city.value.replace(/ /g, '_');

    event.target.reset();

    const { data } = await axios.get(`/api/search/${state},${city}`);

    if (data.length > 0)
      this.setState({ elections: data, noResults: false, loading: false });
    else this.setState({ noResults: true, loading: false });
  };

  generateMessage() {
    const { elections, noResults, loading } = this.state;

    if (loading) return <h3>Searching...</h3>;

    if (noResults) return <h3>There are no elections in this area.</h3>;

    if (elections.length > 0)
      return <h3>There are {elections.length} elections in this area.</h3>;
  }

  render() {
    const { elections } = this.state;
    return (
      <div className="App">
        <AddressForm handleSubmit={this.handleSubmit} />

        {this.generateMessage()}

        {elections.length > 0 &&
          elections.map((election, idx) => (
            <ul key={idx}>
              <ElectionInfo election={election} />
            </ul>
          ))}
      </div>
    );
  }
}
