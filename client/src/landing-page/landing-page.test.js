import React from 'react';
import ReactDOM from 'react-dom';
import Landingpage from './landing-page';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Landingpage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
