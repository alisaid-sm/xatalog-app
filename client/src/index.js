import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'moment/locale/id';

import App from './App';

axios.defaults.headers.token = sessionStorage.getItem('token');
moment.locale('id');

ReactDOM.render( <App />, document.getElementById('root') );