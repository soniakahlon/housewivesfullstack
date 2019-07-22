import React from 'react';
import ReactDOM from 'react-dom';
import RestoList from './resto-list';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RestoList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
