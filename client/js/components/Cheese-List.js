import React from 'react';
import reactdom from 'react-dom';


import cheeses from '../cheeses';
console.log(cheeses);

var CheeseList = React.createClass({
    render: function (props) {
        <ul>
            <li>{props.cheeses}</li>
        </ul>
    }
});