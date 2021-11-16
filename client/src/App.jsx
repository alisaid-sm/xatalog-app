import { Fragment } from 'react';
import './App.css';
import Routes from './routes'

import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Fragment>
      <div>
        <Provider store={store}>
            <Routes />
        </Provider>
      </div>
    </Fragment>
  );
}

export default App;