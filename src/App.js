import React, { Component } from 'react';
import axios from 'axios';
import Starships from './components/Starships';
import './App.css';

class App extends Component {
  state = {
    starshipInfo: [],
    isLoaded: false,
  };

  componentDidMount() {
    this.getStarshipInfo();
  }

  getStarshipInfo() {
    return axios.get('https://swapi.co/api/starships/').then((response) => {
      const retrievedInfo = response.data.results;
      this.setState({
        starshipInfo: retrievedInfo,
        isLoaded: true,
      });
    });
  }

  render() {
    const { starshipInfo, isLoaded } = this.state;
    return isLoaded ? (
      <Starships list={starshipInfo} />
    ) : (
      <p className="info">Obtaining data... </p>
    );
  }
}

export default App;
