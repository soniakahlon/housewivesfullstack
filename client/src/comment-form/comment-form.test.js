import React from 'react';
import ReactDOM from 'react-dom';
import CommentForm from './comment-form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommentForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
