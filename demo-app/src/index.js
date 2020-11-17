import React from 'react';
import ReactDOM from 'react-dom';

import { CarTool } from './Components/CarTool';

const carsList = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'silver', price: 30000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2017, color: 'red', price: 120000 },

];

ReactDOM.render(
    <CarTool cars={carsList} />,
    document.querySelector('#root'),
)