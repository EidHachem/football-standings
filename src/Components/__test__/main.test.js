import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../Redux/store';
import Main from '../Main';

describe('Main test', () => {
  it('renders leagues', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
