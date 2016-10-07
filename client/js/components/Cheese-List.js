import React from 'react';
import ReactDOM from 'react-dom';

import cheeses from '../cheeses';

    var threeCheeses = cheeses.slice(0,3);

var CheeseList = function (props) {
    console.log(threeCheeses);
    let eachCheese = threeCheeses.map (cheese => <li> {cheese} </li> );
        return ( 
            <ul>{eachCheese}</ul>
        );
};

export default CheeseList;