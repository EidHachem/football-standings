import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../Redux/store';
import LeagueDetails from '../LeagueDetails';

describe('Leagues test', () => {
  it('renders leagues', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <LeagueDetails />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
