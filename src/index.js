import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/container/container';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Container/>, document.getElementById('root'));
registerServiceWorker();
