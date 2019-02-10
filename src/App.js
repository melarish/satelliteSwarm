import React, { Component } from 'react';
import logo from './logo.svg';
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
          console.log(result.objects);
          let swarm = [];
          for (let satellite of result.objects) {
            if (satellite.name.includes("SWARM")) {
              console.log("unknown");
              swarm.push(satellite);
            }
          }
          console.log(swarm);
          this.setState({
            isLoaded: true,
            items: swarm
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
      tableData = this.state.items.map((el, i) => (
        <tr>
          <td>{el.catalogNumber}</td><td>{el.noradCatalogNumber}</td><td>{el.name}</td>
        </tr>
      ));
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Result:
          <table>
            <tbody>
              <tr>
                <td>Catalog Number | </td><td>Norad ID | </td><td>Name | </td><td>Most Recent State Vector Timestamp</td>
              </tr>
              {tableData}
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default App;

/* https://api.leolabs.space/v1/catalog/objects

Can you write a single-page app that can search the LeoLabs catalog
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
