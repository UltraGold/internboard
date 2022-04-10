import React, { Component } from 'react';
import Table from './Table';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
      </div>
    );
  }
}

export default App;
