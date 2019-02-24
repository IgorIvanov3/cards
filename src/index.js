import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';
import MainComponent from './components/mainComponent.js';

ReactDOM.render(<MainComponent />, document.getElementById('root'));

serviceWorker.unregister();
