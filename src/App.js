import React, { Component } from 'react';
import Header from './Header.js'
import logo from './logo.svg';
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Latest SWARM satellite state vectors:
          <table className="ui celled table">
            <thead>
              <tr>
                <th>Catalog Number</th><th>Norad ID</th><th>Name</th><th>Most Recent State Vector Timestamp</th>
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
        </header>
      </div>
    );
  }
}

export default App;

/* Can you write a single-page app that can search the LeoLabs catalog
and show some information about some specific satellites?

I'd like to see a page that presents a table that shows all of the
objects that have 'SWARM' in their name along with some basic
information about the latest 'State Vector' for each of those.

I'm imagining a page that contains a table roughly described by this example:

Catalog Number | Norad ID | Name | Most Recent State Vector Timestamp
L3972 | 39452 | SWARM A | 2019-02-05 19:04:31
...

Getting Started
1) Create an account on the LeoLabs Platform.
https://platform.leolabs.space/register

2) Take a look at the LeoLabs Api Documentation here:
https://platform.leolabs.space/documentation/api

You can use the 'List all Objects' api to get a list of known Catalog Objects.
You can use the 'Retrieve State Vectors' api to get 'State Vectors' for objects.
You may find the the following Catalog Page helpful for validation:
https://platform.leolabs.space/catalog/L3972

I'm looking for the page content to refresh if the page is reloaded.

This way, if a new "SWARM" object were to appear in the catalog, or if
there were new "State Vector" objects, that these changes would be
reflected on the page.
 */
