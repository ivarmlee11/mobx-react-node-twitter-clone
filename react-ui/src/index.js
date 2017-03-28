import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const config = {
  databaseURL: 'https://reactmobxtwitterclone.firebaseio.com',
};

ReactDom.render(
  <App config={config} />,
  document.getElementById('root')
);