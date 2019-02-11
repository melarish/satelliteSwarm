# satelliteSwarm
Fetch data from SWARM satellites in low Earth orbit

## How to run on local

Prerequisites: python3, requests, dependencies in package.json

- Run `python3 api_requests.py` to start the API server
- Run `npm start` to start the React app
- Open `localhost:3000`

It will load the most recent state vectors for all satellites with SWARM in the name.

Run `npm test` for running tests (uses Jest and Enzyme with mock functions).
