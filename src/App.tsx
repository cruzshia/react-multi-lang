import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Provider } from 'react-redux';

import { LangRegex } from './constants/LangConfig';
import store from './store';
import Header from './components/Header';
import Prices from './components/Prices';
import ComingSoon from './components/Common/ComingSoon';

import './css/reset.css';
import './css/common.css';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <Header/>
            <Switch>
              <Route exact path='/' component={Prices}/>
              <Route exact path={`/:lng(${LangRegex})/prices`} component={Prices}/>
              <Route exact path={`/:lng(${LangRegex})/wallet`} component={ComingSoon}/>
              <Route exact path={`/:lng(${LangRegex})/account`} component={ComingSoon}/>
              <Route component={() => <Redirect to='/'/>} />
            </Switch>
          </div>
        </Provider>

      </Router>
    );
  }
}

export default App;
