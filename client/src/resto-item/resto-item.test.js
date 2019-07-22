import React from 'react';
import ReactDOM from 'react-dom';
import RestoItem from './resto-item';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RestoItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
