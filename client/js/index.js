import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import CheeseList from './components/Cheese-List';

console.log(`Client running in ${process.env.NODE_ENV} mode`);


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<CheeseList />, document.getElementById('app'));
});