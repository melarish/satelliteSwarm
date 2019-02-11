import React, { Component } from 'react';
import Footer from './Footer.js'
import Header from './Header.js'
import animation from './satellite-animation.gif'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    let tableData = null;
    if(this.state.items.length) {
      tableData = this.state.items.map((satellite) => (
        <tr>
          <td>{satellite.catalogNumber}</td><td>{satellite.noradCatalogNumber}</td><td>{satellite.name}</td><td>{satellite.stateTimestamp}</td>
        </tr>
      ));
    }

    return (
      <div className="App">
        <Header />
        <content className="App-content">
          <h1>Latest SWARM satellite state vectors:</h1>
          <table className="ui celled table">
            <thead>
              <tr>
                <th>Catalog Number</th><th>NORAD ID</th><th>Name</th><th>Most Recent State Vector Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {tableData}
            </tbody>
          </table>
          {!this.state.items.length &&
          <p>
            <img src={animation} alt="" />
            Loading... This should take a few seconds
          </p>}
        <Footer />
        </content>
      </div>
    );
  }
}

export default App;
