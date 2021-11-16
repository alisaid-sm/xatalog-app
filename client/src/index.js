import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'moment/locale/id';

import App from './App';

// axios.defaults.headers.token = localStorage.getItem('token');
moment.locale('id');

ReactDOM.render( <App />, document.getElementById('root') );