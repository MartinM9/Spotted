import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './Style/App.scss';
import './Style/Signup-Login.scss';
import './Style/Spots.scss';
import './Style/Profile.scss';
import * as serviceWorker from './serviceWorker';
import { Router} from 'react-router-dom';
import history from './history';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(<Router history={history}><App /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();