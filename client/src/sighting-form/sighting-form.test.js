import React from 'react';
import ReactDOM from 'react-dom';
import SightingForm from './sighting-form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SightingForm/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
