import React from 'react';
import ReactDOM from 'react-dom';

import { HelloWorld } from './Components/HelloWorld';

ReactDOM.render(
    React.createElement(HelloWorld),
    document.querySelector('#root'),
)