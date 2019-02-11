import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('fetches data from API', async () => {
  window.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      resolve({
        status: 200,
        ok: true,
        json: () => new Promise((resolve, reject) => {
          resolve({
            'results': [
              {
                'catalogNumber': 'L5429',
                'noradCatalogNumber': 39451,
                'name': 'SWARM B',
                'stateTimestamp': '2019-02-09T14:18:53.558976Z'
              }
            ]
          });
        })
      });
    });
  });
  const wrapper = await mount(<App />);
  await wrapper.update();
  expect(window.fetch).toBeCalled();
  expect(wrapper.state('items').length).toEqual(1);
  expect(wrapper.state('items')[0].name).toEqual("SWARM B");
  wrapper.unmount();
});
