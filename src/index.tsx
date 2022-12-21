import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

// import { store } from './app/store';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './app/store';

// Just a convenient component with all the wrappers for the `App`
// The Router component (if you use it) should be placed inside the Provider
const Root = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
